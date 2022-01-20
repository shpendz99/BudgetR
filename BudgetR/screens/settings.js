import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Settings = () => {
    return (
        <LinearGradient style={styles.background} colors={['#42275A', '#25455C', '#2B2D71']}>
            <ScrollView>
                <SafeAreaView>
                    <Text>Settings Page</Text>
                </SafeAreaView>
            </ScrollView>
            
        </LinearGradient>
    )
}

export default Settings

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
