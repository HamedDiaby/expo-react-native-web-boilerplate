import { FC, useMemo } from "react";
import { StyleSheet } from "react-native";
import { SearchBar, useTheme } from '@rneui/themed';
import { FontsEnum } from "@utils/enums";
import { useSizeScreen } from "@utils/hooks";

interface ISearchInput {
  placeholder: string
  search: string
  onChange: (e: string)=> void
}

export const SearchInput:FC<ISearchInput> = ({
  placeholder,
  search,
  onChange,
})=> {

  const { theme } = useTheme();
  const { isWeb } = useSizeScreen();

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
        borderColor: theme.colors.grey3,
        borderTopColor: theme.colors.grey3,
        borderBottomColor: theme.colors.grey3,
        backgroundColor: theme.colors.white
      },
      inputContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 0,
      },
      input: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 12,
        fontFamily: FontsEnum.AVENIR_NEXT_LIGHT,
        color: theme.colors.black,
        ...(isWeb ? { outlineStyle: 'none' } : {})
      }
    })
  ), [theme, isWeb]);

  return (
    <SearchBar
      placeholder={placeholder}
      onChangeText={onChange}
      value={search}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
    />
  )
}