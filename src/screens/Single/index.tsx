/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS, FONTS, SIZES } from '../../../constants/theme';

interface PropsSingle{
    route: any;
    navigation: any;
}

export const BoxSingle = ({route, navigation}: PropsSingle) => {

    const {
        title,
        link,
        image,
        published,
        author,
        description,
    } = route.params;

    const OpenURLButton = ({ url }: any) => {
        const handlePress = useCallback(async () => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(url);

          if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
        }, [url]);

        return <TouchableOpacity
                    onPress={handlePress}
                    activeOpacity={0.8}
                    style={{
                        flexDirection: 'row',
                        marginTop: 20,
                    }}
                >
                    <Text style={{
                        ...FONTS.h3,
                        fontFamily: 'Ubuntu-Regular',
                        color: COLORS.gray,
                        marginRight: 20,
                    }}>Ir para o site</Text>
                    <Icon name="share-alt" size={23} color={COLORS.gray} />
                </TouchableOpacity>;
      };

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                    style={styles.back}
                >
                    <Icon name="arrow-left" size={30} color={COLORS.black} />
                </TouchableOpacity>
                {image !== null &&
                    <View style={styles.imageContent}>
                        <Image
                            source={{uri: image}}
                            style={styles.image}
                        />
                        <Text>Divulgada: Publicação</Text>
                    </View>
                }
                <View style={styles.separator}>
                    <View style={styles.line} />
                    <Text style={{
                        ...FONTS.h3,
                        color: COLORS.gray,
                        fontFamily: 'Ubuntu-Regular',
                    }}>Noticia</Text>
                    <View style={styles.line} />
                </View>
                <Text style={[styles.title, {
                    marginTop: 20,
                }]}>{title}</Text>
                <OpenURLButton url={link} />

                <Text style={styles.description}>{description}</Text>
                <Text style={[styles.author, {
                    ...FONTS.h3,
                    fontFamily: 'Ubuntu-Regular',
                    color: COLORS.gray,
                }]}>Autor: {author ? author : 'Anônimo'}</Text>
                <Text style={[styles.date, {
                    marginTop: 10,
                    ...FONTS.h3,
                    fontFamily: 'Ubuntu-Regular',
                    color: COLORS.gray,
                    marginBottom: 50,
                }]}>{published}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    back: {
        padding: 10,
    },
    title: {
        ...FONTS.body1,
        fontSize: 24,
        color: COLORS.black,
    },
    content: {
        paddingVertical: SIZES.padding,
        paddingHorizontal: 10,
    },
    imageContent: {},
    image: {
        width: '100%',
        height: 250,
        marginVertical: 20,
    },
    description: {
        fontSize: 21,
        fontFamily: 'Ubuntu-Regular',
        color: COLORS.gray,
        marginTop: 30,
        marginBottom: 10,
    },
    author: {
        ...FONTS.h3,
        fontFamily: 'Ubuntu-Regular',
    },
    date: {},
    separator: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    line: {
        width: '40%',
        backgroundColor: COLORS.gray,
        height: 1,
    },
});
