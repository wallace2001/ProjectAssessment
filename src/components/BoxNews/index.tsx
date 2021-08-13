/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants/theme';

interface PropsNews extends TouchableOpacityProps{
    title: string;
    published: string;
    image: string | null;
    previewDescription: string;
}

export const BoxNews = ({ title, published, previewDescription, image, ...rest }: PropsNews) => {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={{
                ...FONTS.h3,
                color: COLORS.black,
                marginBottom: 10,
            }}>Carros</Text>
            <Text style={styles.title}>{title}</Text>
            {image === null ? (
                <View />
            ) : (
                <Image
                    style={styles.image}
                    source={{uri: image}}
                    resizeMode="cover"
                />
            )}
            <Text>{published}</Text>
            <Text style={{
                ...FONTS.h3,
                color: COLORS.gray,
                marginTop: 20,
            }} ellipsizeMode="tail" numberOfLines={3}>{previewDescription}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.padding,
        paddingHorizontal: 10,
        alignItems: 'flex-start',
        backgroundColor: COLORS.white,
        marginVertical: 10,
        borderBottomWidth: 3,
        borderBottomColor: COLORS.transparent_black,
    },
    title: {
        ...FONTS.body1,
        fontFamily: 'Ubuntu-Medium',
        fontSize: 24,
        color: COLORS.black,
    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: SIZES.padding,
    },
});
