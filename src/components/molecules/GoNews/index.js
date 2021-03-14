import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const GoNews = ({onPress}) => {
    return (
        <View style={{paddingHorizontal:16,paddingTop:17}}>
          <View>
            <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{height:170,width:'100%',borderRadius:6}}/>
            <View style={{backgroundColor:'black',opacity:0.3,width:'100%',height:'100%',position:'absolute',left:0,top:0,borderRadius:6}}></View>
            <View style={{height:15,width:60,position:'absolute',top:16,left:16}}>
            <Image source={require('../../../assets/logo/white.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
            </View>
          </View>
          <View style={{paddingTop:16,paddingBottom:20,borderBottomWidth:1,borderBottomColor:'#e8e9ed',marginBottom:20}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:'#1c1c1c'}}>GO-NEWS</Text>
            <Text style={{fontSize:14,fontWeight:'normal',color:'#7a7a7a',marginBottom:11}}>Egy bantu timnas U-19 libas Malaysia dengan skor 3-0</Text>
            <TouchableOpacity style={{backgroundColor:'#61a756',paddingHorizontal:12,paddingVertical:11,alignSelf:'flex-end',borderRadius:4}} onPress={onPress}>
              <Text style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center'}}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default GoNews
