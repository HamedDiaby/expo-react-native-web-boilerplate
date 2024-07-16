import { FC, useCallback, useMemo } from "react";
import { StyleSheet, Text } from "react-native";
import { Input as InputComponent, useTheme } from '@rneui/themed';
import { FontsEnum, IconNameEnum, TranslationKeysEnum } from "@utils/enums";
import { Icon } from "./icon";
import { useSizeScreen, useTranslation } from "@utils/hooks";

interface IInput {
  disable?: boolean
  placeholder: string
  value: string
  onChange: (e: string)=> void
  inputType?: "text" | "email" | "password" | undefined
  displayPassword?: boolean
  toggleDisplayPassword?: ()=> void
}

export const Input:FC<IInput> = ({
  placeholder,
  value,
  onChange,
  inputType = 'text',
  displayPassword = true,
  disable = false,
  toggleDisplayPassword,
})=> {

  const { theme } = useTheme();
  const { isWeb } = useSizeScreen();
  const translation = useTranslation();

  const isValidEmail = useMemo(()=> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value)
  }, [value]);

  const styles = useMemo(()=> (
      StyleSheet.create({
        container: {
          overflow: 'hidden',
          width: '96%',
          height: 50,
          borderRadius: 50,
          padding: 0,
          borderWidth: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: isValidEmail ? theme.colors.error : theme.colors.grey3,
          borderTopColor: isValidEmail ? theme.colors.error : theme.colors.grey3,
          borderBottomColor: isValidEmail ? theme.colors.error : theme.colors.grey3,
          backgroundColor: theme.colors.white,
          flexDirection: 'row',
          alignItems: 'center',
        },
        inputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
          borderWidth: 0,
        },
        input: {
          flex: 1,
          backgroundColor: 'transparent',
          fontSize: 12,
          fontFamily: FontsEnum.AVENIR_NEXT_LIGHT,
          color: theme.colors.black,
          ...(isWeb ? { outlineStyle: 'none' } : {})
        },
        textError: {
          color: theme.colors.error,
          marginLeft: 20,
          marginTop: 5,
          fontSize: 12,
          fontFamily: FontsEnum.AVENIR_NEXT_DEMI
        }
      })
  ), [isValidEmail, isWeb, theme]);

  const renderInput = useCallback(()=> {
    switch (inputType) {
      case 'text':
        return (
          <InputComponent
            disabled={disable}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
          />
        );
      case 'email':
        return (
          <>
            <InputComponent
              disabled={disable}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              containerStyle={styles.container}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.input}
              leftIcon={(
                <Icon 
                  iconName={IconNameEnum.email}
                  color={isValidEmail ? theme.colors.error : theme.colors.grey3}
                />
              )}
            />
            {
              isValidEmail && (
                <Text style={styles.textError}>
                  {translation(TranslationKeysEnum.invalidEmail)}
                </Text>
              )
            }
          </>
        );
        case 'password':
          return (
            <InputComponent
              disabled={disable}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              containerStyle={styles.container}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.input}
              secureTextEntry={displayPassword}
              leftIcon={(
                <Icon 
                  iconName={IconNameEnum.lock}
                  color={theme.colors.grey3}
                />
              )}
              rightIcon={(
                <Icon 
                  iconName={displayPassword ? IconNameEnum.eye : IconNameEnum.eyeOff}
                  color={theme.colors.grey3}
                  onPress={toggleDisplayPassword}
                />
              )}
            />
          );
    
      default:
        return (
          <InputComponent
            disabled={disable}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
          />
        );
    }
  }, [
    inputType, placeholder, 
    value, styles, theme, 
    isValidEmail, onChange,
    displayPassword,
    toggleDisplayPassword,
  ])

  return renderInput();
}