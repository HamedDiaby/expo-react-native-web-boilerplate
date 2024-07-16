import { FC, useMemo } from "react";
import { StyleSheet } from "react-native";
import { Input as InputComponent, useTheme } from '@rneui/themed';
import { FontsEnum } from "@utils/enums";
import { useSizeScreen } from "@utils/hooks";

interface ITextarea {
  placeholder: string
  value: string
  onChange: (e: string)=> void
}

export const Textarea:FC<ITextarea> = ({
  placeholder,
  value,
  onChange,
})=> {

  const { theme } = useTheme();
  const { isWeb } = useSizeScreen();

  const styles = useMemo(()=> (
    StyleSheet.create({
      container: {
        overflow: 'hidden',
        width: '96%',
        borderRadius: 20,
        padding: 10,
        borderWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.grey3,
        borderTopColor: theme.colors.grey3,
        borderBottomColor: theme.colors.grey3,
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
        height: 150,
        fontSize: 12,
        fontFamily: FontsEnum.AVENIR_NEXT_LIGHT,
        color: theme.colors.black,
        ...(isWeb ? { outlineStyle: 'none' } : {})
      },
    })
  ), [theme, isWeb]);

  return (
    <InputComponent
      placeholder={placeholder}
      value={value}
      multiline
      numberOfLines={5}
      onChangeText={onChange}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
    />
  );
}