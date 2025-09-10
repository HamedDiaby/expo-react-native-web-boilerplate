import { FC, useContext } from "react";
import { useStyles } from "./useStyles";
import { useTheme } from '@rneui/themed';
import { ScreenWrapper, Text } from "@components";
import { useTranslation } from "@utils/translations";
import { UserContext } from "@data/contexts";

export const Home:FC = ()=> {

    const styles = useStyles();
    const { theme } = useTheme();
    const { t } = useTranslation();
    const { user } = useContext(UserContext);

    return (
        <ScreenWrapper>
            <Text 
                label={t('home.welcome', { username: user?.firstname! })}
            />
        </ScreenWrapper>
    )
}