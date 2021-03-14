import React from 'react'
import { View, Text, Image } from 'react-native'

const NavbarIcon = (props) => {
    return (
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <Image source={props.img} style={{width:26,height:26}}/>
            <Text style={{fontSize:10,color: '#545454',color: props.active ? 'green' : '#545454',marginTop:4}}>{props.title}</Text>
        </View>
    )
}

export default NavbarIcon
