import { LinearGradient } from 'expo-linear-gradient';


import React from 'react';

import {Image, TouchableOpacity, Text,StyleSheet, SafeAreaView} from 'react-native';



const Header = () => {
  return (
    <LinearGradient
      style={styles.header}
      colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}>
      <SafeAreaView style={styles.headerSafeAreaView}>
        <Image source={require('../assets/logo-compact.png')} />

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.colorWhite}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.colorWhite}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.colorWhite}>Minha Lista</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;



const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
  },
  headerSafeAreaView: {
    flexDirection: 'row',
    marginTop:10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 70,
  },
  colorWhite: {
    color: '#fff',
  },
});