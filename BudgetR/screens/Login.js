import React, {useState} from 'react'
import { StyleSheet, View, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {auth} from '../firebase';



const Login = ({}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () =>{

        //validates whether the credentials entered are correct
        auth
            .signInWithEmailAndPassword(email,password)
            .then(userCredentials =>{
                const user = userCredentials.user;
                console.log("Logged in", user.email)
            })
            //error displayed if credentials are incorrect
            .catch(error => alert(error.message + '\nIncorrect Credentials'))
    }

    //This code is different to the one above but does the same task !¬¬¬¬¬

    // const onSignInPressed = async () => {
    //     try {
    //       const userCredential = await auth.createUserWithEmailAndPassword(email, password)
    //       const user = userCredential.user
        
        
    //       console.Íﬁlog("Registered with:", user.email);
    //     } catch (e) {
    //       console.log(e)
    //     }
    //   }


    const onForgotPasswordPressed = () => {
        console.warn("Forgot password")
    }
 

    return (
        // <LinearGradient style={styles.background} colors={['#42275A', '#25455C', '#2B2D71']}>
            <ScrollView>
                <KeyboardAvoidingView 
                    style={{flex: 1}} 
                    behavior={Platform.OS === 'ios' ? 'padding' : null}
                >
                
                
                    <View style={styles.container}>
                        
                            <View style = {styles.img_container}>                    
                                <Image style = {styles.img}
                                    source={require('../images/logo.png')}
                                />
                            </View>
                            <CustomInput 
                                placeholder="email"
                                value = {email} 
                                onChangeText = {text =>setEmail(text)}
                                setValue={setEmail}
                                autoCapitalize = 'none'
                                keyboardType = "email-address"
                                textContentType = 'emailAddress'
                                autoFocus = {true}
                                />
                            <CustomInput 
                                placeholder="Password" 
                                value = {password} 
                                onChangeText = {text =>setPassword(text)}
                                setValue={setPassword}
                                secureTextEntry={true}
                                autoCapitalize = 'none'
                                textContentType = 'password'
                                autoFocus = {true}
                                />
                            
                            <CustomButton 
                                text= "Log In" 
                                onPress={onSignInPressed} 
                                
                                />

                            <CustomButton 
                                text= "Forgot Password?" 
                                onPress={onForgotPasswordPressed} 
                                type="TERTIARY"
                                />
                        
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            
        // </LinearGradient>

    )
}

export default Login


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
        marginBottom: 130,
        
    },
    img:{
        height: 180,
        width: 180,
        resizeMode: 'contain',
        
    }
})