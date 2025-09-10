import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '@screens';
import { NavigationRoutesEnum } from '@utils/enums';

const OnboardingStack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const OnboardingStackScreen: FC = () => {

    return (
        <OnboardingStack.Navigator
            initialRouteName={NavigationRoutesEnum.WELCOME}
            screenOptions={screenOptions}
        >
            <OnboardingStack.Screen
                name={NavigationRoutesEnum.WELCOME}
                component={Welcome}
            />
        </OnboardingStack.Navigator>
    );
};
