import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SparklesIcon as SparklesIconOutline, Bars3CenterLeft, Bars3CenterLeftIcon, MagnifyingGlassIcon,MapPinIcon,QueueListIcon } from 'react-native-heroicons/outline';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import Personal from './Personal';
import Services from './Services';
import Businesses from './Businesses';
import Refine from './Refine';
const Explore = () => {
  const Tab = createMaterialTopTabNavigator();
  const bottomTab=createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <View className='bg-slate-800 h-full'style={{backgroundColor:'#004169'}}>
      <View className=" mt-7 flex flex-row bg-slate-800 h-20 w-full" style={{backgroundColor:'#004169'}}>
        <View className="justify-center ml-3 mt-3"><Bars3CenterLeftIcon size='30' strokeWidth={2} color='white' className="mt-9 ml-9"/></View>

    <Text className=" absolute mt-6 text-white font-bold ml-16">Howdy, Person!!</Text>
<View className=" absolute mt-12 ml-5">
    <View className="flex flex-row ml-10">
      <MapPinIcon size='20' strokeWidth={2} color='white' ></MapPinIcon>
      <Text className="text-white ml-2">Location</Text>
</View>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Refine')} className=" ml-72 mt-7">
          <QueueListIcon size={30} strokeWidth={2} color='white'> </QueueListIcon>
          <Text className=" text-white mr-2">Refine</Text>
        </TouchableOpacity>
        </View>
        <NavigationContainer independent="true" className=" h-96 bg-slate-900">
      <Tab.Navigator screenOptions={{tabBarActiveTintColor:'#004169',backgroundColor:'#004196'}} className='bg-slate-900'>
        <Tab.Screen name="Personal" component={Personal} />
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="Businesses" component={Businesses} />
</Tab.Navigator>
    </NavigationContainer>
        </View>   
  )
}

export default Explore;