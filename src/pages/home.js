import React, { useState, useEffect } from 'react'
import Tmdb from '../Tmdb'
import { View,Text } from 'react-native'

export default () => {
  const [movieList, setmovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomelist()
      setmovieList(list)
      ///////
    }

    loadAll()
  }, [])

  return (
    <>
      {movieList.map((item, key) => (
        <Text>{item.title}</Text>
      ))}
    </>
  )
}
