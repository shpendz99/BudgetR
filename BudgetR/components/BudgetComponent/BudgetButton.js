import { StyleSheet, Text, View, Modal, TouchableOpacity, Alert } from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import IonIcon from 'react-native-vector-icons/Ionicons';

const BudgetButton = () => {
  
    const [budget, setBudget] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const onSetBudget = () =>{
      try{
          if(budget == ""){
            Alert.alert("Error", "Please enter your Budget!")
          }else{
            //if statement
            // -- check if user has set budget

            console.warn("You have set Budget of: ", budget)
            setModalVisible(!modalVisible)
            // db
            //   .collection('users')
            //   .doc(auth.currentUser.email)
            //   .collection('Balance')
            //   .add({
            //     income: income,
            //     typeOfIncome: typeOfIncome
            //   })  
            //   setModalVisible(!modalVisible)
          }
      }catch(error){

          Alert.alert("Error!")
      }
    }

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
                    <View style= {styles.buttons}>
                      <CustomButton 
                      text= "Add Budget" 
                      onPress={onSetBudget}
                      type= "BUDGET"
                      
                      />
                      <TouchableOpacity style = {styles.closeButton} onPress={() => {
                        setModalVisible(!modalVisible);}}>
                      <IonIcon
                                  name="close-circle-outline"
                                  size={28}
                                  color={ 'white'}
                                  style = {{marginHorizontal: 13,marginVertical: 13 }}
                                  />
                    </TouchableOpacity>
                  </View>
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
      buttons: {
        // backgroundColor: 'black',
        flexDirection: 'row',
        marginVertical: 20
      },
      closeButton:{
        backgroundColor: '#7E7E7E',
        marginVertical: 10,
        marginHorizontal:10,
        borderRadius: 10,
        shadowColor: 'gray',
        width: 50,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
        
      }
      

      
    
});
