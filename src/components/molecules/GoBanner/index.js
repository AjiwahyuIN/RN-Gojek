import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const GoBanner = () => {
    return (
        <View style={{paddingHorizontal:16}}>
          <View>
            <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{height:170,width:'100%',borderRadius:6}}/>
            <View style={{backgroundColor:'black',opacity:0.3,width:'100%',height:'100%',position:'absolute',left:0,top:0,borderRadius:6}}></View>
            <View style={{height:15,width:60,position:'absolute',top:16,left:16}}>
             <Image source={require('../../../assets/logo/white.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
            </View>
          </View>
          <View style={{flexDirection:'row',position:'absolute',left:16,bottom:16,paddingLeft:16}}>
            <View>
              <Text style={{fontSize:18,fontWeight:'bold',color:'white',marginBottom:6}}>Free GO-FOOD voucher</Text>
              <Text style={{fontSize:14,color:'white'}}>Quick,before they run out</Text>
            </View>
            <View style={{flex:1,paddingRight:12,textAlign:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{backgroundColor:'#61a756',paddingHorizontal:12,paddingVertical:11,alignSelf:'flex-end',borderRadius:4}}>
                <Text style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center'}}>GET STARTED</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    )
}

export default GoBanner
