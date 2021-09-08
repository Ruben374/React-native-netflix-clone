import React, { useState, useEffect } from 'react'
import Tmdb from '../Tmdb'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from 'react-native'


export default (props) => {
return(
<View style={styles.containerPreview}>




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

)

}


const styles = StyleSheet.create({
  
containerPreview:{
  width:'100%',
},
previewText:{
color:'white'
},
flet:{
 width:'100%',
    height:100
},
  previatitle:{
    color:'white',
    marginLeft:20,
    marginTop:40
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



});