import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from '../themes/StyleThemes';
export const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>

            <TouchableOpacity style={styles.buttonTabs}>
                <Text>Go to Setting</Text>
            </TouchableOpacity>
        </View>
    );
};
