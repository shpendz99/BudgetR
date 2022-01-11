import { StyleSheet, Text, Pressable } from 'react-native'


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
        padding: 20,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius:10,
    },
    container_PRIMARY :{
        //light green
        //backgroundColor: '#A8D5BAFF'
        //Pinkish
        // backgroundColor: '#D7A9E3FF'
        //light blue
        backgroundColor: '#8bbEE8FF',
        //darkish blue 
        // backgroundColor: '#3b71f3',
        marginVertical: 10,
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
    },
    container_TERTIARY:{

    },
    text:{
        fontWeight: 'bold',
        fontSize: 16, 
        color: 'white'
    },
    text_TERTIARY:{
        color: 'gray'
    },
    container_SECONDARY:{
        backgroundColor: '#3c4f76',
        marginVertical: 10,
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
        
    },
    text_SECONDARY:{
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Light'
    }


})


export default CustomButton


