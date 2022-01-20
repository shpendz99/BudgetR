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



import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions // optional
} from 'react-native-animated-nav-tab-bar'
import TabButton from './components/TabButton/TabButton';


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
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 40,
                    marginHorizontal: 20,
                    // Max Height...
                    height: 60,
                    borderRadius: 10,
                    // Shadow...
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowOffset: {
                      width: 10,
                      height: 10
                      
                    }
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
                          name="book"
                          size={20}
                          color={focused ? 'red' : 'gray'}
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
                          color={focused ? 'red' : 'gray'}
                        ></FontAwesome5>
                      </View>
                    )
            }}/>
            <Tab.Screen name = "empty" component = {TabButton}
            />

            <Tab.Screen name = "Account" component = {Account} options= {{
                tabBarIcon: ({focused}) =>(
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 20
                      }}>
                        <FontAwesome5
                          name="chart-pie"
                          size={20}
                          color={focused ? 'red' : 'gray'}
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
                          color={focused ? 'red' : 'gray'}
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


