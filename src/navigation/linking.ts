import { Platform } from 'react-native';
import { NavigationRoutesEnum, NavigationStackRoutesEnum } from '@utils/enums';

const isWeb = Platform.OS === 'web';

export const linking = {
    prefixes: isWeb 
    ? ['http://localhost:8081', 'http://localhost:19000']
    : ['expo-react-native-web-boilerplate://', 'http://localhost:19000', 'http://localhost:8081'],
    config: {
        screens: {
            [NavigationStackRoutesEnum.HomeStack]: {
                path: NavigationStackRoutesEnum.HomeStack,
                screens: {
                    Home: NavigationRoutesEnum.home,
                }
            },
        },
    }
} as any;
