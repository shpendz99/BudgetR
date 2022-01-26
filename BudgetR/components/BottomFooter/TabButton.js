import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Animated, Text } from 'react-native'
import {AntDesign, Entypo} from "@expo/vector-icons"
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';



const TabButton = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

   
    // const handleButtonPress = () =>{
      
    //   Animated.spring(animatedScale,{
    //     toValue: 0.8,
    //     bounciness: 20, 
    //     speed: 10, 
    //     useNativeDriver: true,
    //   }).start();
    // };

   

    return (
        <View style= {[styles.container, styles.shadowProp]}>
        
            <TouchableWithoutFeedback>
              <Animated.View style={[styles.button, styles.secondary]}>
                <Entypo name = "thumbs-up" size={20} color = '#5D9EFF'/>
              </Animated.View>

            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <Animated.View style={[styles.button, styles.secondary]}>
                <Entypo name = "location-pin" size={20} color = '#5D9EFF'/>
              </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => (offset.value = Math.random())}>
              <Animated.View style={[styles.button, styles.menu, animatedStyles]}>
                <AntDesign name = "plus" size={24} color = '#fff'/>
              </Animated.View>

            </TouchableWithoutFeedback>
            
        </View>
    )
}

export default TabButton

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: -15,
    position: 'absolute'

 
      
  },
  shadowProp:{
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.75,
      shadowRadius: 5,
  },

  button:{
    position: 'absolute',
    width: 58,
    height: 58, 
    borderRadius: 58 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: "#5D9EFF",
    shadowOpacity: 0.30,
    shadowOffset: {height: 10}
  },
  menu: {
    backgroundColor: '#5D9EFF'
  },
  secondary: {
    width: 48, 
    height:48, 
    borderRadius: 48/2,
    backgroundColor: '#fff'

  }
    
})
