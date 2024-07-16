import { FC, useMemo } from "react";
import { Button as ButtonComponent } from '@rneui/themed';
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { FontsEnum } from "@utils/enums";
import { useSizeScreen } from "@utils/hooks";

interface IButton {
    label: string
    onPress: ()=> void
    buttonDisabled?: boolean
    isLoadingButton?: boolean
    buttonType?: "outline" | "solid" | "clear" | undefined
    buttonSize?: "sm" | "md" | "lg" | undefined
    buttonColor?: "primary" | "secondary" | "success" | "error" | "warning" | undefined
    containerStyle?: StyleProp<ViewStyle>
}

export const Button:FC<IButton> = ({
    label,
    onPress,
    buttonSize,
    buttonType,
    buttonColor,
    buttonDisabled = false,
    isLoadingButton = false,
    containerStyle,
})=> {

    const { isDesktop } = useSizeScreen();

    const buttonStyles = useMemo(()=> (
        StyleSheet.create({
          container: {
            paddingHorizontal: 50,
          },
          text: {
            fontSize: 16,
            fontFamily: isDesktop ? FontsEnum.AVENIR_NEXT_DEMI : FontsEnum.AVENIR_NEXT_BOLD
          }
        })
    ), [isDesktop]);

    return (
        <ButtonComponent
            onPress={onPress}
            radius={100}
            type={buttonType}
            size={buttonSize}
            color={buttonColor}
            disabled={buttonDisabled}
            loading={isLoadingButton}
            buttonStyle={buttonStyles.container}
            titleStyle={buttonStyles.text}
            containerStyle={containerStyle}
        >
            {label}
        </ButtonComponent>
    )
}