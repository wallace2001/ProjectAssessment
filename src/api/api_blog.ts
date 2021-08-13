/* eslint-disable prettier/prettier */
import * as rssParser from 'react-native-rss-parser';
const RSS_URL = 'https://g1.globo.com/rss/g1/carros';

export const carsRSS = async() => {
    const request = await fetch(RSS_URL)
        .then(response => response.text())
        .then( async (res) => {
            const rss = await rssParser.parse(res);
            return rss.items;
        });

    return request;
};
