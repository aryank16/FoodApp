import React, { useEffect } from 'react'
import {  Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from '@react-navigation/native';
import DishScreen from '../components/dishscreen';
import CartIcon from '../components/cartIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slice/restaurantSlice';

function RestaurantScreen() {
  const navigation=useNavigation();
  const {params} = useRoute();
  let items = params;
const dispatch = useDispatch();
  useEffect(()=>{
    if (items && items.id){
      dispatch(setRestaurant({...items}))
    }
  },[])
  
  return (
    
      
       <View>
        <CartIcon/>
        <ScrollView>
          <View className='relative'>
        <Image source={require('../assets/images/pizza.png')} style={{height:340, width:400}} />
        <TouchableOpacity onPress={()=>navigation.goBack()} className="absolute rounded-full bg-gray  p-2">
        <Icon.ArrowLeft stroke='white' width='30' height={30} style={{marginVertical:80,marginHorizontal:15}}/>
        </TouchableOpacity>
        </View>
        <View style={{borderTopRightRadius:40, borderTopLeftRadius:40}} className='bg-white -mt-12 pt-7 '>
          <View className='m-7 -mt-5 '>
          <Text className='font-bold text-lg'>{items.name}</Text>
          <View className='flex-row space-x-1 -ml-2 items-center'>
        <Image source={require('../assets/images/fullStar.png')} className='w-4 h-4 '/>
        <Text>{items.stars}</Text>
        <Text>({items.reviews} reviews) .</Text>
        <Text>{items.category}</Text>
        <Icon.MapPin width='15' height='15' stroke='gray'/>
        <Text className='text-xs'>Nearby . 434 second street</Text>
        </View>
        <Text className='text-xs mt-1'>{items.description} </Text> 
       
          </View>
          

       </View>
       <View className='bg-white '>
       <Text className='font-bold text-2xl px-7'>Menu</Text>

       {items.dishes.map((elem,index)=>{
        return(
          <View key={index}>
            <DishScreen
            item={elem}/>
          </View>
        )
       })}
       </View>
       </ScrollView>
       </View>
      
       
   )
}

export default RestaurantScreen