/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTS } from '../../../constants/theme';

export const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>CarView</Text>
            <ActivityIndicator color={COLORS.white} size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    logo: {
        ...FONTS.logo,
        color: COLORS.white,
        fontSize: 40,
    },
});
