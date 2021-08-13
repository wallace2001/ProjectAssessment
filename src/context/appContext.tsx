/* eslint-disable prettier/prettier */

import React, {createContext, ReactNode, useEffect, useState} from 'react';
import { carsRSS } from '../api/api_blog';
import { SplashScreen } from '../screens/SplashScreen';
import { FeedItem } from 'react-native-rss-parser';

interface PropsContext {
    screen: string;
    loading: boolean;
    cars: FeedItem[];
    changeScreen: (screen: string) => void;
}

interface PropsProvider{
    children: ReactNode;
}

export const MobileContext = createContext({} as PropsContext);

export const MobileProvider = ({ children }: PropsProvider) => {

    const [splashLoading, setSplashLoading] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [cars, setCars] = useState<FeedItem[]>([]);
    const [screen, setScreen] = useState<string>('Carros');

    useEffect(() => {
        const request = async() => {
            setLoading(true);
            const listCars = await carsRSS();
            setTimeout(() => {
                setLoading(false);
            }, 3 * 1000);
            setCars(listCars);
        };

        request();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setSplashLoading(false);
        }, 2 * 1000);
    }, []);

    if (splashLoading){
        return (
            <SplashScreen />
        );
    }

    const changeScreen = (screenNow: string) => {
        setScreen(screenNow);
    };

    return (
        <MobileContext.Provider value={{
            cars,
            loading,
            screen,
            changeScreen,
        }}>
            {children}
        </MobileContext.Provider>
    );
};
