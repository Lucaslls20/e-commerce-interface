import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import AntDesign from "react-native-vector-icons/AntDesign";
import MyCart1 from "../Pages/MyCart1";

// Tipagem para as rotas do Bottom Tab Navigator
export type BottomTabParamList = {
  Home: undefined;
  Detail: undefined;
  MyCart1: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function MyBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#f36137",
        tabBarInactiveTintColor: "#919191",
        tabBarStyle: {
          display: route.name === "Detail" || route.name === "MyCart1" ? "none" : "flex",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 10,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          tabBarLabel: "Details",
          tabBarIcon: ({ color }) => (
            <AntDesign name="infocirlceo" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCart1"
        component={MyCart1}
        options={{
          headerShown: false,
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
