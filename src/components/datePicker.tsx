
import { FC, useMemo, useState } from "react";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Text, TouchableOpacity, View } from "react-native";
import Popover from 'react-native-popover-view';
import { formatDate, formatDate_2, getDay, getHoure, getMinute, getMonth, getYear } from "@utils/functions";
import { TimePicker } from "./timePicker";
import { useTheme } from "@rneui/themed";
import { Button } from "./button";
import { useTranslation } from "@utils/hooks";
import { FontsEnum, IconNameEnum, TranslationKeysEnum } from "@utils/enums";
import { Icon } from "./icon";

interface IDatePicker {
    onChangeDate: (date: Date)=> void
}

export const DatePicker:FC<IDatePicker> = ({
    onChangeDate
})=> {

    const { theme } = useTheme();
    const translation = useTranslation();

    const [houre, setHoure] = useState<string>(getHoure(new Date()));
    const [minutes, setMinutes] = useState<string>(getMinute(new Date()));
    const [selected, setSelected] = useState<string>(formatDate_2(new Date));
    const [showPopover, setShowPopover] = useState<boolean>(false);

    const minDate = useMemo(()=> {
        return formatDate_2(new Date());
    }, [formatDate_2]);

    const completeDate = useMemo(()=> {
        const day = getDay(new Date(selected));
        const month = getMonth(new Date(selected));
        const year = getYear(new Date(selected));

        const date = new Date(year, month - 1, day, Number(houre), Number(minutes));
        onChangeDate(date);
        return date;
    }, [selected, houre, minutes, onChangeDate]);

    LocaleConfig.locales['fr'] = useMemo(()=> (
        {
            monthNames: [
              'Janvier', 'Février', 'Mars','Avril', 'Mai', 'Juin', 
              'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
            ],
            monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
            today: "Aujourd'hui",
        }
    ), []);

    LocaleConfig.defaultLocale = 'fr';

    return (
        <Popover
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}
            from={(
                <TouchableOpacity 
                    onPress={() => setShowPopover(true)}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '96%',
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 1,
                        paddingHorizontal: 15,
                        borderColor: theme.colors.grey3,
                    }}
                >
                    <Icon 
                        iconName={IconNameEnum.calendar}
                        color={theme.colors.grey3}
                    />
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 12,
                            fontFamily: FontsEnum.AVENIR_NEXT_LIGHT,
                            color: theme.colors.black
                        }}
                    >
                        {formatDate(completeDate)}, {getHoure(completeDate)}:{getMinute(completeDate)}
                    </Text>
                </TouchableOpacity>
            )}
            popoverStyle={{
                width: 350,
                padding: 20,
            }}
        >
            <View>
                <Calendar
                    minDate={minDate}
                    hideExtraDays
                    enableSwipeMonths
                    onDayPress={(day: any) => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: {selected: true, disableTouchEvent: true, selectedColor: theme.colors.primary},
                        // '2023-11-25': {selected: true, marked: true, selectedColor: theme.colors.primary},
                    }}
                />

                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                    <TimePicker 
                        onSelectedHoure={e=> setHoure(e)}
                        onSelectedMinutes={e=> setMinutes(e)}
                    />

                    <Button 
                        label={translation(TranslationKeysEnum.confirmed)}
                        onPress={()=> setShowPopover(false)}
                        buttonColor='secondary'
                        containerStyle={{ marginTop: 20 }}
                    />
                </View>
            </View>
        </Popover>
    )
}
