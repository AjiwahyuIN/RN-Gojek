import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, GoNewsDetail} from '../../containers/pages';


const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' headerMode='none'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GoNewsDetail" component={GoNewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;