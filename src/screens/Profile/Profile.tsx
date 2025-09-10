import { FC } from "react";
import { useStyles } from "./useStyles";
import { ScreenWrapper, Text } from "@components";
import { useControllers } from "./useControllers";

export const Profile:FC = ()=> {

    const styles = useStyles();
    const { t, user } = useControllers();

    return (
        <ScreenWrapper>
            <Text 
                label={t('profile.title')}
            />
            <Text 
                label={t('profile.hello', { username: user?.firstname! })}
            />
        </ScreenWrapper>
    )
}