import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {   ScrollView, Text,  TextInput,  View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import Categories from '../components/categories';
import Featured from '../components/featured';
import { featured } from '../constant';

function HomeScreen() {
  return (
   <SafeAreaView className="bg-white">
    <StatusBar barStyle="dark-content"/>
    <View className='flex-row item-center space-x-2 px-3 py-7 pb-6'>
      <View className='flex-row flex-1 items-center p-3 py-5 px-4  rounded-full border border-gray-30'>
      <Icon.Search width='24' height='24' stroke='gray'/>
      <TextInput placeholder='Restaurant' className='ml-2' />
      <View className='flex-row space-x-1 items-center border-0 border-l-2 pl-4 border-l-gray-300 ml-12'>
        <Icon.MapPin  width='20' height='20' stroke='gray' />
        <Text className='text-gray-400'>Gurugram</Text>
      </View>

      </View>
      <View className='py-5 px-5 bg-orange-500 rounded-full'>
        <Icon.Sliders width='25' height='25' stroke='white' />
      </View>

    </View>
    
    

    <ScrollView contentContainerStyle={{paddingBottom:10}} showsVerticalScrollIndicator={false}>
    <Categories/>
    </ScrollView>
     
    <ScrollView contentContainerStyle={{paddingBottom:10}} showsVerticalScrollIndicator={false}>
   
   { [featured].map((item,index)=>{
      return (
        
        
          <Featured 
          key={index}
          title={item.title}
          restaurants={item.restaurants}
          description={item.description}/>
       
      )
    })}
    </ScrollView>
      
   
    
       
    </SafeAreaView>
    
  )
}

export default HomeScreen