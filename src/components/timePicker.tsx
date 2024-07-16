
import { FC, useCallback, useMemo, useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from "react-native";

import { getHoure, getMinute } from "@utils/functions";
import { useTheme } from "@rneui/themed";

interface ITimePicker {
    onSelectedHoure: (el: string)=> void
    onSelectedMinutes: (el: string)=> void
}

export const TimePicker:FC<ITimePicker> = ({
    onSelectedHoure,
    onSelectedMinutes,
})=> {

    const styles = useStyles();

    const [selectedHours, setSelectedHours] = useState(getHoure(new Date()));
    const [selectedMinutes, setSelectedMinutes] = useState(getMinute(new Date()));
    const [showHourList, setShowHourList] = useState(false);
    const [showMinuteList, setShowMinuteList] = useState(false);

    const houreList = useMemo(()=> {
        let hours = [];
        for (let i = 0; i < 24; i++) {
            hours.push(i.toString().padStart(2, '0'));
        }
        return hours;
    }, []);

    const minutesList = useMemo(()=> {
        let minutes = [];
        for (let i = 0; i < 60; i++) {
            minutes.push(i.toString().padStart(2, '0'));
        }
        return minutes;
    }, []);

    const toggleShowHourList = useCallback(()=> {
        setShowHourList(!showHourList);
        setShowMinuteList(false);
    }, [showHourList]);

    const toggleShowMinuteList = useCallback(()=> {
        setShowMinuteList(!showMinuteList);
        setShowHourList(false);
    }, [showMinuteList]);

    const renderHourList = useCallback(()=> {
        if(!showHourList) return;
        
        return (
            <View style={styles.floatContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        houreList.map((el, i)=> {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={()=> {
                                        setSelectedHours(el);
                                        onSelectedHoure(el);
                                        toggleShowHourList();
                                    }}
                                >
                                    <View style={styles.timeItem}>
                                        <Text style={styles.txtItem}>
                                            {el}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }, [
        styles,
        showHourList,
        houreList,
        toggleShowHourList,
        onSelectedHoure,
    ]);

    const renderMinutesList = useCallback(()=> {
        if(!showMinuteList) return;

        return (
            <View style={styles.floatContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        minutesList.map((el, i)=> {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={()=> {
                                        setSelectedMinutes(el);
                                        onSelectedMinutes(el);
                                        toggleShowMinuteList();
                                    }}
                                >
                                    <View style={styles.timeItem}>
                                        <Text style={styles.txtItem}>
                                            {el}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }, [
        styles,
        showMinuteList,
        minutesList,
        toggleShowMinuteList,
        onSelectedMinutes,
    ]);
    
    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <TouchableOpacity
                    onPress={toggleShowHourList}
                >
                    <View style={styles.timeSubContainer}>
                        <Text style={styles.txtItem}>
                            {selectedHours}
                        </Text>
                    </View>
                    {renderHourList()}
                </TouchableOpacity>

                <Text style={styles.doubleDots}>
                    :
                </Text>

                <TouchableOpacity
                    onPress={toggleShowMinuteList}
                >
                    <View style={styles.timeSubContainer}>
                        <Text style={styles.txtItem}>
                            {selectedMinutes}
                        </Text>
                    </View>
                    {renderMinutesList()}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const useStyles = ()=> {

    const { theme } = useTheme();

    const styles = useMemo(()=> (
        StyleSheet.create({
            container: {
                flex: 1,
                zIndex: 99,
            },
            timeContainer: {
                flexDirection: 'row',
                alignItems: 'center',
            },
            timeSubContainer: {
                width: 100,
                height: 40,
                borderRadius: 10,
                marginHorizontal: 5,
                backgroundColor: theme.colors.primary,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            },
            floatContainer: {
                position: 'absolute',
                zIndex: 9999,
                top: -200,
                width: 110,
                height: 200,
                borderRadius: 5,
                flexDirection: 'column',
                overflow: 'hidden',
                backgroundColor: theme.colors.primary
            },
            timeItem: {
                width: 110,
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: 'lightgrey',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            txtItem: {
                color: '#fff',
                fontWeight: '600',
                fontSize: 12
            },
            doubleDots: {
                color: theme.colors.primary,
                fontWeight: '700',
                fontSize: 18
            }
        })
    ), []);

    return styles;
}
