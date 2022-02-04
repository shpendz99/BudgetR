import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native'
import AccountBalance from '../components/TopHeader/AccountBalance';

const Account = () => {
    return (
        <View>
            
            <ScrollView>
                <View style = {styles.line}></View>
                
            </ScrollView>
            
            
        </View>
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
