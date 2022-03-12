import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView , SafeAreaView, Alert } from 'react-native';
import AccountBalance from '../components/TopHeader/AccountBalance';
import BudgetButton from '../components/BudgetComponent/BudgetButton';
import CircularProgress from 'react-native-circular-progress-indicator';
import { getBudget } from '../controller/BudgetData';
import { getFeedData } from '../controller/BudgetData';



const Budget = () => {
    const [value, setValue] = useState(0);
    const [budget, setBudget] = useState(0);
    const [expensesFeed, setExpensesFeed] = useState([]);
    const [percentage, setPercentage] = useState(0);
    const [budgetLeft, setBudgetLeft] = useState(0);
    

    useEffect(()=>{
        getBudget(BudgetData)
        getFeedData(FeedDataRetrieved)
        
    },[]);

    function BudgetData(budget){
        setBudget(budget)
    }

    //Collects all expenses reported!
    //Computes the Remaining Budget (Text & Percentage)!
    function FeedDataRetrieved(expensesFeed){
        try{
            setExpensesFeed(expensesFeed)
            // Calculates the sum of all expenses (all expenses in the array)
            const sum = ((expensesFeed.reduce((result, number) => result+number))*-1).toFixed(2)
            
            //Calculates Remaining Budget (+percentage)
            const budgetLeft = (budget) - parseFloat(sum)
            const percentage = ((Math.round(( (budgetLeft) / budget ) * 100)))

            setBudgetLeft(budgetLeft)
            setPercentage(percentage) 
            console.log("List of Expenses Reported: ",expensesFeed)
            console.log("Total of Expenses: ",sum)
            console.log("Signed in User Remaining Budget: ",budgetLeft)
            console.log("Percentage of Remaining Budget Left: ",percentage)

        }catch{
            Alert.alert("Error", "Unable to fetch data!")
        }
    }

    
  

    return (
        <View style = {{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <AccountBalance/>
                        
                    
            </SafeAreaView>


            <ScrollView>
                <View style = {styles.budgetcontainer}>
                    <View style = {styles.line}></View>
                    <Text style= {{marginTop: 50, marginBottom: 20, fontSize: 24}}>Your Budget this Month:</Text>
                    <Text style= {{marginBottom: 40, fontSize: 28, fontWeight: '600', paddingHorizontal: 10}}>£{budgetLeft}/{budget}</Text>
                    
                    <CircularProgress 
                        radius={110}
                        value = {percentage}
                        // value = {50}
                        textColor = {'black'}
                        valueSuffix = {'%'}
                        inActiveStrokeColor={'#A3ACFA'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth ={6}
                        duration = {2500}
                        onAnimationComplete ={()=> setValue(50)}
                    />
                </View>
            </ScrollView>
            
            <View style={styles.actionButton}>
                <BudgetButton/>
            </View>
        </View>
    )
}

export default Budget

const styles = StyleSheet.create({
    
    //may not need to center items!
    budgetcontainer: {
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
      actionButton: {
        // flex: 1,
        marginBottom:90,
        paddingBottom: 100,
        alignItems: 'center',
        justifyContent: 'center'
        },
      line:{
        height: 1,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginHorizontal: 20,
        
        
    },
})
