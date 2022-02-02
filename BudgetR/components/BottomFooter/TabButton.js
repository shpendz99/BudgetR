import React, {useEffect, useRef, useState} from 'react'
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity  } from 'react-native'
import { auth,db } from '../../firebase';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import IonIcon from 'react-native-vector-icons/Ionicons';



const TabButton = () => {
    const [income, setIncome] = useState('');
    const [typeOfIncome, setTypeOfIncome] = useState('');
    const [expense, setExpense] = useState('');
    const [typeOfExpense, setTypeOfExpense] = useState('');


    const [modalVisible, setModalVisible] = useState(false);
    const [expenseModalVisible, setExpenseModalVisible] = useState(false);

   

    const onAddIncome = () =>{
      try{
          if(income =="" || typeOfIncome == ""){
            Alert.alert("Error", "Please enter Income and the Type of Income..")
          }else{
            db
              .collection('users')
              .doc(auth.currentUser.email)
              .collection('transaction')
              .add({
                income: income,
                typeOfIncome: typeOfIncome
              })  
              setModalVisible(!modalVisible)
            
          }
          
      }catch(error){

          Alert.alert("Error!")
      }
  }


  const onAddExpense = () =>{
    try{
      if(expense == "" || typeOfExpense == ""){
        Alert.alert("Error", "Please enter values above!")
      }else{
        db
          .collection('users')
          .doc(auth.currentUser.email)
          .collection('transaction')
          .add({
            expense: expense,
            typeOfExpense: typeOfExpense
          })  
          setExpenseModalVisible(!expenseModalVisible)
      }
    }catch(error){

        Alert.alert("Error!")
    }
  }



    return (
     
      // <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
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
                  defaultValue = {income} 
                  setValue={setIncome}
                  keyboardType = 'default'
                  // keyboardType = 'decimal-pad'
                  autoFocus = {true}
                />
                <CustomInput
                  placeholder="E.g. Rent, Utility Bills. "
                  value = {typeOfIncome} 
                  setValue={setTypeOfIncome}
                  keyboardType = 'default'
                  autoFocus = {true}
                />
                <View style={styles.buttons}> 
                  <CustomButton 
                    text= "Add Income" 
                    onPress={() => {
                      onAddIncome();
                    }}
                    type= "INCOME"
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

          {/* Modal for adding Expense
          //
          //
          */}
          <Modal
              animationType="slide"
              transparent={true}
              visible={expenseModalVisible}
              onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setExpenseModalVisible(!expenseModalVisible);
              }}
          >
            
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                
                <CustomInput
                  placeholder="E.g. 500"
                  defaultValue = {expense} 
                  setValue={setExpense}
                  keyboardType = 'default'
                  // keyboardType = 'decimal-pad'
                  autoFocus = {true}
                />
                <CustomInput
                  placeholder="E.g. Rent, Utility Bills. "
                  value = {typeOfExpense} 
                  setValue={setTypeOfExpense}
                  keyboardType = 'default'
                  autoFocus = {true}
                />
                <View style={styles.buttons}> 
                  <CustomButton 
                    text= "Add Expense" 
                    onPress={() => {
                      onAddExpense();
                    }}
                    type= "EXPENSE"
                  />
                  <TouchableOpacity style = {styles.closeButton} onPress={() => {
                      setExpenseModalVisible(!expenseModalVisible);}}>
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
            text= "Add Income" 
            onPress={()=> setModalVisible(true)}
            type= "INCOME"
          />

          <CustomButton 
            text= "Add Expense" 
            onPress={()=> setExpenseModalVisible(true)}
            type= "EXPENSE"
            
          />


        </View>
      // </TouchableWithoutFeedback>
      
      
    )
}

export default TabButton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    // backgroundColor: 'black'
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
    // height: 400,
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
 
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
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
  

    
})

