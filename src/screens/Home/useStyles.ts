import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useStyles = ()=> {

  const HomeStyles = useMemo(()=> (
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    })
  ), [])

  return HomeStyles;
};