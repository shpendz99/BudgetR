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

    const [balance,setBalance] = useState()

    const [modalVisible, setModalVisible] = useState(false);
    const [expenseModalVisible, setExpenseModalVisible] = useState(false);



    // Get user on mount
    useEffect(() => {
      getBalance();
    });
  
    const getBalance = async() =>{
      try {
        const Username = await auth.currentUser.email
        console.log('Authenticated Email: ', Username)
        const documentSnapshot = await db
          .collection('users')
          .doc(Username)
          .get();

        const userData = documentSnapshot.data().account_balance;
            setBalance(userData)
            
      } catch {
        //do whatever
      }
    
    }

 
    //Will add Income transaction to Firestore
    const onAddIncome = async() =>{
      try{
          if(income =="" || typeOfIncome == ""){
            Alert.alert("Error", "Please enter Income and the Type of Income..")
          }else{
            await db
              .collection('users')
              .doc(auth.currentUser.email)
              .collection('transaction')
              .add({
                money: parseInt(income),
                type: 'Income',
                transaction: typeOfIncome
              })  
              
              setModalVisible(!modalVisible)
              addToBalance();
          }
          
      }catch(error){

          Alert.alert("Error!")
      }
  }

  //Updates the user's Balance after they have entered their income
  //Grabs the user's balance
  //Adds the user's balance with the income they have entered
  //Updates the user's balance after
  const addToBalance = async() =>{
    const updatedIncomeBalance = (parseFloat(balance)+parseFloat(income))
    console.log("Updated Balance: ", updatedIncomeBalance)
    await db
            .collection('users')
            .doc(auth.currentUser.email)
            .update({
              account_balance: updatedIncomeBalance
            })
            
  }
  
  //Will add Income transaction to Firestore
  const onAddExpense = async() =>{
    try{
      if(expense == "" || typeOfExpense == ""){
        Alert.alert("Error", "Please enter values above!")
      }else{
        await db
          .collection('users')
          .doc(auth.currentUser.email)
          .collection('transaction')
          .add({ 
            money: -(parseInt(expense)),
            type: 'Expense',
            transaction: typeOfExpense,
            // created: newExpenseDoc.Timestamp.now()
          })  
          
          setExpenseModalVisible(!expenseModalVisible)
          subToBalance();
      }
    }catch(error){

        Alert.alert("Error!")
    }
  }


  //Updates the user's Balance after they have entered their expense
  //Grabs the user's balance
  //Adds the user's balance with the expense they have entered
  //Updates the user's balance after
  const subToBalance = async() =>{
    const updatedExpenseBalance = (parseFloat(balance)-parseFloat(expense))
    console.log("Updated Balance: ", updatedExpenseBalance)
    await db
      .collection('users')
      .doc(auth.currentUser.email)
      .update({
        account_balance: updatedExpenseBalance
    })
    //
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
                  placeholder="E.g. Work, Gift, etc. "
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

