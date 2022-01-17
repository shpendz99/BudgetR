import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false
}

const SignedInStack = () => (
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



export default SignedInStack;

