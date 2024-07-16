import { FC, useMemo } from "react";
import { Icon as IconComponent } from '@rneui/themed';
import { IconNameEnum } from "@utils/enums";

interface IIcon {
    iconName: IconNameEnum
    color?: string
    onPress?: ()=> void
}

export const Icon:FC<IIcon> = ({
    iconName,
    color,
    onPress,
})=> {

    const renderIconProps = useMemo(()=> {
        switch (iconName) {
            case IconNameEnum.home:
                return {
                    name: IconNameEnum.home,
                    type: 'ant-design'
                };
            case IconNameEnum.menu:
                return {
                    name: IconNameEnum.menu,
                    type: 'entypo'
                };
            case IconNameEnum.edit:
                return {
                    name: IconNameEnum.edit,
                    type: 'material-icons'
                };
            case IconNameEnum.email:
                return {
                    name: IconNameEnum.email,
                    type: 'entypo'
                };
            case IconNameEnum.user:
                return {
                    name: IconNameEnum.user,
                    type: 'font-awesome'
                };
            case IconNameEnum.lock:
                return {
                    name: IconNameEnum.lock,
                    type: 'feather',
                };
            case IconNameEnum.left:
                return {
                    name: IconNameEnum.left,
                    type: 'entypo',
                };
            case IconNameEnum.longRight:
                return {
                    name: IconNameEnum.longRight,
                    type: 'ant-design',
                };
            case IconNameEnum.phone:
                return {
                    name: IconNameEnum.phone,
                    type: 'ant-design',
                };
            case IconNameEnum.trash:
                return {
                    name: IconNameEnum.trash,
                    type: 'font-awesome',
                };
            case IconNameEnum.heart:
                return {
                    name: IconNameEnum.heart,
                    type: 'ant-design',
                };
            case IconNameEnum.close:
                return {
                    name: IconNameEnum.close,
                    type: 'ionicons',
                };
            case IconNameEnum.info:
                return {
                    name: IconNameEnum.info,
                    type: 'feather',
                };
            case IconNameEnum.check:
                return {
                    name: IconNameEnum.check,
                    type: 'feather',
                };
            case IconNameEnum.notifyOn:
                return {
                    name: IconNameEnum.notifyOn,
                    type: 'feather',
                };
            case IconNameEnum.notifyOff:
                return {
                    name: IconNameEnum.notifyOff,
                    type: 'feather',
                };
            case IconNameEnum.search:
                return {
                    name: IconNameEnum.search,
                    type: 'feather',
                };
            case IconNameEnum.eye:
                return {
                    name: IconNameEnum.eye,
                    type: 'feather',
                };
            case IconNameEnum.eyeOff:
                return {
                    name: IconNameEnum.eyeOff,
                    type: 'feather',
                };
            case IconNameEnum.calendar:
                return {
                    name: IconNameEnum.calendar,
                    type: 'feather',
                };
        }
    }, [iconName]);

    return (
        <IconComponent 
            {...renderIconProps}
            color={color}
            onPress={onPress} 
        />
    )
}