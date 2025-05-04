import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


import MainPage from "@/app/(tabs)/calendar.jsx";
import HomeScreen from "@/app/(tabs)/health.jsx"
import Screen from "@/app/(tabs)/mind.jsx"
import TabTwoScreen from "@/app/(tabs)/pregnency.jsx"

const Tabs = createBottomTabNavigator();

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const screenOptions: BottomTabNavigationOptions = {
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
            ios: { position: "absolute" },
            default: {},
        }),
    };

    return (
        <Tabs.Navigator screenOptions={screenOptions}>
            <Tabs.Screen
                name="calendar"
                component={MainPage}
                options={{
                    title: "Calendar",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="calendar-outline" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="pregnency"
                component={TabTwoScreen}
                options={{
                    title: "Pregnency",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="human-pregnant" size={28} color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="health"
                component={HomeScreen}
                options={{
                    title: "Health",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="heart-outline" size={28} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="mind"
                component={Screen}
                options={{
                    title: "MindRelax",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="meditation" size={28} color={color} />
                    ),
                }}
            />
        </Tabs.Navigator>

    );
}

