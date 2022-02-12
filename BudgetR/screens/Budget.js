import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView , SafeAreaView } from 'react-native';
import AccountBalance from '../components/TopHeader/AccountBalance';
import BudgetButton from '../components/BudgetComponent/BudgetButton';
import CircularProgress from 'react-native-circular-progress-indicator';
import { getBudget } from '../controller/BudgetData';



const Budget = () => {
    const [value, setValue] = useState(0);
    const [budget, setBudget] = useState(null);
    

    useEffect(()=>{
        getBudget(BudgetData)
        
    },[]);

    function BudgetData(budget){
        setBudget(budget)
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
                    <Text style= {{marginBottom: 40, fontSize: 28, fontWeight: '600'}}>£{budget}</Text>
                    <CircularProgress 
                        radius={110}
                        value = {70}
                        textColor = {'black'}
                        valueSuffix = {'%'}
                        inActiveStrokeColor={'#A3ACFA'}
                        inActiveStrokeOpacity={0.2}
                        inActiveStrokeWidth ={6}
                        duration = {3000}
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
