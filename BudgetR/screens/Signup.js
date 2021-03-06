import React, {useState} from 'react'
import { StyleSheet, Text, ScrollView, SafeAreaView, Image, View, Alert } from 'react-native'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {auth, db} from '../firebase';




const Signup = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    //function allows the application to register the user
    const onRegisterPressed = () =>{
        try{
            //Error is display if no details are entered / or if password is 6 characters or less.
            if(name == "" || username == "" || email == "" || password == ""){
                Alert.alert("Error", "Please Provide all of the necessary data in order to Register")
            }else if(password.length <= 6) {
                Alert.alert("Error", "Please make sure the password is more than 6 Characters long!")
            }else{
                auth.createUserWithEmailAndPassword(email, password)


                //Creates a new document within the 'users' collection
                //the document will be the email the user entered
                db.collection('users')
                    .doc(email)
                    .set({
                        name: name,
                        username: username,
                        email: email,
                        password: password,
                        account_balance: 0,
                        budget: 0
                })
            }
        //Error is Displayed if the email entered already exists on the firestore Database. 
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
        
            <ScrollView>
             
                <SafeAreaView style={styles.container}>
                    <View style = {styles.img_container}>                    
                        <Image style = {styles.img}
                            source={require('../images/logo.png')}
                        />
                    </View>
                    <Text style={styles.title}>Create an Account</Text>
                    <CustomInput 
                        placeholder="Name" 
                        value = {name} 
                        setValue={setName}
                        />
                    <CustomInput 
                        placeholder="Username" 
                        value = {username} 
                        setValue={setUsername}
                        />
                    <CustomInput 
                        placeholder="Email" 
                        value = {email} 
                        setValue={setEmail}
                        autoCapitalize={'none'}
                        />
                    <CustomInput 
                        placeholder="Password" 
                        value = {password} 
                        setValue={setPassword}
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


