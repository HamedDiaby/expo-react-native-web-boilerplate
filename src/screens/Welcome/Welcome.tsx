import { FC } from "react";
import { useTheme } from '@rneui/themed';
import { View } from "react-native";
import { ScreenWrapper, Text, Button } from "@components";
import { useControllers } from "./useControllers";

export const Welcome:FC = ()=> {

    const { theme } = useTheme();
    const { t, handlePrimaryAction, handleSecondaryAction } = useControllers();

    return (
        <ScreenWrapper>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
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

                <View style={{ width: '100%', gap: 16 }}>
                    <Button
                        title={t('welcome.primaryButton')}
                        onPress={handlePrimaryAction}
                        variant="primary"
                        size="large"
                    />
                    
                    <Button
                        title={t('welcome.secondaryButton')}
                        onPress={handleSecondaryAction}
                        variant="outline"
                        size="large"
                    />
                </View>
            </View>
        </ScreenWrapper>
    )
}