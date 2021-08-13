/* eslint-disable prettier/prettier */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomDrawer } from '../customDrawer';
import { BoxSingle } from '../screens/Single';

const { Screen, Navigator } = createNativeStackNavigator();

export const AppRouter = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'transparent',
                },
            }}
            initialRouteName="Home"
        >
            <Screen
                name="Home"
                component={CustomDrawer}
            />
            <Screen
                name="SingleNews"
                component={BoxSingle}
            />
        </Navigator>
    );
};
