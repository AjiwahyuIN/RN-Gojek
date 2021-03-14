import React from 'react'
import { View, TextInput, Image } from 'react-native'

const SearchFeature = () => {
    return (
        <View style={{marginHorizontal:17,flexDirection:'row',paddingTop:15}}>
            <View style={{flex:1,position:'relative'}}>
                <TextInput placeholder='what do you want to eat?' placeholderTextColor='#4a4a4a' style={{borderWidth:1,borderRadius:25,borderColor:'#e8e8e8',paddingLeft:45,paddingRight:20,height:40,fontSize:13}}/>
                <Image source={require('../../../assets/icons/search.png')} style={{position:'absolute',top:8,left:12,width:24}}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginLeft:10}}>
                <Image source={require('../../../assets/icons/promo.png')} />
            </View>     
        </View>
    )
}

export default SearchFeature
