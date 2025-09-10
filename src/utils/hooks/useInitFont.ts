import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FontsEnum } from '@utils/enums';

export const useInitFont = ()=> {
    
    const [loaded, error] = useFonts({
        [FontsEnum.AVENIR_NEXT_LIGHT]: require('@assets/fonts/AvenirNextCyr-Light.ttf'),
        [FontsEnum.AVENIR_NEXT_REGULAR]: require('@assets/fonts/AvenirNextCyr-Regular.ttf'),
        [FontsEnum.AVENIR_NEXT_MEDIUM]: require('@assets/fonts/AvenirNextCyr-Medium.ttf'),
        [FontsEnum.AVENIR_NEXT_DEMI]: require('@assets/fonts/AvenirNextCyr-Demi.ttf'),
        [FontsEnum.AVENIR_NEXT_BOLD]: require('@assets/fonts/AvenirNextCyr-Bold.ttf'),
        [FontsEnum.AVENIR_NEXT_HEAVY]: require('@assets/fonts/AvenirNextCyr-Heavy.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    // Gestion des erreurs
    useEffect(() => {
        if (error) {
            console.error('Font loading error:', error);
        }
    }, [error]);

    return {
        loaded,
        error,
        isReady: loaded && !error,
    };
}