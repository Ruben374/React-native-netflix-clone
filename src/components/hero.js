import React from 'react';

import {ImageBackground,  StyleSheet,Image, View, Text, FlatList,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Preview from './preview'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Hero = (props) => {
  return (
      <>
    <ImageBackground source={{uri: `https://image.tmdb.org/t/p/original${props.item.backdrop_path}`}} style={styles.hero}>
  
 <Text style={styles.logo}>{props.item.original_name}</Text>
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
     />   
   
    </ImageBackground>
    
    <View style={styles.menuHeader}>
 <TouchableOpacity style={styles.menuButton} >
            <Icon name='plus' color='#fff' size={20}></Icon>
            <Text style={styles.buttonText} >Minha lista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtonMain}>
           <Icon name='play' color='#000' size={20}></Icon>
            <Text>PLAY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Icon name='information-outline' color='#fff' size={20}></Icon>
            <Text style={styles.buttonText}>Mais info</Text>
          </TouchableOpacity>
</View>
<View style={styles.containerPreview}>
<Text style={styles.previatitle}>Preview</Text>
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
       <Text style={styles.tes}>{props.item.original_name}</Text>
      <LinearGradient
        style={styles.grad}
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
     /> 
 
  </View>
</TouchableOpacity>
          )}    
/>

</View>
</>

  );
};

export default Hero;

const styles = StyleSheet.create({
  hero: {height: 400, width: '100%'},
  logo: {
    marginTop: 200,
    alignSelf: 'center',
    height: 150,
    width: 300,
    position: 'absolute',
    zIndex: 10,
    color:'white',
    fontWeight:'bold',
    fontSize:40
  },
 
  gradient: {
    width: '100%',
    height: 150,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
   menuHeader:{
width:'100%',
height:38,
flexDirection:'row',
justifyContent:'space-evenly'
  },
  buttonText:{
      color:'white',
  },
  menuButton:{
justifyContent:'center',
alignItems:'center'
  },
  menuButtonMain:{
display:'flex',
flexDirection:'row',
backgroundColor: 'white',
paddingLeft:40,
paddingRight:40,
paddingBottom:10,
paddingTop:10,
 borderRadius:5,
 fontSize:20,
 fontWeight:'bold'
  },
   
containerPreview:{
  width:'100%',
  marginTop:50,
},
flet:{
 width:'100%',
    height:100,
    marginTop:10
},
  previatitle:{
    color:'white',
    marginLeft:20,
    
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
  tes:{
 
    position:'absolute',
    zIndex:10,
    bottom:0,
    textAlign:'center',   
     fontSize:16,
    fontWeight:'bold',
    color:'#fff'
    
  },
  grad:{
    width:'100%',
    height:60,
    position:'absolute',
    zIndex:9,
    bottom:0,
  }
 
});
