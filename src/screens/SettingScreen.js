import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenName}>SettingScreen</Text>
        </View>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenName: {
        fontSize: 24,
        color: '#131313',
        fontWeight: 'bold',
    }
});