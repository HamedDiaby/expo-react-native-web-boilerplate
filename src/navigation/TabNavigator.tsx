import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Icon, IconFamily } from '@components';
import { 
  HomeStackScreen, 
  ProfileStackScreen,
} from './stacks';
import { ColorsEnum, NavigationStackEnum } from '@utils/enums';

// Types pour la navigation par onglets
export type TabNavigationParamList = {
  [NavigationStackEnum.HOME_STACK]: undefined;
  [NavigationStackEnum.PROFILE_STACK]: undefined;
};

const Tab = createBottomTabNavigator<TabNavigationParamList>();

// Options de navigation partagées
const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

export const TabNavigator:FC = () => {

  return (
    <Tab.Navigator
      initialRouteName={NavigationStackEnum.HOME_STACK}
      screenOptions={
        ({ route } : any) => ({
          tabBarIcon: ({ focused, size } : any) => {
          let iconName: string;
          let family: IconFamily = 'Feather';

          switch (route.name) {
            case NavigationStackEnum.HOME_STACK:
              iconName = 'home';
              family = 'Octicons';
              break;
            case NavigationStackEnum.PROFILE_STACK:
              iconName = 'person';
              family = 'Octicons';
              break;
            default:
              iconName = 'circle';
          }

          return (
            <Icon 
              iconName={iconName}
              family={family}
              size={size}
              color={focused ? ColorsEnum.white : ColorsEnum.grey5}
            />
          );
        },
        tabBarActiveTintColor: ColorsEnum.white,
        tabBarInactiveTintColor: ColorsEnum.grey5,
        tabBarStyle: {
          backgroundColor: ColorsEnum.black,
          borderTopColor: ColorsEnum.grey2,
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 20 : 8,
          height: Platform.OS === 'ios' ? 85 : 65,
          display: 'flex'
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      })
    }
    >
      <Tab.Screen 
        name={NavigationStackEnum.HOME_STACK} 
        component={HomeStackScreen}
        options={{ ...screenOptions }}
      />
      <Tab.Screen 
        name={NavigationStackEnum.PROFILE_STACK} 
        component={ProfileStackScreen}
        options={{ ...screenOptions }}
      />
    </Tab.Navigator>
  );
};
