import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableWithoutFeedback, Keyboard   } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AccountBalance from '../components/TopHeader/AccountBalance';
import TabButton from '../components/BottomFooter/TabButton';
import ViewFeed from '../components/FeedComponent/ViewFeed';

const Feed = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <LinearGradient style={styles.background} colors={['#42275A', '#25455C', '#2B2D71']}>
                <SafeAreaView >
                        <AccountBalance/>
                    
                    </SafeAreaView>
                <ScrollView>
                    <View style = {styles.line}></View>
                    <ViewFeed/>
                    
                </ScrollView>
                <View style={styles.actionButton}>
                    <TabButton/>
                </View>
                
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

export default Feed

const styles = StyleSheet.create({

    //may not need to center items!
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    actionButton: {
        // flex: 1,
        marginBottom:90,
        paddingBottom: 100,
        alignItems: 'center',
        justifyContent: 'center'
        },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
    line:{
        height: 1,
        backgroundColor: '#fff',
        borderRadius: 100,
        marginHorizontal: 20,
        
        
    },

})
