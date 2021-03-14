import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import ScrollableItems from '../../../components/molecules/ScrollableItems'

export default class ScrollableProduct extends Component {
    render() {
        return (
            <View>
              <View style={{width:60,height:15,marginLeft:16}}>
              <Image source={require('../../../assets/logo/go-food.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:16,marginTop:10,marginBottom:12}}>
                <Text style={{fontSize:17,fontWeight:'bold',color:'#1c1c1c'}}>Nearby Restaurant</Text>
                <Text style={{fontSize:17,fontWeight:'bold',color:'#61a756'}}>See All</Text>
              </View>
              <ScrollView horizontal={true} style={{paddingLeft:16}}>
                <ScrollableItems title='Martabak Bangka' img={require('../../../assets/dummy/go-food-banka.jpg')}/>
                <ScrollableItems title='Bakmi GM' img={require('../../../assets/dummy/go-food-gm.jpg')}/>
                <ScrollableItems title='Kfc Malioboro' img={require('../../../assets/dummy/go-food-kfc.jpg')}/>
                <ScrollableItems title='Orins Seturan' img={require('../../../assets/dummy/go-food-orins.jpg')}/>
                <ScrollableItems title='Martabak Pak Boss' img={require('../../../assets/dummy/go-food-pak-boss.jpg')}/>
              </ScrollView>
              <View style={{borderWidth:1,borderColor:'#e8e9ed',marginTop:20,marginBottom:20,marginHorizontal:16}}></View>
            </View>
        )
    }
}
