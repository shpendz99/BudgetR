import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { auth, db } from '../../firebase'


const AccountBalance = () => {
    
    //1 Use useState to set Account balance
    //2 Read the --Doc--account (field)
    //3 Update the use state
    // const getUser = () =>{
    //     const user = auth.currentUser
    //     const unsubscribe = db
    //         .collection('users')
    //         .where('email', '==', user.email).limit(1).onSnapshot(
    //             snapshot => snapshot.docs.map(doc =>{
    //                 setUser({
    //                     username: doc.data().username
    //                 })
    //             })
    //         )
    //     return unsubscribe
        
    // }

    const [user, setUser] = useState(null);


    const getUser = async() =>{
        
        try {
            const documentSnapshot = await db
              .collection('users')
              .doc('Test@gmail.com')
              .get();
  
            const userData = documentSnapshot.data().account;
                setUser(userData)

          } catch {
            //do whatever
          }
        
    }

    // Get user on mount
    useEffect(() => {
        getUser();
    }, []);



    // const [account, setAccount] = useState('0')
    // db.collection('users').get('account')
    //     .then(snapshot => setAccount(snapshot.data()))
    
    // console.log(account)

                

    return (
        <View style= {[styles.container, styles.shadowProp]}>
            <View style = {styles.viewBalance}>
                <Text style = {styles.text}>Balance:</Text>
 
            </View>
            <View>
                <Text style = {styles.balance}> £{user}</Text>
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
