import React,{Component,useState} from "react";
import { SafeAreaView,Text,View,Image,TouchableOpacity,ImageBackground,FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackRouter } from "@react-navigation/native";
import {Welcome,Register,Login,Messenger} from '../screens'
import UITab from "./UITab";
const Stack = createNativeStackNavigator()
function App(props){
   return <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={'Welcome'} component={Welcome}/>
            <Stack.Screen name={'Register'} component={Register}/>
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Messenger'} component={Messenger}/>
           <Stack.Screen name={'UITab'} component={UITab}/>
          
        </Stack.Navigator>
    </NavigationContainer>
}
export default App