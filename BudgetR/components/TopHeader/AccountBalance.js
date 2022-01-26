import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const AccountBalance = () => {
    return (
        <View style= {[styles.container, styles.shadowProp]}>
            <View style = {styles.viewBalance}>
                <Text style = {styles.text}>Balance:</Text>
 
            </View>
            <View>
                <Text style = {styles.balance}> $3,590</Text>
            </View>
            
        </View>
    )
}

export default AccountBalance

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        height: 90,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: 8,
        marginBottom: 20,
        
    },
    shadowProp:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.75,
        shadowRadius: 5,
    },

    viewBalance: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 5, 
    },  
    text:{
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 15,
        marginTop: 5
    
       
    },
    balance : {
        color: '#94A3D3',
        fontWeight: '300',
        fontSize: 30,
        marginLeft: 4,
        marginTop: 1
    }
    
})
