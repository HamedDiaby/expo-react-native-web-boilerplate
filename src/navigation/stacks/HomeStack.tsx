import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';
import { commonScreenOptions } from '../common';
import { NavigationRoutesEnum } from '@utils/enums';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen:FC = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name={NavigationRoutesEnum.home}
            options={commonScreenOptions}
            component={Home}
        />
    </HomeStack.Navigator>
);
