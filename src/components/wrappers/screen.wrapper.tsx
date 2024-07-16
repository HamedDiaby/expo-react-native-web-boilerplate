import { FC, ReactNode } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from "react-native";

interface ScreenWrapper {
    children: ReactNode
}

export const ScreenWrapper:FC<ScreenWrapper> = ({ children })=> {
    return (
        <SafeAreaView style={ScreenWrapperStyles.container}>
            {children}
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const ScreenWrapperStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});