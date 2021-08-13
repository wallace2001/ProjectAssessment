/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS, FONTS, HEADERITEM, SIZES } from '../../constants/theme';
import { Main } from '../screens/Main';
import { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { MobileContext } from '../context/appContext';

interface PropsItem extends TouchableOpacityProps{
    item: {
        name: string;
        icon: string;
    },
    screen: string;
}

export const CustomItemDrawer = ({ item, screen, ...rest}: PropsItem) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.itemContent, {
                backgroundColor: screen === item.name ? COLORS.transparent_black : COLORS.transparent,
            }]}
            {...rest}>
            <Icon name={item.icon} size={22} color={COLORS.white} />
            <Text style={{
                ...FONTS.h2,
                fontFamily: 'Ubuntu-Regular',
                color: COLORS.white,
                fontSize: 18,
                marginLeft: 10,
            }}>{item.name}</Text>
        </TouchableOpacity>
    );
};

export const CustomDrawerContent = ({navigation}: any) => {

    const { screen, changeScreen } = useContext(MobileContext);

    const handleSelectScreen = (name: string) => {
        changeScreen(name);
        navigation.closeDrawer();
    };

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View style={styles.contentDrawer}>
                <View style={styles.contentDrawerHeader}>
                    <TouchableOpacity
                        onPress={() => navigation.closeDrawer()}
                        activeOpacity={0.8}
                    >
                        <Icon name="times" color={COLORS.white} size={30} />
                    </TouchableOpacity>
                    <Text style={styles.logo}>CarView</Text>
                </View>
                <View style={styles.profile}>
                    <Image style={styles.imageProfile} source={{uri: 'https://avatars.githubusercontent.com/u/70642744?v=4'}} />
                    <Text style={{
                        ...FONTS.h2,
                        color: COLORS.white,
                        marginLeft: 20,
                        fontFamily: 'Ubuntu-Medium',
                    }}>Wallace</Text>
                </View>
                <View style={styles.contentItem}>
                    {HEADERITEM.map(item => {
                        return (
                            <CustomItemDrawer
                                onPress={() => handleSelectScreen(item.name)}
                                screen={screen}
                                key={item.id}
                                item={item}
                            />
                        );
                    })}
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

const Drawer = createDrawerNavigator();

export const CustomDrawer = () => {
    const progress = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            borderRadius: interpolate(
                progress.value,
                [0, 1],
                [1, 26],
                Extrapolate.CLAMP,
            ),

            transform: [{scale: interpolate(
                progress.value,
                [0, 1],
                [1, 0.8],
                Extrapolate.CLAMP,
            )}],
        };
    });

    const animatedStyleContent = useAnimatedStyle(() => {
        return {
            borderTopLeftRadius: interpolate(
                progress.value,
                [0, 1],
                [1, 20],
                Extrapolate.CLAMP,
            ),
        };
    });

    return (
        <View style={styles.container}>
            <Drawer.Navigator
                screenOptions={{
                    drawerType: 'slide',
                    headerShown: false,
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        backgroundColor: 'transparent',
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
                initialRouteName="MainLayout"
                drawerContent={(props: any) => {
                    progress.value = withTiming(props.state.history[1]?.status ? 1 : 0, {duration: 200});
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    );
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <Main
                        navigation={props.navigation}
                        drawerAnimationStyle={animatedStyle}
                        drawerHeaderAnimationStyle={animatedStyleContent}
                    />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    contentDrawer: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding,
    },
    contentDrawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    logo: {
        ...FONTS.body1,
        color: COLORS.white,
        marginLeft: 20,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    imageProfile: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: SIZES.radius,
        borderRadius: 5,
    },
    contentItem: {
        marginTop: 20,
    },
});
