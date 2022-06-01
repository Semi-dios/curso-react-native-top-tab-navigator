import React from 'react';
import { TouchableOpacityBase } from 'react-native';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../themes/StyleThemes';
export const ChatScreen = () => {
    return (
        <View>
            <View style={styles.contentHeader}>
                <Text style={styles.textTitle}>Chat Screen</Text>
            </View>
            <View style={styles.contentTab}>
                <TouchableOpacity style={styles.buttonTopTapNavigator}>
                    <Text style={styles.buttonTopText}>Button chat</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
