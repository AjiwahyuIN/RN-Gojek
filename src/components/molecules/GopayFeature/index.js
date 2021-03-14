import React from 'react'
import { View, Text, Image } from 'react-native'

const GopayFeature = (props) => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={props.img}/>
            <Text style={{color:'white',fontWeight:'bold',marginTop:15,fontSize:13}}>{props.title}</Text>
        </View>
    )
}

export default GopayFeature
