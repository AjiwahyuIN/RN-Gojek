import React from 'react'
import { StyleSheet, Text, View,Image, TextInput } from 'react-native'

const App = () => {
  return (
    <View style={{flex:1}}> 
      <View style={{backgroundColor:'white', flex:1}}>
        {/* search */}
        <View style={{marginHorizontal:17,flexDirection:'row',paddingTop:15}}>
          <View style={{flex:1,position:'relative'}}>
            <TextInput placeholder='what do you want to eat?' style={{borderWidth:1,borderRadius:25,borderColor:'#e8e8e8',paddingLeft:45,paddingRight:20,height:40,fontSize:13}}/>
            <Image source={require('./icon/search.png')} style={{position:'absolute',top:8,left:12,width:24}}/>
          </View>
          <View style={{alignItems:'center',justifyContent:'center',marginLeft:10}}>
            <Image source={require('./icon/promo.png')} />
          </View>
        </View>
        {/* gopay */}
        <View style={{marginHorizontal:17,marginTop:8}}>
          <View style={{backgroundColor:'blue',flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:4,borderTopRightRadius:4,backgroundColor:'#2c5fb8',padding:14}}>
            <Image source={require('./icon/gopay.png')}/>
            <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Rp.12.000</Text>
          </View>
          <View style={{flexDirection:'row',backgroundColor:'#2f65bd',paddingTop:14,paddingBottom:20,borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./icon/pay.png')}/>
              <Text style={{color:'white',fontWeight:'bold',marginTop:15,fontSize:13}}>Pay</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./icon/nearby.png')}/>
              <Text style={{color:'white',fontWeight:'bold',marginTop:15,fontSize:13}}>Nearby</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./icon/topup.png')}/>
              <Text style={{color:'white',fontWeight:'bold',marginTop:15,fontSize:13}}>Top Up</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image source={require('./icon/more.png')}/>
              <Text style={{color:'white',fontWeight:'bold',marginTop:15,fontSize:13}}>More</Text>
            </View>
          </View>
        </View>
        {/* main menu */}
        <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:18}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',marginBottom:18}}>
            <View style={{alignItems:'center',width:'25%'}}>
              <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./icon/go-ride.png')}/>
              </View>
              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>GO-RIDE</Text>
            </View>
            <View style={{alignItems:'center',width:'25%'}}>
              <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./icon/go-car.png')}/>
              </View>
              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>GO-CAR</Text>
            </View>
            <View style={{alignItems:'center',width:'25%'}}>
              <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./icon/go-bluebird.png')}/>
              </View>
              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>GO-BLUEBIRD</Text>
            </View>
            <View style={{alignItems:'center',width:'25%'}}>
              <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./icon/go-send.png')}/>
              </View>
              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>GO-SEND</Text>
            </View>
          </View>
          <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
            <View style={{alignItems:'center',width:'25%'}}>
              <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./icon/go-deals.png')}/>
              </View>
              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>GO-DEALS</Text>
            </View>
            <View style={{alignItems:'center',width:'25%'}}>
              <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./icon/go-pulsa.png')}/>
              </View>
              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>GO-PULSA</Text>
            </View>
            <View style={{alignItems:'center',width:'25%'}}>
              <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./icon/go-food.png')}/>
              </View>
              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>GO-FOOD</Text>
            </View>
            <View style={{alignItems:'center',width:'25%'}}>
              <View style={{borderColor:'#efefef',borderWidth:1,borderRadius:18,width:58,height:58,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./icon/go-more.png')}/>
              </View>
              <Text style={{fontSize:11,fontWeight:'bold',textAlign:'center',marginTop:6}}>MORE</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor:'#fff',height:54,flexDirection:'row'}}>
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Image source={require('./icon/home.png')} style={{width:26,height:26}}/>
          <Text style={{fontSize:10,color:'#545454',marginTop:4}}>Home</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Image source={require('./icon/order.png')} style={{width:26,height:26}}/>
          <Text style={{fontSize:10,color:'#545454',marginTop:4}}>Orders</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Image source={require('./icon/help.png')} style={{width:26,height:26}}/>
          <Text style={{fontSize:10,color:'#545454',marginTop:4}}>Help</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Image source={require('./icon/inbox.png')} style={{width:26,height:26}}/>
          <Text style={{fontSize:10,color:'#545454',marginTop:4}}>Inbox</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Image source={require('./icon/account.png')} style={{width:26,height:26}}/>
          <Text style={{fontSize:10,color:'#545454',marginTop:4}}>Account</Text>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
