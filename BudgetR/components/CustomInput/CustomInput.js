import React from 'react'
import { StyleSheet, View , TextInput} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, autoCapitalize, keyboardType, defaultValue}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value= {value}
            onChangeText = {setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            keyboardType = {keyboardType}
            defaultValue={defaultValue}
            /> 
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '75%',
        borderColor:'#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
            
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginVertical: 10,
    },
    input:{
        fontSize:16,
    },

})
export default CustomInput