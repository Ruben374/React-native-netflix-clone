import React, { useState, useEffect } from 'react'
import Tmdb from '../Tmdb'
import {
  TouchableOpacity,
  View,
  CustomButton,
  CustomButtonText,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,FlatList,Image
} from 'react-native'
import Logo from '../assets/logo-compact.png'
import Header from './header'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props => {
  return (
    
      <View style={styles.container}>
        <ImageBackground
          style={styles.hero}
          source={{
            uri: `https://image.tmdb.org/t/p/original${props.item.backdrop_path}`
          }}
        ></ImageBackground>
        <Text style={styles.title}>{props.item.original_name}</Text>
        <View style={styles.menuHeader}>
          <TouchableOpacity style={styles.button}>
            <Icon name='plus' color='#fff' size={20}></Icon>
            <Text style={styles.white}>Minha lista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonmeio}>
            <Icon name='play' color='#fff' size={20}></Icon>
            <Text style={styles.whiter}>PLAY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name='information-outline' color='#fff' size={20}></Icon>
            <Text style={styles.white}>Mais info</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.previacontainer}>
        <Text style={styles.previatitle}>Previa</Text>
          <FlatList 
          horizontal
          data={[1,2,3,4]}
          style={styles.flet}
          renderItem={({item,index})=>(
<TouchableOpacity key={index} style={{marginLeft:index==0? 20:0,marginRight:10}}>
  <View style={styles.oval}>
<Image style={styles.capa} source={{
            uri: `https://image.tmdb.org/t/p/original${props.item.backdrop_path}`
          }}/>
    
 
  </View>
</TouchableOpacity>
          )}
          />

         
        </View>
      </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1
  },
  menuHeader: {
    width: '100%',
    position:'absolute',
  top:200, 
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  previaContainer: {
    width: '100%',
    marginTop: 50
  },
  white: { color: 'white' },
  whiter: { backgroundColor: 'white',color:'black',paddingLeft:40,paddingRight:40,paddingBottom:10,paddingTop:10, borderRadius:5,fontSize:20,fontWeight:'bold'},
  previaTitle: { color: '#fff', marginLeft: 20 },

  hero: {
  
    width: '100%',
    flex: 1
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    top: 150,
    alignSelf: 'center',
    position: 'absolute'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonmeio:{

      justifyContent: 'center',
    alignItems: 'center',

    
  },
  flet:{
    width:'100%',
    height:100
  },
  oval:{
backgroundColor:'red',
padding:2.5,
width:90,
height:90,
borderRadius:90,   
  },
  capa:{
width:85,
height:85,
borderRadius:85, 
  },
  previacontainer:{
    width:'100%',

  },
  previatitle:{
    color:'white',
    marginLeft:20
  }
})
