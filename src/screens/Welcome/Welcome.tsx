import { FC } from "react";
import { ScreenWrapper, Text, Button, Icon } from "@components";
import { useControllers } from "./useControllers";
import { ColorsEnum } from "@utils/enums";

export const Welcome:FC = ()=> {

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
                color={ColorsEnum.grey5}
                style={{ marginBottom: 40 }}
            />

            <Button
                title={t('welcome.primaryButton')}
                onPress={handlePrimaryAction}
                iconPosition="right"
                icon={
                    <Icon 
                        iconName="arrow-right"
                        family="Feather"
                        size={20}
                        color={ColorsEnum.white}
                    />
                }
            />
        </ScreenWrapper>
    )
}