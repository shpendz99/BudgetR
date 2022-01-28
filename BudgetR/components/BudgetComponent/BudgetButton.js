import { StyleSheet, Text, View, Modal } from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';

const BudgetButton = () => {
  
    const [budget, setBudget] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style= {[styles.container, styles.shadowProp]}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    
                    <CustomInput 
                    placeholder="E.g. 500"
                    value = {budget} 
                    onChangeText = {text =>setBudget(text)}
                    setValue={setBudget}
                    autoCapitalize = 'none'
                    keyboardType = "budget"
                    textContentType = 'budget'
                    autoFocus = {true}
                    />
                    <CustomButton 
                    text= "Add Budget" 
                    onPress={() => setModalVisible(!modalVisible)}
                    type= "BUDGET"
                    
                    />
                </View>
            </View>
        </Modal>

        <CustomButton 
          text= "Add Budget" 
          onPress={()=> setModalVisible(true)}
          type= "BUDGET"
          
        />
    


        </View>
  );
};

export default BudgetButton;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
      },
      shadowProp:{
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.75,
          shadowRadius: 5,
      },
      centeredView: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: "center",
        marginTop: 22,
      },
    modalView: {
        backgroundColor: "white",
        borderTopEndRadius: 60,
        borderTopLeftRadius: 60,
        padding: 35,
        width: '100%',
        alignItems: "center",
        justifyContent: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      
      buttonClose: {
        backgroundColor: "#2196F3",
        marginTop: 10,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      
    
});
