import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({navigation}) => {

 const path= navigation.getParam('path')
  const name= navigation.getParam('name')
 const description=navigation.getParam('description')
 

  return (
    <ScrollView style={styles.scrollView}>
     
     <ImageBackground style={styles.hero} source={{uri:`https://image.tmdb.org/t/p/original${path}`}}/>
      <View style={styles.containerPadding}>
      
          <Text style={styles.titulo}>{name}</Text>
            <TouchableOpacity style={styles.btn}>
              <Icon name='play' color='#000' size={20}></Icon>
            <Text> PLAY</Text>
          </TouchableOpacity>
          <Text style={styles.titulo}>
            {description}
          </Text>
        </View>

   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
    flex: 1
  },
  hero: {
  width: '100%',
  height: 200,
  },
  btn:{
    alignSelf: 'center',
    color: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
backgroundColor:'#fff',
width:'100%',
height:40,
borderRadius:5,
marginVertical:20,
  },

  titulo:{
color:'#fff'
  },

  containerPadding: {
    padding:20,
  },
  flet: {}
})
