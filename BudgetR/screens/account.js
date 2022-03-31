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

class Account extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am the BudgetR Bot.\n\nType 'Help' for Tutorial 🔥`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }

  //handles Response --Dialogflow sends message back
  handleGoogleResponse(result) {
    console.log(result)
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  //storing object to messages state 
  //Extracts the message that the user entered 
  //sends message to DialogFlow 
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

  //bot(Virtual Assistant) sends message to user
  //Application displays message from bot
  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }


 
    
    render(){
        return (
            <SafeAreaView style = {{flex: 1, backgroundColor: 'white', marginBottom: 100, marginHorizontal:20, borderRadius: 20, marginTop: 40}}>

                
                <GiftedChat
                    messages={this.state.messages}
                    onSend={(message) => this.onSend(message)}
                    onQuickReply={(quickReply) => this.onQuickReply
                    (quickReply)}
                    user = {{_id: 1}}
                    />

            </SafeAreaView>
        )
    }
}

export default Account

const styles = StyleSheet.create({})

  