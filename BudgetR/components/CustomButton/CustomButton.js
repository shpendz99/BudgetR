import { StyleSheet, Text, View, Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[
                styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor : bgColor} : {}
                ]}>
            
            <Text 
                style={[
                    styles.text, 
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor} : {},
                    ]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        

        width: '75%',
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius:5,
    },
    container_PRIMARY :{
        backgroundColor: '#3b71f3',
    },
    container_TERTIARY:{

    },
    text:{
        fontWeight: 'bold',
        color: 'white'
    },
    text_TERTIARY:{
        color: 'gray'
    }

})


export default CustomButton


