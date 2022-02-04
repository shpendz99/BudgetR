import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView  } from 'react-native'
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
import {FontAwesome5} from '@expo/vector-icons'



const Stack = createNativeStackNavigator()
const Tab  = createBottomTabNavigator()


//This is what the user will see when they are signed out¬¬¬
export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='WelcomeScreen'
            screenOptions = {{
                headerShown: false,
            }}
                
        >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        

        </Stack.Navigator>
    </NavigationContainer>
   
)


//This is what the user will see when they are signed in¬¬¬
export const SignedInStack = () =>(
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName='Feed'
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle:{
                    // backgroundColor: '#white',
                    position: 'absolute',
                    bottom: 40,
                    marginHorizontal: 20,
                    // Max Height...
                    height: 60,
                    borderRadius: 10,
                    elevation: 5,
                    // Shadow...
                    shadowColor: '#000',
                    shadowOpacity: 0.25,
                    shadowRadius: 2,
                    shadowOffset: {width: 0, height: 3}
                }

            }}
        >
            <Tab.Screen name = "Feed" component = {Feed} options= {{
                tabBarIcon: ({focused}) =>(
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20
                      }}>
                        <FontAwesome5
                          name="wallet"
                          size={20}
                          color={focused ? '#5D9EFF' : 'gray'}
                        ></FontAwesome5>
                      </View>
                    )
            }}/>
            <Tab.Screen name = "Budget" component = {Budget} options= {{
                tabBarIcon: ({focused}) =>(
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20
                      }}>
                        <FontAwesome5
                          name="money-bill-wave"
                          size={20}
                          color={focused ? '#5D9EFF' : 'gray'}
                        ></FontAwesome5>
                      </View>
                    )
            }}/>

            <Tab.Screen name = "Account" component = {Account} options= {{
                tabBarIcon: ({focused}) =>(
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20
                      }}>
                        <FontAwesome5
                          name="comment"
                          size={20}
                          color={focused ? '#5D9EFF' : 'gray'}
                        ></FontAwesome5>
                      </View>
                    )
            }}/>
            <Tab.Screen name = "Settings" component = {Settings} options= {{
                tabBarIcon: ({focused}) =>(
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20
                      }}>
                        <FontAwesome5
                          name="cog"
                          size={20}
                          color={focused ? '#5D9EFF' : 'gray'}
                        ></FontAwesome5>
                      </View>
                    )
            }}/>

        </Tab.Navigator>
       
    </NavigationContainer>
)

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#000'

    }
})



