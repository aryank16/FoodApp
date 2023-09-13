import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constant'
import RestaurantCard from './restaurantCard'

export default function Featured() {
  return (
   <View>
   {[featured].map((item,index)=>{
    return  (
        <View key={index}>
            <View className="flex-row justify-between items-center px-4">
                <View>

            <Text className='font-bold text-lg'>{item.title}</Text>
           <Text className='text-gray-500 text-xs'> {item.description}</Text>
           </View>
           <TouchableOpacity>
           <Text className='text-orange-500'>See All</Text>
           </TouchableOpacity>
           </View>
          
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row p-2 ' style={{backgroundColor:'#F5F5DD'}}>
            {item.restaurants.map((elem,index)=>{
                return(
                    <View  key={index} >
                       
                       <RestaurantCard
                       key={index}
                       items={elem}
                       
                       />
                       
                       
                       
                    </View>
                )
            })}
           </ScrollView>

        </View>
    )
   })}
   </View>
   
  )
}