import { FC } from "react";
import { useStyles } from "./useStyles";
import { ScreenWrapper, Text } from "@components";
import { useControllers } from "./useControllers";

export const Home:FC = ()=> {

    const styles = useStyles();
    const { t } = useControllers();

    return (
        <ScreenWrapper>
            <Text 
                label={t('home.title')}
            />
        </ScreenWrapper>
    )
}