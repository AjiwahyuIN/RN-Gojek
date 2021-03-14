import React from 'react'
import { View, Text, Image} from 'react-native'

const MainFeature = (props) => {
    return (
        <View style={{alignItems:'center',width:'25%',marginBottom:18}}>
            <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={props.img}/>
            </View>
            <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>{props.title}</Text>
        </View>
    )
}

export default MainFeature
