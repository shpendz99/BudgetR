import { StyleSheet, Text, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <TouchableOpacity 
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
                    ]}>{text}
            </Text>
            
        </TouchableOpacity>
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
        backgroundColor: '#8bbEE8FF',
        marginVertical: 10,
        shadowColor: '#000',
        width: 290,
        shadowOffset: {width: 0, height:4},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5
    },
    text:{
        fontWeight: 'bold',
        fontSize: 16, 
        color: 'white'
    },
    container_TERTIARY:{

    },
    
    text_TERTIARY:{
        color: 'gray'
    },
    //Register Button 
    container_SECONDARY:{
        backgroundColor: '#3c4f76',
        marginVertical: 10,
        width: 290,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
        
    },
    text_SECONDARY:{
        color: 'white',
        fontWeight: 'bold',
    },
    container_INCOME:{
        backgroundColor: '#3b71f3',
        marginVertical: 10,
        marginHorizontal:10,
        shadowColor: 'gray',
        width: 145,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
    },
    text_INCOME:{
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
    },
    container_EXPENSE:{
        backgroundColor: '#F58684',
        marginHorizontal:10,
        shadowColor: 'gray',
        width: 145,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2
    },
    text_EXPENSE:{
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
        
        
    },
    container_BUDGET:{
        backgroundColor: '#A3ACFA',
        marginHorizontal:10,
        shadowColor: 'gray',
        width: 145,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2
    },
    text_BUDGET:{
        color: 'white',
        fontWeight: '500',
        fontSize: 14,   
    },
   
})


export default CustomButton




//colors:
        //light green
        //backgroundColor: '#A8D5BAFF'
        //Pinkish
        // backgroundColor: '#D7A9E3FF'
        //darkish blue 
        // backgroundColor: '#3b71f3',