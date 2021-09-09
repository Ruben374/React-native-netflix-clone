import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'

export default function Row(props,{ navigation }) {


  const handleClick=(p,v,c,g)=> {
    console.log(g)
      props.navigation.navigate('Movie',{path:p,name:v,description:c,item:g})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.whiteColor}>{props.title}</Text>

      <FlatList
        horizontal
        style={styles.lista}
        data={props.items.results}
        renderItem={({item,index})=>(
 <TouchableOpacity onPress={()=>{handleClick(item.backdrop_path,item.name || item.title,item.overview,item)}}>
        <ImageBackground
          style={[styles.capa, {marginRight:10,marginLeft:index == 0? 20 : 0}]}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`
          }}
        >
         
         
        </ImageBackground>
      </TouchableOpacity>
        )}
       
      />

     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  title: {
    marginLeft: 20
  },
  capa: {
    width: 120,
    height: 180,
  
  },
 
  lista: {
    width: '100%',     height: 180,
    marginTop: 10,
    marginBottom: 30,
 
  },
  whiteColor:{
    color:'#fff',
     marginLeft: 20
  }
})
