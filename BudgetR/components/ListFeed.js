import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const ListItem = props => {

    return (
    <View style={styles.container}> 
        <View style={styles.content}>
        
            <View style={styles.leftSideContainer}>
                <Text style= {styles.textType}>{props.item.type}</Text>
                <Text style= {styles.hello}>{props.item.transaction} {props.item.typeofExpense}</Text>
            </View>
            <View style= {styles.rightSideContainer} >
                <Text style= {styles.textMoney}>£{props.item.money}</Text>
            </View>
            
        </View>
    </View>
    )

     
    
};



const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    content : {
        backgroundColor: "white",
        width: "90%",
        padding: 12,
        marginTop: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },
    leftSideContainer:{
        width: '50%',
    },
    rightSideContainer:{
        marginLeft: 120,
        // backgroundColor: 'black'
        justifyContent: 'flex-end'
    },
    

    textView : {
        justifyContent : 'center'
    },
    textType: {
        fontSize: 20,
        color: "black", 
        fontWeight: '500'
    },
    hello: {
        fontSize: 14,
        color: "gray"
    },
    textMoney: {
        fontSize: 14,
        color: "black"
    }
    
});

export default ListItem; 