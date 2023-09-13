import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../constant';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slice/restaurantSlice';
import { emptyCart, removeFromCart, selectCartItems, selectCartTotal } from '../slice/cartSlice';

export default function DeliveryScreen() {
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems,setGroupedItems]=useState({});
    const dispatch = useDispatch();
    const deliveryFee=2;

    useEffect(()=>{
      const items = cartItems.reduce((group,item)=>{
        if(group[item.id]){
          group[item.id].push(item);
        }else{
          group[item.id]=[item];
        }
        return group;
      },{})
      setGroupedItems(items);

    },[cartItems])

    const minusOrder = ({item,id}) =>{
     
      
    }
  
  return (
    <View className='mt-10 ' >
        <View className='flex-row ml-2'>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon.ArrowLeft stroke='white' height='40' width='40' className='ml-1 mt-3 bg-orange-500 rounded-full'/>
            </TouchableOpacity>
            
  <View style={{marginHorizontal:95}}>     
  <Text className='font-bold text-2xl'>Your Cart</Text>
  <Text className='pl-4'>{restaurant.name}</Text>
  </View> 
  </View>
  <View className='flex-row bg-orange-200 mt-4'> 
  <Image   className='w-24 h-24' source={require('../assets/images/bikeGuy.png')}/>
  <Text className='p-10 text-l' >Deliver in 20-30 minutes</Text>
  <TouchableOpacity> 
  <Text className='text-orange-600 font-bold pt-10'>Change</Text>
  </TouchableOpacity>
  </View>
  <View >
   
    {
    Object.entries(groupedItems).map(([key,items])=>{
      let item=items[0]
        return(
            <View key={key} className='flex-row bg-white shadow-md-300 mt-4  mx-2 rounded-3xl' style={{height:94}}>
                 <Text className='font-bold text-orange-300 text-xl p-7'>{items.length}X</Text>
                <Image className='rounded-full h-20 w-20 mt-3'  source={item.image} />
                <Text className='font-bold  text-xl p-7'>{item.name}</Text>
                <Text className='font-bold text-orange-300 text-xl p-7'>${item.price}</Text>
                <TouchableOpacity>
                <Icon.Minus 
                onPress={()=> dispatch(removeFromCart({id:item.id}))}
                height={20} width={20} stroke='white' className='bg-orange-400 rounded-full mt-9 -ml-3'/>
                </TouchableOpacity>
            </View>
        )
    })}

  </View>
  <View className='bg-orange-200 h-70 pt-4' style={{marginTop:80, height:220}}>
    <View className='flex-row  m-2 justify-between'>
        <Text className=' font-bold p-23'>SubTotal</Text>
        <Text className='font-bold '>${cartTotal}</Text>
    </View>
    <View className='flex-row m-2 justify-between'>
        <Text className='font-bold'>Delivery Fee</Text>
        <Text className='font-bold '>${deliveryFee}</Text>
    </View>
    <View className='flex-row m-2 justify-between'>
        <Text className='font-bold text-xl'>Order Total</Text>
        <Text className='font-bold text-xl '>${deliveryFee+cartTotal}</Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Order')}>
    <View className='bg-orange-500 justify-center items-center ' style={{height:50, width:300,marginHorizontal:50,borderRadius:20}}>
    <Text className='font-bold text-white text-xl  '>Place Order</Text>
  </View>
    </TouchableOpacity>
    
  </View>
  
  </View>
    
     
  
  )
}