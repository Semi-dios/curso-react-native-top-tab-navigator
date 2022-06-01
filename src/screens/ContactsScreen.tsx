import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../themes/StyleThemes';
export const ContactsScreen = () => {
    return (
        <View>
            <View style={styles.contentHeader}>
                <Text style={styles.textTitle}>Contacts Screen</Text>
            </View>
            <View style={styles.contentTab}>
                <TouchableOpacity style={styles.buttonTopTapNavigator}>
                    <Text style={styles.buttonTopText}>Button contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
