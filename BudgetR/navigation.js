import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Feed from './screens/Feed';
import Settings from './screens/Settings';
import Account from './screens/Account';
import Budget from './screens/Budget';

const Stack = createNativeStackNavigator()
const Tab  = createBottomTabNavigator()

const screenOptions = {
    headerShown: false
}

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='WelcomeScreen'
            screenOptions = {screenOptions}    
        >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>

        </Stack.Navigator>
    </NavigationContainer>
   
)

export const SignedInStack = () =>(
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName='Feed'
            screenOptions={screenOptions}    
        >
            <Tab.Screen name = "Feed" component = {Feed}/>
            <Tab.Screen name = "Budget" component = {Budget}/>
            <Tab.Screen name = "Account" component = {Account}/>
            <Tab.Screen name = "Settings" component = {Settings}/>

        </Tab.Navigator>
    </NavigationContainer>
)




