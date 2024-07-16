import * as Device from 'expo-device';
import { useEffect, useMemo, useState } from 'react';
import { Dimensions, Platform } from 'react-native';

export const useSizeScreen = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    const isWeb = useMemo(()=> (Platform.OS === 'web'), []);

    useEffect(() => {
        const determineDeviceType = async () => {
            const deviceType = await Device.getDeviceTypeAsync();
            const screenWidth = Dimensions.get('window').width;

            if (deviceType === Device.DeviceType.PHONE) {
                setIsMobile(true);
                setIsTablet(false);
                setIsDesktop(false);
            } else if (deviceType === Device.DeviceType.TABLET) {
                setIsMobile(false);
                setIsTablet(true);
                setIsDesktop(false);
            } else {
                setIsMobile(false);
                setIsTablet(false);
                setIsDesktop(screenWidth >= 1024); // Vous pouvez ajuster cette valeur selon vos besoins
            }
        };

        determineDeviceType();

        const updateDimensions = () => {
            const screenWidth = Dimensions.get('window').width;
            if (screenWidth < 768) {
                setIsMobile(true);
                setIsTablet(false);
                setIsDesktop(false);
            } else if (screenWidth >= 768 && screenWidth < 1024) {
                setIsMobile(false);
                setIsTablet(true);
                setIsDesktop(false);
            } else {
                setIsMobile(false);
                setIsTablet(false);
                setIsDesktop(true);
            }
        };

        Dimensions.addEventListener('change', updateDimensions);
    }, []);

    return {
        isMobile,
        isTablet,
        isDesktop,
        isWeb,
    };
};