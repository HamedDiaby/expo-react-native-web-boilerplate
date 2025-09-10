import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useStyles = ()=> {

  const styles = useMemo(()=> (
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    })
  ), [])

  return styles;
};