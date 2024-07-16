import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from "react-native";

import { NavigationStackRoutesEnum } from "@utils/enums";
import { linking } from "./linking";
import { ErrorBoundary } from "./ErrorBoundary";
import { commonScreenOptions } from "./common";
import { 
    HomeStackScreen,
} from "./stacks";

const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => (
    <ErrorBoundary>
        <NavigationContainer
            linking={linking}
            fallback={<Text>Loading...</Text>}
        >
            <Stack.Navigator 
                screenOptions={{
                    ...commonScreenOptions, 
                    animation: 'fade',
                }}
            >
                <Stack.Screen 
                    name={NavigationStackRoutesEnum.HomeStack} 
                    component={HomeStackScreen}
                    options={commonScreenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </ErrorBoundary>
);
