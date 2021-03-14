import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import NavbarIcon from '../../../components/molecules/NavbarIcon'

export default class NavBar extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#fff',height:54,flexDirection:'row'}}>
                <NavbarIcon title='Home' img={require('../../../assets/icons/home.png')} active={true}/>
                <NavbarIcon title='Order' img={require('../../../assets/icons/order.png')}/>
                <NavbarIcon title='Help' img={require('../../../assets/icons/help.png')}/>
                <NavbarIcon title='Inbox' img={require('../../../assets/icons/inbox.png')}/>
                <NavbarIcon title='Account' img={require('../../../assets/icons/account.png')}/>
            </View>
        )
    }
}
