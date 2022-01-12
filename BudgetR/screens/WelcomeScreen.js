import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = ({navigation}) => {

    const onSignInPressed = () =>{
        navigation.navigate('Login');
        console.warn("Sign in");
    }
    const onRegisterPressed = () => {
        navigation.navigate('Signup');
        console.warn("Heading to Register Page");
    }

    return (
        <LinearGradient style={styles.background} colors={['#42275A', '#25455C', '#2B2D71']}>
            <ScrollView>
             
                <View style={styles.container}>
                    
                    <View style = {styles.img_container}>                    
                        <Image style = {styles.img}
                            source={require('../images/logo.png')}
                        />
                    </View>
                    
                    <CustomButton 
                        text= "Register" 
                        onPress={onRegisterPressed} 
                        type = "SECONDARY"
                        />
                    <CustomButton 
                        text= "Log In" 
                        onPress={onSignInPressed} 
                        
                        />
                    

                </View>
            </ScrollView>
            
        </LinearGradient>
    )
}

export default WelcomeScreen

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
        paddingTop: 40,
        margin: 65,
        marginBottom: 160,
        
    },
    img:{
        height: 180,
        width: 180,
        resizeMode: 'contain',
        
    }


})
