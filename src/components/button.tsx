import { ColorsEnum, FontsEnum } from "@utils/enums";
import { FC } from "react";
import { 
    TouchableOpacity, StyleProp, 
    ViewStyle, TextStyle, ActivityIndicator, 
    View,
} from "react-native";
import { Text } from "./text";

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'small' | 'medium' | 'large';

interface Props {
    title: string;
    onPress: () => void;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    loading?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

export const Button: FC<Props> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    style,
    textStyle,
    icon,
    iconPosition = 'left'
}) => {

    const getButtonStyle = (): StyleProp<ViewStyle> => {
        const baseStyle: ViewStyle = {
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: "row",
        };

        // Size styles
        switch (size) {
            case 'small':
                baseStyle.paddingVertical = 8;
                baseStyle.paddingHorizontal = 16;
                baseStyle.minHeight = 36;
                break;
            case 'medium':
                baseStyle.paddingVertical = 12;
                baseStyle.paddingHorizontal = 24;
                baseStyle.minHeight = 44;
                break;
            case 'large':
                baseStyle.paddingVertical = 16;
                baseStyle.paddingHorizontal = 32;
                baseStyle.minHeight = 52;
                break;
        }

        // Variant styles
        switch (variant) {
            case 'primary':
                baseStyle.backgroundColor = disabled ? ColorsEnum.disabled : ColorsEnum.primary;
                break;
            case 'secondary':
                baseStyle.backgroundColor = disabled ? ColorsEnum.disabled : ColorsEnum.secondary;
                break;
            case 'outline':
                baseStyle.backgroundColor = 'transparent';
                baseStyle.borderWidth = 1;
                baseStyle.borderColor = disabled ? ColorsEnum.disabled : ColorsEnum.primary;
                break;
            case 'ghost':
                baseStyle.backgroundColor = 'transparent';
                break;
        }

        if (disabled) {
            baseStyle.opacity = 0.6;
        }

        return baseStyle;
    };

    const getTextColor = (): string => {
        if (disabled) {
            return ColorsEnum.grey3;
        }

        switch (variant) {
            case 'primary':
            case 'secondary':
                return ColorsEnum.white;
            case 'outline':
            case 'ghost':
                return ColorsEnum.primary;
            default:
                return ColorsEnum.white;
        }
    };

    const getTextVariant = () => {
        switch (size) {
            case 'small':
                return 'p2' as const;
            case 'medium':
                return 'p1' as const;
            case 'large':
                return 'h6' as const;
            default:
                return 'p1' as const;
        }
    };

    const getFontWeight = () => {
        switch (variant) {
            case 'primary':
            case 'secondary':
                return FontsEnum.AVENIR_NEXT_DEMI;
            case 'outline':
            case 'ghost':
                return FontsEnum.AVENIR_NEXT_MEDIUM;
            default:
                return FontsEnum.AVENIR_NEXT_DEMI;
        }
    };

    return (
        <TouchableOpacity
            style={[getButtonStyle(), style]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator 
                    color={getTextColor()} 
                    size={size === 'small' ? 'small' : 'small'} 
                />
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <View style={{ marginRight: 8 }}>
                            {icon}
                        </View>
                    )}
                    <Text
                        label={title}
                        variant={getTextVariant()}
                        font={getFontWeight()}
                        color={getTextColor()}
                        align="center"
                        style={textStyle}
                    />
                    {icon && iconPosition === 'right' && (
                        <View style={{ marginLeft: 8 }}>
                            {icon}
                        </View>
                    )}
                </>
            )}
        </TouchableOpacity>
    );
};