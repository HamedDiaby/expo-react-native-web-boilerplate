import { FC } from "react";
import { Switch as SwitchComponent } from '@rneui/themed';

interface ISwitch {
    checked: boolean
    onSwitch: ()=> void
}

export const Switch:FC<ISwitch> = ({
    checked,
    onSwitch,
})=> {

    return (
        <SwitchComponent
            value={checked}
            onValueChange={onSwitch}
        />
    )
}