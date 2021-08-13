/* eslint-disable prettier/prettier */

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#FF1212',
    secondary: '#A00000',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#777777',
    backgroundgray: '#F6F6F6',

    transparent: 'transparent',
    transparent_black: 'rgba(67, 67, 67, .1)',
    transparentWhite1: 'rgba(255, 255, 255, .8)',

};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 25,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    logo: 36,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    largeTitle: { fontFamily: 'Ubuntu-Bold', fontSize: SIZES.largeTitle },
    h1: { fontFamily: 'Ubuntu-Bold', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Ubuntu-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Ubuntu-Medium', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Ubuntu-Medium', fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: 'Ubuntu-Medium', fontSize: SIZES.h5, lineHeight: 22 },
    logo: { fontFamily: 'Ubuntu-Bold', fontSize: SIZES.logo, lineHeight: 36 },
    body1: { fontFamily: 'Ubuntu-Bold', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Ubuntu-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Ubuntu-Regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Ubuntu-Regular', fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: 'Ubuntu-Regular', fontSize: SIZES.body5, lineHeight: 22 },
};

export const HEADERITEM = [
    {
        id: '1',
        name: 'Carros',
        icon: 'car',
    },
    {
        id: '2',
        name: 'Esportes',
        icon: 'running',
    },
    {
        id: '3',
        name: 'Politica',
        icon: 'landmark',
    },
    {
        id: '4',
        name: 'Brasil',
        icon: 'map-marker',
    },
    {
        id: '5',
        name: 'Mundo',
        icon: 'globe',
    },
];

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
