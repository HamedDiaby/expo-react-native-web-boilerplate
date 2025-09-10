import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

// Types pour les familles d'icônes disponibles
export type IconFamily = 
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome6'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export interface IconProps {
  family?: IconFamily;
  iconName: string;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  [key: string]: any;
}

// Mapping des familles d'icônes vers leurs composants
const IconFamilyComponents = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} as const;

export const Icon: React.FC<IconProps> = ({
    iconName,
    family = 'Feather',
    color = '#000',
    size = 24,
    style,
    onPress,
    ...props
}) => {
    // Récupération du composant d'icône correspondant à la famille
    const IconComponent = IconFamilyComponents[family];

    if (!IconComponent) {
        console.warn(`Icon family "${family}" not found. Available families: ${Object.keys(IconFamilyComponents).join(', ')}`);
        return null;
    }

    return (
        //@ts-ignore
        <IconComponent
            name={iconName}
            size={size}
            color={color}
            style={style}
            onPress={onPress}
            {...props}
        />
    );
};
