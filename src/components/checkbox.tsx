import { FC, useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme, CheckBox as CheckBoxComponent } from '@rneui/themed';
import { FontsEnum } from "@utils/enums";
import { useSizeScreen } from "@utils/hooks";

interface ICheckbox {
    isRadio?: boolean
    checked: boolean
    label: string
    onPress: ()=> void
}

export const Checkbox:FC<ICheckbox> = ({
    checked,
    label,
    onPress,
    isRadio = false,
})=> {

    const { theme } = useTheme();
    const { isDesktop } = useSizeScreen();

    const styles = useMemo(()=> (
        StyleSheet.create({
            labelStyle: {
                color: theme.colors.grey4,
                fontFamily: isDesktop ? FontsEnum.AVENIR_NEXT_REGULAR : FontsEnum.AVENIR_NEXT_MEDIUM
            },
        })
    ), [theme, isDesktop]);

    return (
        <CheckBoxComponent 
            checked={checked} 
            title={label}
            onPress={onPress}
            textStyle={styles.labelStyle}
            iconType={isRadio ? "" : "material-community"}
            checkedIcon={isRadio ? "dot-circle-o" : "checkbox-marked"}
            uncheckedIcon={isRadio ? "circle-o" : "checkbox-blank-outline"}
            uncheckedColor={theme.colors.grey4}
        />
    )
}