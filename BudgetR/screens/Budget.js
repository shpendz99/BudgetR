import React from 'react'
import { StyleSheet, Text, View, ScrollView , SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AccountBalance from '../components/TopHeader/AccountBalance';
import BudgetButton from '../components/BudgetComponent/BudgetButton';

const Budget = () => {
    return (
        <View style = {{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <AccountBalance/>
                        
                    
            </SafeAreaView>
            <ScrollView>
                <View style = {styles.line}></View>
                
            </ScrollView>
            <View style={styles.actionButton}>
                <BudgetButton/>
            </View>
        </View>
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
      actionButton: {
        // flex: 1,
        marginBottom:90,
        paddingBottom: 100,
        alignItems: 'center',
        justifyContent: 'center'
        },
      line:{
        height: 1,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginHorizontal: 20,
        
        
    },
})
