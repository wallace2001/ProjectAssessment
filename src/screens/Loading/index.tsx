/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { MobileContext } from '../../context/appContext';

export const Loading = () => {
    const { loading } = useContext(MobileContext);

    return (
        <View style={[styles.container, {
            position: loading ? 'absolute' : 'relative',
            display: loading ? 'flex' : 'none',
        }]}>
            <ActivityIndicator color={COLORS.primary} size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 60,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
