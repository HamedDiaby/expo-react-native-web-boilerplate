import { useNavigation as useNavigationHook } from "@react-navigation/native";
import { NavigationRoutesEnum, NavigationStackEnum } from "@utils/enums";
import { useCallback } from "react";

export interface NavigationType {
    stack: NavigationStackEnum,
    screen?: NavigationRoutesEnum,
    params?: Record<string, any>,
}

export const useNavigation = ()=> {

    const navigation = useNavigationHook();

    const onNavigateTo = useCallback((nav: NavigationType) => {
        console.log(`Navigating to stack: ${nav.stack}, screen: ${nav.screen}`, nav.params);
        try {
            if (nav.screen) {
                //@ts-ignore
                navigation.navigate(nav.stack, { screen: nav.screen, params: nav.params });
            } else {
                //@ts-ignore
                navigation.navigate(nav.stack);
            }
        } catch (error) {
            console.error("Navigation error:", error);
        }
    }, [navigation]);

    const onGoBack = useCallback(()=> {
        navigation.goBack();
    }, [navigation]);

    return {
        onNavigateTo,
        onGoBack,
    }
}
