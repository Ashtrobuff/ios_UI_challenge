import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import * as Progress from 'react-native-progress'
const Person = () => {
  return (
    <View className="flex flex-row bg-white w-82 h-40 rounded-md mt-4  shadow-xl">
     <Text className='absolute ml-72 mt-2'>+ INVITE</Text>
        
            <Image  className="mr2 mt-4 ml-4 h-24 w-24 rounded-md" source={require('C:\\Users\\ASHIS\\Desktop\\intern\\bcios\\blackoffer\\ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg')}/>
       
       
      <View className=" flex flex-col mt-8 ml-5"><Text className="font-bold text-lg">Michael murphy</Text><Text>San Francisco,within 1Km</Text>
      <Progress.Bar className="mt-4 rounded-full " progress={0.3} height={10} width={150} color='#004169'/>
      <View className="mr-20 mt-4"><Text className="text-size-32">Friendship | Coffee | Hangout</Text></View>
      </View>
    </View>
  )
}

export default Person