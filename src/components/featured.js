import React, { useState, useEffect } from 'react'
import Tmdb from '../Tmdb'
import { View, Text, StyleSheet,ImageBackground,TouchableOpacity} from 'react-native'
import Logo from '../assets/logo-compact.png'
import Header from './header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default (props) => {



  return (
    <>
   
     <View  style={styles.view}>
     
      <ImageBackground style={styles.hero} source={{uri:`https://image.tmdb.org/t/p/original${props.item.backdrop_path}`}} >
     <View style={styles.container}>
      <Text style={styles.title}>{props.item.original_name}</Text>
      <View>
       <TouchableOpacity>
         <Icon name='plus' color ='#fff' size={20}/>
         <Text>Minha Lista</Text>
       </TouchableOpacity>
          <TouchableOpacity>
         <Icon name='information-outline' color ='#fff' size={20}/>
         <Text>Saiba Mais</Text>
       </TouchableOpacity>
      </View>
     </View>
      </ImageBackground>
       </View>

    </>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor:'#000000',
    flex: 1,

  },
    hero: {
      height: 400,
       width: '100%',
       flex:1
  },
  title:{
      color:'white',
      marginTop:200,
      fontSize:40,
      fontWeight:'bold',
      alignSelf: 'center',
      position:'absolute',


  },
  container: {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
  }
})
