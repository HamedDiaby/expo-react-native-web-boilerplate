import { FC } from "react";
import { useTheme } from '@rneui/themed';
import { ScreenWrapper, Text } from "@components";
import { useControllers } from "./useControllers";

export const Welcome:FC = ()=> {

    const { theme } = useTheme();
    const { t } = useControllers();

    return (
        <ScreenWrapper>
            <Text 
                label={t('welcome.title')}
            />
        </ScreenWrapper>
    )
}