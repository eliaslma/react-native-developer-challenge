import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes';
import { useFonts } from 'expo-font';
import { Loader } from './src/components/Loader';

import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
} from '@expo-google-fonts/poppins'

export default function App() {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <StatusBar style='light' />
            <AppRoutes />
        </>
    );
}