import React, { useState } from 'react'
import { flushSync } from 'react-dom'
import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png'

export default function Login() {
    const [show, setShow] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPasswor] = useState('')

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Image source={logo} style={styles.image}></Image>
            </View>

            <View style={styles.form}>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='#564d4d'
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize='none'
                />

                <View style={styles.password}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        placeholderTextColor='#564d4d'
                        secureTextEntry={show ? true : false}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />

                    <TouchableOpacity style={styles.buttonShow} onPress={() => { setShow(show => !show) }}>
                        <Text style={[styles.buttonText, styles.textShow]}>{show ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

            </View>
            <Text>Olá, mundo</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },

    header: {
        position: 'absolute',
        top: 0
    },

    image: {
        width: 110,
        height: 30,
        marginTop: 30
    },

    form: {
        alignSelf: 'stretch',
        padding: 20,
        justifyContent: 'center'
    },

    input: {
        backgroundColor: '#221f1f',
        height: 45,
        borderRadius: 4,
        paddingLeft: 10,
        margin: 5,
        color: '#564d4d'
    },

    inputPassword: {
        paddingLeft: 10,
        width: 250,
        color: '#564d4d'
    },

    button: {
        borderRadius: 4,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#221f1f'
    },

    buttonShow: {
        justifyContent: 'center'
    },

    textShow: {
        color: '#564d4d'
    },

    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold'
    },

    password: {
        flexDirection: 'row',
        backgroundColor: '#221f1f',
        height: 45,
        borderRadius: 4,
        margin: 5
    }
})