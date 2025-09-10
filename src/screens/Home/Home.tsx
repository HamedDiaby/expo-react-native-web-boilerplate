import { FC } from "react";
import { useStyles } from "./useStyles";
import { useUserSelector } from "@utils/hooks";
import { useTheme } from '@rneui/themed';
import { ScreenWrapper, Text } from "@components";
import { useTranslation } from "@utils/translations";

export const Home:FC = ()=> {

    const styles = useStyles();
    const { t } = useTranslation();
    const { user } = useUserSelector();
    const { theme } = useTheme();

    return (
        <ScreenWrapper>
            <Text 
                label={t('welcome')}
            />
        </ScreenWrapper>
    )
}