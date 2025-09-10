import { FC } from "react";
import { View, Text } from "react-native";

import { useStyles } from "./useStyles";
import { useTranslation, useUserSelector } from "@utils/hooks";

import { useTheme } from '@rneui/themed';

export const Home:FC = ()=> {

    const styles = useStyles();
    const translation = useTranslation();
    const { user } = useUserSelector();
    const { theme } = useTheme();

    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}