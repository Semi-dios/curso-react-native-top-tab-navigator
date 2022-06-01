import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../themes/StyleThemes';
export const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting!</Text>
            <TouchableOpacity style={styles.buttonTabs}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};
