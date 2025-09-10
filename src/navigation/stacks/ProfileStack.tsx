import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '@screens';
import { NavigationRoutesEnum } from '@utils/enums';

const ProfileStack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const ProfileStackScreen: FC = () => {

    return (
        <ProfileStack.Navigator
            initialRouteName={NavigationRoutesEnum.PROFILE}
            screenOptions={screenOptions}
        >
            <ProfileStack.Screen
                name={NavigationRoutesEnum.PROFILE}
                component={Profile}
            />
        </ProfileStack.Navigator>
    );
};
