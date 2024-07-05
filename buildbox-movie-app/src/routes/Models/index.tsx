import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigatorStack = {
    HomeScreen: any;
    MovieDetailScreen: any;
    ProfileScreen: any;
}

export type propsNavigationStack = NativeStackNavigationProp<propsNavigatorStack>