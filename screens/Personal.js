import { View, Text } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Person from '../component/Person';
import {AdjustmentsHorizontalIcon} from  'react-native-heroicons/outline';
const Personal = () => {
  return (
    <View className="px-3">
     <View className=" mt-4 h-12 w-full bg-white rounded-full border-2"><View className=" mt-2 ml-2"><MagnifyingGlassIcon size='30' strokeWidth={2}/></View>
     </View>
     <AdjustmentsHorizontalIcon stroke={2} size='30'  color={'black'}/> 
     <Person/>
     <Person/>
     <Person/>
     
     
    
    </View>
  )
}

export default Personal;