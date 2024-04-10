import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Explore from './screens/Explore';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Businesses from './screens/Businesses';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Group from './screens/Group';
import Chat from './screens/Chat';
import { EyeIcon,BriefcaseIcon,ChatBubbleBottomCenterIcon,HashtagIcon} from 'react-native-heroicons/outline';
import Refine from './screens/Refine';

const AppNavigator = () => {
  const bottomTab=createBottomTabNavigator();
  const  Stack=createStackNavigator();
  return (
<NavigationContainer >
 
    <bottomTab.Navigator>
        <bottomTab.Screen name="Explore" component={Explore} options={{headerShown:false ,tabBarIcon: ({ color }) => (
            <EyeIcon color={color} size={26} />
          ),}}/>
        <bottomTab.Screen name="Businesses" component={Businesses}  options={{tabBarIcon: ({ color }) => (
            <BriefcaseIcon color={color} size={26} />
          ),}}/>
        <bottomTab.Screen name="Chat" component={Chat}  options={{tabBarIcon: ({ color }) => (
            <ChatBubbleBottomCenterIcon color={color} size={26} />
          ),}} />
        <bottomTab.Screen name="Group" component={Group} options={{tabBarIcon: ({ color }) => (
            <HashtagIcon color={color} size={26} />
          ),}} />
      </bottomTab.Navigator>
</NavigationContainer> 

  )
}

export default AppNavigator;