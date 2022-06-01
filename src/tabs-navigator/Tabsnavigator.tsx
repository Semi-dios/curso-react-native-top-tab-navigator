import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StyleSheet, Text, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabsnavigator = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabsIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabsIOS.Navigator
            screenOptions={({ route }) => ({
                tabBarBackground: () => (
                    <BlurView
                        tint="light"
                        intensity={100}
                        style={StyleSheet.absoluteFill}
                    />
                ),
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-sharp' : 'ios-list-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
            <BottomTabsIOS.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                }}
            />
            <BottomTabsIOS.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                }}
            />
            <BottomTabsIOS.Screen
                name="Top_Tab"
                component={TopTabNavigator}
                options={{
                    title: 'Top_Tab',
                }}
            />
        </BottomTabsIOS.Navigator>
    );
};

const BottomTabsAndroid = createBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabsAndroid.Navigator
            screenOptions={({ route }) => ({
                tabBarBackground: () => (
                    <BlurView
                        tint="light"
                        intensity={100}
                        style={StyleSheet.absoluteFill}
                    />
                ),
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'list-sharp' : 'list-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
            <BottomTabsAndroid.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                }}
            />
            <BottomTabsAndroid.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                }}
            />
            <BottomTabsAndroid.Screen
                name="TopTabNavigator"
                component={TopTabNavigator}
                options={{
                    title: 'TopTabNavigator',
                }}
            />
        </BottomTabsAndroid.Navigator>
    );
};
