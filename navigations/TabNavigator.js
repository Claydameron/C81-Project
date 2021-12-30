import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../screens/Feed';
import CreateScreen from '../screens/Create';

const Tab = createBottomTabNavigator()
const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator screenOptions={({route})=> ({
            tabBarIcon: ({focused,color,size})=>{
              var iconName
              if(route.name === 'FeedScreen'){
                iconName = focused?"book":"book-outline"
              } else if(route.name==="CreateScreen"){
                iconName = focused?"create":"create-outline"
              }
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions={{activeTintColor:'green', inactiveTintColor:'grey'}}> 
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Create" component={CreateScreen} />
            </Tab.Navigator>
    )
}

export default BottomTabNavigator
