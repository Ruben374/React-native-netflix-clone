import React from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import Logo from '../assets/logo-compact.png'


export default function header(){

return(
<View style={styles.header}>
<SafeAreaView style={styles.safe}>
<Image source={require('../assets/logo-compact.png')}/> 
<TouchableOpacity >
    <Text style={styles.textwhite}>
    Tv shows
</Text>
</TouchableOpacity>
<TouchableOpacity >
    <Text style={styles.textwhite}>
    Movies
</Text>
</TouchableOpacity>
<TouchableOpacity >
    <Text style={styles.textwhite}>
    My list
</Text>
</TouchableOpacity>
</SafeAreaView>

</View>
)


}

const styles = StyleSheet.create({
header:{
 color:'#ffffff',
 zIndex:99,
 backgroundColor:'transparent',
position: 'absolute',
top:0

},
textwhite:{
    color:'white'
},
safe:{
flexDirection:'row',
justifyContent:'space-evenly',
marginTop:10,
alignItems:'center',
  width: '100%',
    height: 70,
},

  hero: {
      height: 400, width: '100%'
  }
})