import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeAppLogo from '../../assets/home_app_logo.svg';
import AccountCircle from '../../assets/account_circle.svg';


//Routes
import { HomeRoutes } from './app.stack.routes';

//Screen
import { ProfileScreen } from '../screens/ProfileScreen';


export function AppTabRoutes() {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#6D6DFA',
            }}>
            <Tab.Screen name="HomeRoutes" component={HomeRoutes}
                options={{
                    tabBarIcon: ({ color }: any) =>
                        <HomeAppLogo fill={color} width={RFValue(36)} height={RFValue(36)} />
                }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }: any) =>
                        <AccountCircle fill={color} width={RFValue(36)} height={RFValue(36)} />
                }} />
        </Tab.Navigator>
    );

}