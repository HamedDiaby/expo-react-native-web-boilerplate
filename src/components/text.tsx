import { FontsEnum } from "@utils/enums";
import { FC, useMemo } from "react";
import { Text as RNText, StyleProp, TextStyle } from "react-native";

type Variant = 'h1' | 'h2' | 'h3' | 'h3-bis' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6';

interface Props {
    label: string;
    variant?: Variant;
    font?: FontsEnum;
    color?: string;
    align?: 'left' | 'center' | 'right';
    style?: StyleProp<TextStyle>;
    numberOfLines?: number;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

export const Text:FC<Props> = ({
    label,
    variant = 'p1',
    font = FontsEnum.AVENIR_NEXT_REGULAR,
    color = '#000',
    align = 'left',
    style,
    numberOfLines,
    ellipsizeMode = 'tail'
})=> {

    const fontSize = useMemo(()=> {
        switch (variant) {
            case 'h1': return 40;
            case 'h2': return 35;
            case 'h3': return 30;
            case 'h3-bis': return 25;
            case 'h4': return 20;
            case 'h5': return 17;
            case 'h6': return 15;
            case 'p1': return 16;
            case 'p2': return 14;
            case 'p3': return 12;
            case 'p4': return 11;
            case 'p5': return 8;
            case 'p6': return 6;
            default: return 16;
        }
    }, [variant]);

    return (
        <RNText 
            style={[{ fontSize, fontFamily: font, color, textAlign: align }, style]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {label}
        </RNText>
    )
}