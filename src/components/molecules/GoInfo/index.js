import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const GoInfo = () => {
    return (
        <View style={{paddingHorizontal:16,}}>
          <View style={{height:15,width:60,marginLeft:-4,marginBottom:16}}>
            <Image source={require('../../../assets/logo/gojek.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
          </View>
          <Text style={{fontSize:17,fontWeight:'bold',color:'#1c1c1c'}}>Complete your profile</Text>
          <View style={{flexDirection:'row',marginTop:20,marginBottom:16}}>
            <View>
              <Image source={require('../../../assets/dummy/facebook-connect.png')}/>
            </View>
            <View style={{marginLeft:16}}>
              <Text style={{fontSize:15,fontWeight:'bold',color:'#4a4a4a'}}>Connect with Facebook</Text>
              <Text style={{fontSize:15,fontWeight:'normal',color:'#4a4a4a',width:'70%'}}>Login faster without verification code</Text>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor:'#61a756',paddingHorizontal:12,paddingVertical:11,alignSelf:'flex-end',borderRadius:4}}>
            <Text style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center'}}>GET STARTED</Text>
          </TouchableOpacity>
          <View style={{borderWidth:1,borderColor:'#e8e9ed',marginTop:20,marginBottom:20}}></View>
        </View>
    )
}

export default GoInfo
