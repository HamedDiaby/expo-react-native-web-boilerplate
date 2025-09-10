
import { NavigationStackEnum } from "@utils/enums";
import { useNavigation } from "@utils/hooks";
import { useTranslation } from "@utils/translations";
import { useCallback } from "react";

export const useControllers = () => {

    const { t } = useTranslation();
    const { onNavigateTo } = useNavigation();

    const handlePrimaryAction = useCallback(() => {
        onNavigateTo({ stack: NavigationStackEnum.MAIN_TABS });
    }, [onNavigateTo]);

    return {
        t,
        handlePrimaryAction,
    }
};
