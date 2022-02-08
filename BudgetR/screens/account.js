import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from '../env';


const botAvatar = require('../images/Bot.jpeg')

const BOT = {
    _id: 2,
    name: 'Money Bot',
    avatar: botAvatar
}


class Account extends Component{
    state = {
        messages: [ {_id: 1, text: 'Hi =)', createdAt: new Date(), user: BOT}],
        id: 1,
        name: ''
    };
    componentDidMount(){
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_GB,
            dialogflowConfig.project_id
        )
    }

    handleGoogleResponse(result){
        let text = result.queryResult.fulfillmentMessages[0].
        text.text[0];

        this.sendBotResponse(text)
    }
    sendBotResponse(text){
        let msg = {
            _id: this.state.messages.length + 1,
            text,
            createdAt: new Date(),
            user: BOT
        }
        this.setState ((previousState) =>({
            messages: GiftedChat.append(previousState.
            messages, [msg]),
        }))
    }




    onSend (messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.
            messages, messages)
        }))
        let message = messages[0].text;

        Dialogflow_V2.requestQuery(
            message,
            (result) => this.handleGoogleResponse(result),
            (error) => console.log(error)
        )
    };
    onQuickReply (quickReply){
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.
            messages, quickReply)
        }))
        let message = quickReply[0].value;

        Dialogflow_V2.requestQuery(
            message,
            (result) => this.handleGoogleResponse(result),
            (error) => console.log(error)
        )
    };




    render(){
        return(
            <View style = {{flex: 1, backgroundColor: '#fff', marginBottom: 105}}>
                <GiftedChat 
                messages = {this.state.messages}
                onSend={(message) => this.onSend(message)}
                onQuickReply = {(onQuickReply) => this.onQuickReply
                    (quickReply)} 

                    user = {{_id : 1}}
                />
            </View>

        );
    }


}

export default Account;