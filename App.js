import React, {Component} from 'react'
import { ScrollView, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Router from './src/config/routers';

import GoBanner from './src/components/molecules/GoBanner'
import GoInfo from './src/components/molecules/GoInfo'
import GoNews from './src/components/molecules/GoNews'
import SearchFeature from './src/components/molecules/SeachFeature'
import HomeGopay from './src/containers/organisms/HomeGopay'
import HomeMainFeature from './src/containers/organisms/HomeMainFeature'
import NavBar from './src/containers/organisms/NavBar'
import ScrollableProduct from './src/containers/organisms/ScrollableProducts'

const App = () => {
  return (
    <Router/>
  )
}

export default App

