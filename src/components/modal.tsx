import { FC, ReactNode, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Overlay, useTheme } from '@rneui/themed';
import { Icon } from "./icon";
import { IconNameEnum } from "@utils/enums";

interface IModal {
    visible: boolean
    children: ReactNode
    onClose: ()=> void
    onBackdropPress?: ()=> void
}

export const Modal:FC<IModal> = ({
    visible,
    children,
    onClose,
    onBackdropPress,
})=> {

    const { theme } = useTheme();

    const styles = useMemo(()=> (
        StyleSheet.create({
          container: {
            borderRadius: 20,
            padding: 20,
            width: '90%',
          },
          iconContainer: {
            position: 'absolute',
            zIndex: 99,
            right: 15,
            top: 15,
          },
          childrenContainer: {
            marginTop: 30
          }
        })
    ), []);

    return (
        <Overlay 
            isVisible={visible} 
            onBackdropPress={onBackdropPress}
            overlayStyle={styles.container}
        >
            <View style={styles.iconContainer}>
                <Icon 
                    iconName={IconNameEnum.close}
                    color={theme.colors.grey3}
                    onPress={onClose}
                />
            </View>

            <View style={styles.childrenContainer}>
                {children}
            </View>
        </Overlay>
    )
}