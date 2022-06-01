import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen } from '../screens/AlbumScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    const { top } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{
                padding: top,
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                },

                tabBarStyle: {
                    backgroundColor: 'white',
                },
                tabBarInactiveTintColor: '#5d43f7',
                tabBarActiveTintColor: '#5d43f7',
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === 'Chat') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline';
                    } else if (route.name === 'Contacts') {
                        iconName = focused ? 'list-sharp' : 'list-outline';
                    }

                    return (
                        <Icon
                            name={iconName || 'information-circle'}
                            size={size || 30}
                            color={color}
                        />
                    );
                },
            })}>
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
        </Tab.Navigator>
    );
};
