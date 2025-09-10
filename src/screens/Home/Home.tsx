import { FC, useRef } from "react";
import { useStyles } from "./useStyles";
import { BottomSheetRef, Button, ScreenWrapper, Sheet, Text } from "@components";
import { useControllers } from "./useControllers";
import { ColorsEnum } from "@utils/enums";

export const Home:FC = ()=> {

    const styles = useStyles();
    const { t } = useControllers();
    const bottomSheetRef = useRef<BottomSheetRef>(null);

    return (
        <ScreenWrapper>
            <Text 
                label={t('home.title')}
            />

            <Button 
                title={'Open Bottom Sheet'}
                onPress={() => bottomSheetRef.current?.expand()}
            />

            <Sheet
                ref={bottomSheetRef}
                snapPoints={['94%']}
                enablePanDownToClose={true}
                padding={20}
            >
                <Text 
                    color={ColorsEnum.white}
                    label="Convallis lacus habitasse placerat magnis blandit interdum aliquet vestibulum quisque libero sodales praesent potenti quam donec vel ligula aenean facilisis auctor nostra magna himenaeos nisl consequat consectetur vulputate duis diam cras penatibus maximus nisi sapien eros faucibus ullamcorper class inceptos curabitur litora euismod dapibus aptent nulla nibh amet pede odio nullam ac accumsan finibus rutrum lacinia ut fermentum phasellus elit natoque"
                />
            </Sheet>
        </ScreenWrapper>
    )
}