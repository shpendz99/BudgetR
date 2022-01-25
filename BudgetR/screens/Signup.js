import React, {useState} from 'react'
import { StyleSheet, Text, ScrollView, SafeAreaView, Image, View, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {auth, db} from '../firebase';





const Signup = ({}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');


// const onRegisterPressed = async ()=>{
//     try{
//         const authUser =  await auth.createUserWithEmailAndPassword(email, password)

//         db.collection('users').add({
//             username: username,
//             email: email,
//             password: password,
//             account : 0
//         })

        


//     }catch(error){
//         alert("ERROR")
//     }
// }


//1) the program should authenticate the user's email and password
const onRegisterPressed = () =>{
    try{
        auth.createUserWithEmailAndPassword(email, password)

        db.collection('users').add({
            username: username,
            email: email,
            password: password,
            account : 0
        })
        


    }catch(error){
        Alert.alert("Error! User already exists.")
    }
}

    // const onRegisterPressed = () =>{
    //     try{
    //         const credential = auth.createUserWithEmailAndPassword(email, password);
    //         const {uid} = credential;
    //         const user = {
    //             username: username,
    //             email: email,
    //             password: password,
    //             user_id: uid
    //         };

    //          db.collection('users').doc(uid).set(user) 
    //     }catch(error){
    //         console.warn("Error")
    //     }
        
    //     // navigation.navigate('account');
    //     // console.warn("Account Registered")
    // }
            
        // db.collection('users').add({
        //     owner_uid: credential.user.uid,
        //     username: username,
        //     email: credential.user.email,
        //     password: credential.user.password,
        // })  



    // const onRegisterPressed = () =>{
    //     auth
    //         .createUserWithEmailAndPassword(email, password)     
    //         .catch(error =>alert(error.message ))
    //     // navigation.navigate('account');
    //     // console.warn("Account Registered")
    // }


    const onSignInPressed = () => {
        navigation.navigate('Login');
        console.warn("Continue to Sign in")
    }

    const onTermsOfUsePressed = () =>{
        console.warn ("Terms of Use Pressed")
    }
    const onPrivacyPressed = () =>{
        console.warn ("Terms of Use Pressed")
    }


    return (
        <LinearGradient style={styles.background} colors={['#42275A', '#25455C', '#2B2D71']}>
            <ScrollView>
             
                <SafeAreaView style={styles.container}>
                    <View style = {styles.img_container}>                    
                        <Image style = {styles.img}
                            source={require('../images/logo.png')}
                        />
                    </View>
                    <Text style={styles.title}>Create an Account</Text>
                    <CustomInput 
                        placeholder="Username" 
                        value = {username} 
                        setValue={setUsername}
                        />
                    <CustomInput 
                        placeholder="Email" 
                        value = {email} 
                        setValue={setEmail}
                        />
                    <CustomInput 
                        placeholder="Password" 
                        value = {password} 
                        setValue={setPassword}
                        secureTextEntry={true}
                        />
                    <CustomInput 
                    placeholder="Confirm Password" 
                    value = {passwordRepeat} 
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                        />
                    
                    <CustomButton 
                        text= "Register" 
                        onPress={onRegisterPressed} 
                        />

                    <Text style={styles.text}>
                        By Registering, you confirm that you accept our 
                        <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and 
                        <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy </Text>
                    </Text>
                    <CustomButton 
                        text= "Have an Account? Sign In" 
                        onPress={onSignInPressed} 
                        type="TERTIARY"
                        />


                </SafeAreaView>
            </ScrollView>
            
        </LinearGradient>

    )
}

export default Signup


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
    img_container:{ 
        alignItems: 'center',
        paddingTop: 30,
        margin: 65,
        marginVertical: 10,
        
        
    },
    img:{
        height: 180,
        width: 180,
        resizeMode: 'contain',
        
    } ,
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#94A3D3',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
        marginHorizontal: 8,
    },
    link:{
        color: '#FDB075',
    }
   
})


