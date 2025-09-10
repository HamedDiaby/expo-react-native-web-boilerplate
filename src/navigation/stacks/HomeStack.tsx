import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';
import { NavigationRoutesEnum } from '@utils/enums';

const HomeStack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const HomeStackScreen: FC = () => {

    return (
        <HomeStack.Navigator
            initialRouteName={NavigationRoutesEnum.HOME}
            screenOptions={screenOptions}
        >
            <HomeStack.Screen
                name={NavigationRoutesEnum.HOME}
                component={Home}
            />
        </HomeStack.Navigator>
    );
};
