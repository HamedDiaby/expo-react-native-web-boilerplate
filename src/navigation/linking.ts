import { Platform } from 'react-native';
import { NavigationRoutesEnum, NavigationStackEnum } from '@utils/enums';

const isWeb = Platform.OS === 'web';

export const linking = {
    prefixes: isWeb 
    ? ['http://localhost:8080']
    : ['expo-react-native-web-boilerplate://', 'http://localhost:19000', 'http://localhost:8080'],
    config: {
        screens: {
            [NavigationStackEnum.ONBOARDING_STACK]: {
                path: NavigationStackEnum.ONBOARDING_STACK,
                screens: {
                    Welcome: NavigationRoutesEnum.WELCOME,
                }
            },
            [NavigationStackEnum.HOME_STACK]: {
                path: NavigationStackEnum.HOME_STACK,
                screens: {
                    Home: NavigationRoutesEnum.HOME,
                }
            },
            [NavigationStackEnum.PROFILE_STACK]: {
                path: NavigationStackEnum.PROFILE_STACK,
                screens: {
                    Profile: NavigationRoutesEnum.PROFILE,
                }
            },
        },
    }
} as any;
