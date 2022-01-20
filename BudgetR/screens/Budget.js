import React from 'react'
import { StyleSheet, Text, View, ScrollView , SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Budget = () => {
    return (
        <LinearGradient style={styles.background} colors={['#42275A', '#25455C', '#2B2D71']}>
            <ScrollView>
                <View style={styles.container}>
                    
                        
                    
                </View>
            </ScrollView>
            
        </LinearGradient>
    )
}

export default Budget

const styles = StyleSheet.create({
    
    //may not need to center items!
    // container: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
})
