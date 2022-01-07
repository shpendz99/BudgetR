import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image, Button, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const UselessTextInput = () => {

}

const Login = () => {
    const [email, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    return (

      
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(119,81,253,0.4)', 'transparent']}
                style={styles.background}
            />
            
            <View style = {styles.img_container}>                    
                <Image style = {styles.img}
                    source={require('../images/logo.png')}
                />
            </View>

            <View style = {styles.login_container}>
                <TextInput
                    style={styles.login}
                    onChangeText={onChangeText}
                    placeholder="Enter Email"
                    value={email}
                  />
                <TextInput
                    style={styles.login}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Enter Password"
                    
                  />
            </View>

        </SafeAreaView>


    )
}

export default Login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: '#4892FF',
    },
    background: {
        position: 'absolute',
        left:0,
        right: 0,
        top: 0, 
        height: 500,
    },
    img_container:{ 
        alignItems: 'center',
        padding: 25,
        //backgroundColor: 'black',
        
    },
    img:{
        height: 250,
        width: 250,
        resizeMode: 'contain',
    },
    login_container: {
        alignItems:'center',
        // backgroundColor: '#fff',
        padding: 20, 
        margin: 10

    },
    login:{
        height: 60,
        width: 245,
        margin: 20,
        padding: 5,
        borderWidth:1, 
        borderRadius: 5,
        
    },
    button:{
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    }
})

