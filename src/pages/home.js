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
import Header from '../components/header'
import Featured from '../components/featured'
import Hero from '../components/hero'
import Preview from '../components/preview'
import MovieRow from '../components/movieRow'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({navigation}) => {
  const [movieList, setmovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)
 
 
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomelist()
      setmovieList(list)
      ///////
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setfeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      <Header />

      {featuredData && <Hero item={featuredData} />}

   
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} it={item} navigation={navigation}/>
        ))}
   
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
