import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({items}) {
  const navigation = useNavigation();
  return (
    
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('Restaurant', {...items})}> 
        <View className='mr-5 pb-3  rounded-3xl shadow-lg' style={{backgroundColor:'white'}}>
        <Image source={items.image} className='w-64 h-36 rounded-t-3xl'/>
        <Text className='font-bold text-lg'>{items.name}</Text>
        <View className='flex-row space-x-1 pl-1 items-center'>
        <Image source={require('../assets/images/fullStar.png')} className='w-4 h-4 '/>
        <Text>{items.stars}</Text>
        <Text>({items.reviews} reviews) .</Text>
        <Text>{items.category}</Text>
        </View>
        <View className='pl-1 flex-row space-x-1'>
        <Icon.MapPin width='15' height='15' stroke='gray'/>
        <Text>Nearby . 434 second street</Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
        
      
   
  )
}