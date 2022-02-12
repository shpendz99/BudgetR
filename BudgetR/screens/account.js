import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native'
import React, {Component} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Dialogflow_V2 } from 'react-native-dialogflow'

import { dialogflowConfig } from '../env'



const botAvatar = require('../images/Bot.jpeg')

const BOT_USER = {
    _id: 2,
    name: 'Saving Bot',
    avatar: botAvatar
}





class ChatBot extends Component {
    state = {
        messages: [
          {
            _id: 1,
            text: `Hi! I am the FAQ bot 🤖.\n\nHow may I help you with today?`,
            createdAt: new Date(),
            user: BOT_USER
          }
        ]
      };

     
    
      componentDidMount() {
        try{
          Dialogflow_V2.setConfiguration(
          dialogflowConfig.private_key_id,
          dialogflowConfig.private_key,
          dialogflowConfig.client_email,
          dialogflowConfig.client_id,
          dialogflowConfig.auth_uri,
          dialogflowConfig.token_uri,
          dialogflowConfig.auth_provider_x509_cert_url,
          dialogflowConfig.client_x509_cert_url,
          "103985160649803161950",Dialogflow_V2.LANG_ENGLISH_US,
        );
        }catch(error){
          console.log(error)
        }
        
      }
    
      handleGoogleResponse(result) {
        console.warn(result)
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.sendBotResponse(text);
        
        console.log("This is the Result")
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages)
        }));
    
        let message = messages[0].text;
        Dialogflow_V2.requestQuery(
          message,
          result => this.handleGoogleResponse(result),
          error => console.log(error)
        );
        
      }
    
      sendBotResponse(text) {
        console.log("Number 2")
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          user: BOT_USER
        };
        console.log("Number 3")
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));
      }

    
    render(){
        return (
            <View style = {{flex: 1, backgroundColor: 'white', marginBottom: 100}}>

                <Text>Saving Bot!</Text>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={(message) => this.onSend(message)}
                    onQuickReply={(quickReply) => this.onQuickReply
                    (quickReply)}
                    user = {{_id: 1}}
                    />

            </View>
        )
    }
}

export default ChatBot

const styles = StyleSheet.create({})

    // componentDidMount(){
    //     Dialogflow_V2.setConfiguration(
    //         dialogflowConfig.client_email,
    //         dialogflowConfig.private_key,
    //         Dialogflow_V2.LANG_ENGLISH_US,
    //         dialogflowConfig.project_id
    //     )
    // }

    // handleGoogleResponse(result){
    //     let text = result.queryResult.fulfillmentMessages[0].
    //     text.text[0];

    //     this.sendBotResponse(text)
    // }
    // sendBotResponse(text){
    //     let msg = {
    //         _id: this.state.messages.length + 1,
    //         text,
    //         createdAt: new Date(),
    //         user: BOT
    //     }
    //     this.setState ((previouseState) =>({
    //         messages: GiftedChat.append(previouseState.
    //         messages, [msg]),
    //     }))
    // }




    // onSend (messages = []) {
    //     this.setState((previouseState) => ({
    //         messages: GiftedChat.append(previouseState.
    //         messages, messages)
    //     }))
    //     let message = messages[0].text;

    //     Dialogflow_V2.requestQuery(
    //         message,
    //         (result) => this.handleGoogleResponse(result),
    //         (error) => console.log(error)
    //     )
    // };
    // onQuickReply (quickReply){
    //     this.setState((previouseState) => ({
    //         messages: GiftedChat.append(previouseState.
    //         messages, quickReply)
    //     }))
    //     let message = quickReply[0].value;

    //     Dialogflow_V2.requestQuery(
    //         message,
    //         (result) => this.handleGoogleResponse(result),
    //         (error) => console.log(error)
    //     )
    // };