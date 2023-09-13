import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderScreen() {
    const navigation=useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Track');
        },3000)
    },[]);
  return (
    <View style={{alignItems:'center',marginVertical:230}}>
      <Image source={require('../assets/images/delivery.gif' )} className='h-80 w-80' />
    </View>
  )
}