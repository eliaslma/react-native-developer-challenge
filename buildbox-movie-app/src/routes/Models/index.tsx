import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigatorStack = {
    HomeScreen: undefined;
    MovieDetailScreen: undefined;
    ProfileScreen: any;
}

export type propsNavigationStack = NativeStackNavigationProp<propsNavigatorStack>