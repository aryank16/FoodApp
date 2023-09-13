import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/RestaurantScreen';
import HomeScreen from './screens/HomeScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import OrderScreen from './screens/OrderScreen';
import TrackScreen from './screens/TrackScreen';



const Stack = createNativeStackNavigator();

function Navigation() {

    


  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
    
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Order" component={OrderScreen} />
       <Stack.Screen name="Track" component={TrackScreen} />
       
      

       
       <Stack.Screen name="Delivery"  component={DeliveryScreen} />
       
       </Stack.Navigator>
       

    
    </NavigationContainer>

    
  )
}

export default Navigation