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



    const onRegisterPressed = (navigation) =>{
        try{
            auth.createUserWithEmailAndPassword(email, password)

            db.collection('users')
                .doc(email)
                .set({
                    username: username,
                    email: email,
                    password: password,
                    account : 0
            })

        
        }catch(error){

            Alert.alert("Error! User already exists.")
        }
    }




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
                        type = "SECONDARY"
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


