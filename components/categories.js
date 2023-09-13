import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { categories } from '../constant';

function Categories() {
    const[activeCategory,setActiveCategory]=useState(null)
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    >
    <View className='flex-row items-center'>
        {categories.map((category,index)=>{

            let isActive = category.id==activeCategory;
            let btnClass = isActive? 'bg-gray-700': 'bg-gray-200';
            let textClass = isActive? 'font-semibold text-gray-800':'text-gray-500'

            return(
                <View key={index} className='flex items-center' >
                    <TouchableOpacity onPress={()=>setActiveCategory(category.id)} className={"p-1 rounded-full shadow bg-gray-200" + btnClass}> 
                    
                    <Image source={category.image}/>
                    
                   

                    </TouchableOpacity>
                    <Text className={"text-sm"+textClass}>{category.name}</Text>

                    
                   
                    </View>
                   
            )
        })}
    
    </View>
    </ScrollView>
  )
}

export default Categories;