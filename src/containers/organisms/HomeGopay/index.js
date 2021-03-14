import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import GopayFeature from '../../../components/molecules/GopayFeature'

export default class HomeGopay extends Component {
    render() {
        return (
            <View style={{marginHorizontal:17,marginTop:8}}>
                <View style={{backgroundColor:'blue',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:4,borderTopRightRadius:4,backgroundColor:'#2c5fb8',padding:14}}>
                <Image source={require('../../../assets/icons/gopay.png')}/>
                <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Rp.12.000</Text>
                </View>
                <View style={{flexDirection:'row',backgroundColor:'#2f65bd',paddingTop:14,paddingBottom:20,borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
                <GopayFeature title='Pay' img={require('../../../assets/icons/pay.png')}/>
                <GopayFeature title='Nearby' img={require('../../../assets/icons/nearby.png')}/>
                <GopayFeature title='Top Up' img={require('../../../assets/icons/topup.png')}/>
                <GopayFeature title='More' img={require('../../../assets/icons/more.png')}/>
                </View>
            </View>
        )
    }
}
