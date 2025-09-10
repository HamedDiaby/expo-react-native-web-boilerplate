import { FC } from "react";
import { useTheme } from '@rneui/themed';
import { ScreenWrapper, Text, Button } from "@components";
import { useControllers } from "./useControllers";

export const Welcome:FC = ()=> {

    const { theme } = useTheme();
    const { t, handlePrimaryAction } = useControllers();

    return (
        <ScreenWrapper>
            <Text 
                label={t('welcome.title')}
                variant="h2"
                align="center"
                style={{ marginBottom: 20 }}
            />
            
            <Text 
                label={t('welcome.subtitle')}
                variant="p1"
                align="center"
                color={theme.colors.grey5}
                style={{ marginBottom: 40 }}
            />

            <Button
                title={t('welcome.primaryButton')}
                onPress={handlePrimaryAction}
                variant="primary"
                size="large"
            />
        </ScreenWrapper>
    )
}