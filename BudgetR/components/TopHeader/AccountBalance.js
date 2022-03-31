import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth, db } from '../../firebase'


const AccountBalance = () => {
    
    //stores Balance using the useState hook 
    const [balance, setBalance] = useState(0);

    const getBalance = async() =>{
        try {
            const Username =  await auth.currentUser.email
            console.log('Authenticated Email: ', Username)

            //Automatically collects the user's account balance from the firestore db
            db.collection('users').doc(auth.currentUser.email).onSnapshot(doc =>{
                setBalance(doc.data().account_balance)
            })

        } catch {
        //do whatever
        }
        
    }

    //useEffect hook to call the "getBalance function"
    useEffect(() => {
        getBalance();
    });


    return (
        <View style= {[styles.container, styles.shadowProp]}>
            <View style = {styles.viewBalance}>
                <Text style = {styles.text}>Balance:</Text>
 
            </View>
            <View>
                <Text style = {styles.balance}> £{balance}</Text>
                <Text></Text>
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
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3,
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
