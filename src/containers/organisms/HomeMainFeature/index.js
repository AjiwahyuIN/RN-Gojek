import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MainFeature from '../../../components/molecules/MainFeature'

export default class HomeMainFeature extends Component {
    render() {
        return (
            <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:18,flexWrap:'wrap'}}>
              <MainFeature title='GO-RIDE' img={require('../../../assets/icons/go-ride.png')}/>
              <MainFeature title='GO-CAR' img={require('../../../assets/icons/go-car.png')}/>
              <MainFeature title='GO-BLUEBIRD' img={require('../../../assets/icons/go-bluebird.png')}/>
              <MainFeature title='GO-SEND' img={require('../../../assets/icons/go-send.png')}/>
              <MainFeature title='GO-DEALS' img={require('../../../assets/icons/go-deals.png')}/>
              <MainFeature title='GO-PULSA' img={require('../../../assets/icons/go-pulsa.png')}/>
              <MainFeature title='GO-FOOD' img={require('../../../assets/icons/go-food.png')}/>
              <MainFeature title='MORE' img={require('../../../assets/icons/go-more.png')}/>
          </View>
        )
    }
}
