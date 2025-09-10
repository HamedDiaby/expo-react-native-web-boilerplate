import { Fragment, FC } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linking } from "./linking";
import { NavigationStackEnum } from "@utils/enums";
import { TabNavigator } from "./TabNavigator";
import { OnboardingStackScreen } from "./stacks";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const Navigation:FC = () => (
    <NavigationContainer
        linking={linking}
        fallback={<Fragment />}
    >
        <Stack.Navigator
          initialRouteName={NavigationStackEnum.ONBOARDING_STACK}
          screenOptions={screenOptions}
        >
          <Stack.Screen name={NavigationStackEnum.ONBOARDING_STACK} component={OnboardingStackScreen} />
          <Stack.Screen name={NavigationStackEnum.MAIN_TABS} component={TabNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
);
