import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Modal, Pressable   } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import AccountBalance from '../components/TopHeader/AccountBalance';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';





const Settings = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <LinearGradient style={styles.background} colors={['#42275A', '#25455C', '#2B2D71']}>
            <SafeAreaView>
                    <AccountBalance/>
            </SafeAreaView>
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
                        <Text style={styles.modalText}>Currency</Text>

                        <TouchableOpacity style={styles.currencyButton}>
                            <Text style={styles.buttonText}>GBP</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.currencyButton}>
                            <Text style={styles.buttonText}>EUR</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.currencyButton}>
                            <Text style={styles.buttonText}>USD</Text> 
                        </TouchableOpacity>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                        <Text style={styles.textStyle}>Save Currency</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <ScrollView>
            
                <View style = {styles.line}></View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={()=> setModalVisible(true)}
                        style={styles.settingsButton}>
                        <IonIcon
                            name="cash-outline"
                            size={20}
                            color={ 'black'}
                            style = {{paddingHorizontal: 5}}
                            />
                        <Text style={styles.buttonText}>Currency</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> console.warn("Second button")}
                        style={styles.settingsButton}>
                            <IonIcon
                            name="person-outline"
                            size={20}
                            color={ 'black'}
                            style = {{paddingHorizontal: 5}}
                            />
                        <Text style={styles.buttonText}>Details</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> console.warn("Second button")}
                        style={styles.settingsButton}>
                            <IonIcon
                            name="chatbox-ellipses-outline"
                            size={20}
                            color={ 'black'}
                            style = {{paddingHorizontal: 5}}
                            />
                        <Text style={styles.buttonText}>Support Chat</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> console.warn("Second button")}
                        style={styles.settingsButton}>
                            <IonIcon
                            name="log-out-outline"
                            size={20}
                            color={ 'black'}
                            style = {{paddingHorizontal: 5}}
                            />
                        <Text style={styles.buttonText}>Sign Out</Text>    
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default Settings

const styles = StyleSheet.create({

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
    buttonContainer:{
        flex:1,
        alignItems: 'center',
        marginTop: 15,
        width: '100%',
    },

    settingsButton:{
        backgroundColor: "#F2F2F2",
        width: 350,
        padding: 15,
        marginVertical: 7,
        borderRadius: 5,
        alignItems: 'flex-start',
        flexDirection: 'row'

    },
    currencyButton:{
        backgroundColor: "#F2F2F2",
        width: 350,
        padding: 15,
        marginVertical: 2,
    },

    buttonText:{
        color: 'black',
        fontWeight: '300',
        fontSize: 18,
        marginLeft: 5,
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
      modalText: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
      }

})
