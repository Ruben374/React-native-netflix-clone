import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, AsyncStorage } from 'react-native'

import preloadLogo from '../assets/logo.svg'
export default function Preload({ navigation }) {

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('')
            } else {
                navigation.navigate('Login')
            }
        })
    }, [])

    return (
        <View style={styles.view}>
            <Image source={preloadLogo} style={styles.image}></Image>
        </View>
    )
}

const styles = StyleSheet.create({

    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        color: '#111111'
    },

    image: {
        width: 200,
        height: 50
    },
})