import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../themes/StyleThemes';
export const AlbumScreen = () => {
    return (
        <View>
            <View style={styles.contentHeader}>
                <Text style={styles.textTitle}>
                    <Icon name={'arrow-circle-down'} size={30} color={'#000'} /> Album
                    Screen
                </Text>
            </View>

            <View style={styles.contentTab}>
                <TouchableOpacity style={styles.buttonTopTapNavigator}>
                    <Text style={styles.buttonTopText}>Button album</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
