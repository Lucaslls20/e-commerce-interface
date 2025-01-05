// Navigation.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Pages/Login";
import MyBottomTab from "./BottomTabNavigation";
import SignUp from "../Pages/SignUp";

// Tipagem para as rotas do Stack Navigator
export type RootStackParamList = {
  Login: undefined;
  MyTabs: undefined; // MyBottomTab está associado a essa rota
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MyTabs" component={MyBottomTab} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
