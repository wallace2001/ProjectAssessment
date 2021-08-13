/* eslint-disable prettier/prettier */

import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { format } from 'date-fns';
import { COLORS, FONTS, SIZES } from '../../../constants/theme';
import { BoxNews } from '../../components/BoxNews';
import { MobileContext } from '../../context/appContext';
import { ptBR } from 'date-fns/locale';

interface PropsMain{
    navigation: any;
    drawerAnimationStyle: any;
    drawerHeaderAnimationStyle: any;
}

export const Main = ({navigation, drawerAnimationStyle, drawerHeaderAnimationStyle}: PropsMain) => {
    const { cars } = useContext(MobileContext);
    const navigationStack: any = useNavigation();

    return (
        <Animated.View style={[styles.container, {
            ...drawerAnimationStyle,
        }]}>
            <Animated.View style={[styles.header, {
                ...drawerHeaderAnimationStyle,
            }]}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    activeOpacity={0.8}
                >
                    <Icon name="bars" size={30} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={styles.logo}>CarView</Text>
            </Animated.View>
            <ScrollView>
                {cars.slice(0, 10).map((item, index: number) => {
                    const imageCraw = item.description.substr(12, 300).split('< />')[0].split(' ')[0].trim();

                    const images = imageCraw.length > 20 ? imageCraw : null;
                    const image = images !== null ? images?.substr(1, images?.length - 2) : null;

                    const description = item.description.split('/><br />')[1];

                    const previewDescription = description?.substr(0, 180);

                    return (
                        <BoxNews
                            key={index}
                            title={item.title}
                            published={format(new Date(item.published), "'Dia' dd 'de' MMMM', às 'HH:mm 'horas'", {locale: ptBR})}
                            image={image}
                            previewDescription={description !== undefined ? previewDescription : item.description.substr(0, 180)}
                            onPress={() => navigationStack.navigate('SingleNews', {
                                title: item.title,
                                link: item.links[0].url,
                                image,
                                published: format(new Date(item.published), "'Dia' dd 'de' MMMM', às 'HH:mm 'horas'", {locale: ptBR}),
                                description: description !== undefined ? description : item.description,
                                author: item.authors[0]?.name,
                            })}
                            activeOpacity={0.8}
                        />
                    );
                })}
            </ScrollView>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundgray,
    },
    header: {
        height: 60,
        backgroundColor: COLORS.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding,
    },
    logo: {
        ...FONTS.body1,
        color: COLORS.white,
    },
});
