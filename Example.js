/*	
We used react-native-gifted-chat module from github: https://github.com/FaridSafi/react-native-gifted-chat
Please type command "npm install react-native-gifted-chat" before executing the program, then use "expo start" command 
to start demo by expo.(We tried "npm start" but it's not gonna work for unknown reason.)
We used google logo for button and avatar image temporarily.
*/

import {
  GiftedChat,
  Actions,
  SystemMessage,
  Send,
  Bubble,
} from 'react-native-gifted-chat';
import React from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  Icon,
} from 'react-native';


class Example extends React.Component {
  state = {
    messages: [],
    user: {
      _id: 2,
      name: 'Chat',
      avatar:
        "https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        ,
    },
    isTyping: false,
  };
  onInputTextChanged = this.onInputTextChanged.bind(this);


  onInputTextChanged(text){
    if (text.trim().length > 0){
      this.setState({isTyping: true})
    } else {
      this.setState({isTyping: false})
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: this.state.user,
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  renderSend(props) {
    if (props.text.trim().length > 0) {
      return (
      // Here the first button is for further functionalities, such as sending an image.
      // Second one is the send button.
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
        <Image
            source={{uri: "https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}}
            style={{ width: 40, height: 40 }}
        />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.onSend({ text: props.text }, true)}>
          <Image
            source= {{uri: "https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
      );
    }
    return null;
  }

  // We can add a button on the left of textinput.
  /*
  renderActions() {
    return (
      <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
      <Image
            source= {{uri: "https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}}
            style={{ width: 40, height: 40 }}
      />
      </TouchableOpacity>
    );
  } */


  // bubble color
  renderBubble(props) {
    return (
      <View>
      <Bubble
        {...props}
          wrapperStyle={{
            left: {
              backgroundColor: "lightgreen"
            },
            right: {
              backgroundColor: "mediumseagreen"
            }
          }}
          textStyle={{
            right: {
              color: "black",
            },
            left: {
              color: "black",
            }
          }}
      />
      <Text> {this.state.user.name} </Text>
      </View>
    );
  }



  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 80,
        }}
        textStyle={{
          fontSize: 80,
        }}
      />
    );
  }



  render() {
    return (
      <View style={{ height: '100%' }}>
        <StatusBar barStyle={'light-content'} />
        <Header user={this.state.user.name} isTyping={this.state.isTyping} />
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          renderSend={this.renderSend}
          // renderActions={this.renderActions}
          user={{
            _id: 1,
          }}
          onInputTextChanged = {this.onInputTextChanged}
          renderBubble={this.renderBubble.bind(this)}
        renderSystemMessage = {this.renderSystemMessage.bind(this)}
        />
      </View>
    );
  }
}

// top menu
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let status;
    status = this.props.isTyping ? "is typing..." :  this.props.user;
    return (
      <View style={styles.top}>
        <View style={{ marginTop: 28 }}>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Back"
            color="#fff"
            style={{ width: 200, fontSize: 20 }}
          />
        </View>
        <Text style={styles.topText}>{status}</Text>
      </View>
    );
  }
}


export default Example;

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'green',
    flexDirection: 'row',
    height: 80,
  },
  topText: {
    marginTop: 33,
    color: 'white',
    fontSize: 23,
    width: 300,
    textAlign: 'center',
  },
});

