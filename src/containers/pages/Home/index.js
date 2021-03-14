import React, {Component} from 'react';
import { ScrollView, View } from 'react-native';
import GoBanner from '../../../components/molecules/GoBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import GoNews from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/SeachFeature';
import HomeGopay from '../../organisms/HomeGopay';
import HomeMainFeature from '../../organisms/HomeMainFeature';
import NavBar from '../../organisms/NavBar';
import ScrollableProduct from '../../organisms/ScrollableProducts';


export default class Home extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex:1}}> 
                <ScrollView>      
                    <View style={{backgroundColor:'white', flex:1}}>
                    <SearchFeature/>
                    <HomeGopay/>
                    <HomeMainFeature/>
                    </View>
                    <View style={{height:16,backgroundColor:'#f2f2f4',marginTop:0}}></View>
                    <GoNews onPress={() => navigation.navigate('GoNewsDetail')}/>
                    <GoInfo/>
                    <GoBanner/>
                    <View style={{borderWidth:1,borderColor:'#e8e9ed',marginTop:20,marginBottom:20,marginHorizontal:16}}></View>
                    <ScrollableProduct/>
                </ScrollView>
                <NavBar/>
            </View> 
        )
    }
}
