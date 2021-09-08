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

 
 
 

  return (
    <ScrollView style={styles.scrollView}>
     
      <View>
          <Text>Titulo do filme e ou serie</Text>
            <TouchableOpacity style={styles.buttonmeio}>
              <Icon name='play' color='#000' size={20}></Icon>
            <Text style={styles.white}>PLAY</Text>
          </TouchableOpacity>
        </View>

   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
    flex: 1
  },
  text: {
    fontSize: 42,
    color: 'white'
  },

  containerPreview: {},
  flet: {}
})
