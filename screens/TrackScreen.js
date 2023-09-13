import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import MapView,{Marker} from 'react-native-maps';
import { featured } from '../constant';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slice/restaurantSlice';
import { useNavigation } from '@react-navigation/native';
import { emptyCart } from '../slice/cartSlice';

export default function TrackScreen() {
    const restaurant = useSelector(selectRestaurant)
    const navigation=useNavigation();
    const dispatch = useDispatch();

    const cancelOrder=()=>{
      dispatch(emptyCart());

      navigation.navigate('Home')
    }
  return (
    <View className='flex-1'>
      <MapView
        initialRegion={{
            latitude:restaurant.lat,
            longitude: restaurant.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.0421,
          }}
          className='flex-1'
          mapType='standard'
      >
        <Marker
      
      coordinate={{
        latitude:restaurant.lat,
        longitude: restaurant.lng,
      }}
      title={restaurant.name}
      description={restaurant.description}
      
    />
      </MapView>
      <View className='relative bg-white rounded-t-3xl ' style={{height:200,borderBottomRightRadius:40,marg:40}}>
        <View style={{margin:20}}>
        <Text className='font-bold'>Estimated Arrival</Text>
        <Text className='font-bold text-4xl'>20-30 Minutes</Text>
        <Text>Your order is on its way</Text>

        </View>
        <TouchableOpacity >
    <View className='bg-orange-500 flex-row '
     style={{height:80, width:350,marginHorizontal:20,borderRadius:40}}>
        <Image source={require('../assets/images/deliveryGuy.png')} className='h-20 w-20 ml-6 rounded-full' style={{}}/>
    <View  style={{marginTop:25}}>
    <Text className='font-bold text-white text-xl ml-6  '> Prahlad</Text>
    <Text className='text-white'>Your delivery partner</Text>
    </View>
   
    <TouchableOpacity className='bg-white rounded-full mt-5 h-11 w-11'>
    <Icon.Phone stroke='green' height='30' style={{margin:9}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={cancelOrder} className='bg-white rounded-full mt-5 ml-4 h-11 w-11'>
    <Icon.X stroke='red' height='30' style={{margin:9}}/>
    </TouchableOpacity>
    
   
  </View>
    </TouchableOpacity>
        


      </View>
    </View>
  )
}