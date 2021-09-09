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
import Tmdb from '../Tmdb'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({ navigation }) => {
  const path = navigation.getParam('path')
  const name = navigation.getParam('name')
  const description = navigation.getParam('description')
  const item = navigation.getParam('item')
  const [featuredData, setfeaturedData] = useState(null)
  const [cast, setcast] = useState(null)

  useEffect(() => {
    const loadAll = async item => {
      if (item.title) {
        let chosenInfo = await Tmdb.getMovieInfo(item.id, 'movie')
        setfeaturedData(chosenInfo)
        let c = await Tmdb.getCastInfo(item.id, 'movie')
        setcast(c)
      }
      if (item.name) {
        let chosenInfo = await Tmdb.getMovieInfo(item.id, 'tv')
        setfeaturedData(chosenInfo)
        let c = await Tmdb.getCastInfo(item.id, 'tv')
        setcast(c)
      }
    }
    loadAll(item)
  }, [])
  //////////////////////////////////////////////////////
  let genres = []
  let elenco = []

  for (let i in featuredData && featuredData.genres) {
    genres.push(featuredData && featuredData.genres[i].name)
  }

let num=5
if(cast && cast.credits.cast.length <5){
  num=cast && cast.credits.cast.length
}
  for (let i = 0; i <num ; i++) {
    elenco.push(cast && cast.credits.cast[i].name)
  }
  elenco[elenco.length - 1] += '...'
 
  /////////////////////////////////////////////////////////

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        style={styles.hero}
        source={{ uri: `https://image.tmdb.org/t/p/original${path}` }}
      />
      {featuredData && (
        <View style={styles.containerPadding}>
          <Text style={styles.titulo}>{name}</Text>
          <TouchableOpacity style={styles.btn}>
            <Icon name='play' color='#000' size={20}></Icon>
            <Text> PLAY</Text>
          </TouchableOpacity>
          <Text style={styles.titulo}>{description}</Text>

          <View style={styles.Cast}>
            <Text style={styles.titulo}>
              {' '}
              <Text style={styles.caption}>Generos: </Text> {genres.join(', ')}{' '}
            </Text>
          </View>
          <View style={(styles.Cast, { marginTop: 0 })}>
            <Text style={styles.titulo}>
              <Text style={styles.caption}>Elenco: </Text>
              {elenco.join(', ')}{' '}
            </Text>
          </View>

          <View style={styles.menu}>
            <TouchableOpacity style={styles.btns}>
              <Icon name='plus' color='#fff' size={20}></Icon>
              <Text style={styles.whitetext}>Minha Lista</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btns}>
              <Icon name='thumb-up' color='#fff' size={20}></Icon>
              <Text style={styles.whitetext}> Classifique</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btns}>
              <Icon name='send' color='#fff' size={20}></Icon>
              <Text style={styles.whitetext}> Compartilhe</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btns}>
              <Icon name='download' color='#fff' size={20}></Icon>
              <Text style={styles.whitetext}>Baixar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    height: 200
  },
  btn: {
    alignSelf: 'center',
    color: '#000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginVertical: 20
  },

  titulo: {
    color: '#fff'
  },
  Cast: {
    marginVertical: 20
  },
  caption: {
    color: '#fff',
    opacity: 0.5
  },

  containerPadding: {
    padding: 20
  },
  menu: {
    width: '100%',
    height: 38,
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    
  },
  btns: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color:'#fff'

  },
  whitetext:{
    color:'#fff'
  }
})
