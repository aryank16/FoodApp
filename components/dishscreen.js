import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import * as Icon from "react-native-feather";
import CartIcon from './cartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from '../slice/cartSlice';

export default function DishScreen({item}) {
 const dispatch = useDispatch();
 const totalItems=useSelector(state=>selectCartItemsById(state,item.id))
 
  const handleIncrease = () =>{
    dispatch(addToCart({...item}))
  }
  const handleDecrease = () =>{
    dispatch(removeFromCart({id : item.id}))
    
  }
  return (
    <View>
    <View className='flex-row m-2 border-round' style={{backgroundColor:'#f5f5dc',borderRadius:20}}>
        <Image source={item.image} className='rounded-3xl' style={{height:120, width:130}}/>
        <View className='m-4 '>
        <Text className='font-bold'>{item.name}</Text>
        <Text className='text-gray-40'>{item.description}</Text>
        <Text className='font-bold mt-6'>${item.price}</Text>
        
        </View>
        <View className='flex-row' style={{paddingTop:80 ,paddingLeft:5,}} >
        <TouchableOpacity onPress={handleIncrease}>
        <Icon.Plus width='22' height='22' stroke='white' className='bg-orange-500 rounded-full  '/>
        </TouchableOpacity>
        <Text className='px-3'>{totalItems.length}</Text>
        
        <TouchableOpacity 
        disabled={!totalItems.length}
        onPress={handleDecrease}>
        <Icon.Minus width='22' height='22' stroke='white' className='bg-orange-500 rounded-full  '/>
        </TouchableOpacity>
        </View>
        </View>

       
        

      
      
    </View>
  )
}