import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AccountBalance from '../components/TopHeader/AccountBalance';


const Account = () => {
    return (
        <LinearGradient style={styles.background} colors={['#42275A', '#25455C', '#2B2D71']}>
            <SafeAreaView style={styles.container}>
                <AccountBalance/>
                        
                    
            </SafeAreaView>
            <ScrollView>
                <View style = {styles.line}></View>
                
            </ScrollView>
            
        </LinearGradient>
    )
}

export default Account

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
    line:{
        height: 1,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginHorizontal: 20,
        
        
    },
})
