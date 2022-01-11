import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {enableScreens} from "react-native-screens";

enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          options={{headerShown: false}}
          component={WelcomeScreen}
        />
      
        <Stack.Screen 
          name="Login"
          options={{headerShown: false}}
          
          component={Login}/>
        <Stack.Screen 
          name="Signup" 
          options={{headerShown: false}}
          component={Signup}/>
      </Stack.Navigator>

    </NavigationContainer>

      // <Login/>  

    
    
  );
};
 

