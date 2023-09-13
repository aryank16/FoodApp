import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slice/cartSlice';

export default function CartIcon() {
    const navigation=useNavigation();
    const cartItems=useSelector(selectCartItems);
    const cartTotal =useSelector(selectCartTotal)
    if(!cartItems.length) return;
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Delivery')} className='absolute bottom-7 z-50 bg-orange-500' style={{width:300,height:60,borderRadius:30,margin:10,marginHorizontal:60}}>
    <View className='flex-row' style={{padding:16,paddingHorizontal:75,justifyContent:'space-between'}} >
        <Text  className='text-white font-bold text-xl  '>{cartItems.length}</Text>

      <Text className='text-white font-bold text-xl -px-40 '>View Cart</Text>
      <Text className='text-white font-bold text-xl  '>${cartTotal}</Text>
    </View>
    </TouchableOpacity>
  )
}