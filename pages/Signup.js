import React, { Component } from 'react';
//import { AppRegistry, Image,View } from 'react-native';
import {
  Image,
  Linking,
  StyleSheet,
  AppRegistry,
  Platform,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Signup extends Component {
	
	
	state = {
    user: undefined, // user has not logged in yet
  };

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    });
    if (Platform.OS === 'ios') {
      //SafariView.dismiss();
    }
  };

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL('https://localhost:3000/auth/facebook');

 

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      /*SafariView.show({
        url: url,
        fromBottom: true,
      });*/
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };
	
	
  render() {
	  
	  let pic = {
      uri: 'img/1.JPG'
    };
     return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
        <Image source={require('./img/1.jpg')} style={{width: 360, height: 200}}/>
		
     
	  
	   <View  style={styles.buttons}>
	    <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={this.loginWithFacebook}
            {...iconStyles}
          >
            Login with Facebook
          </Icon.Button>
		  
		  <Text>
			{"\n"}
		</Text>
		  
		  <Icon.Button
            name="twitter"
            backgroundColor="#00cccc"
            onPress={this.loginWithFacebook}
            {...iconStyles}
          >
            Login with Twitter
          </Icon.Button>
		  
		  <Text>
			{"\n"}
		</Text>
		  
		  <Icon.Button
            name="instagram"
            backgroundColor="#ffc0cb"
            onPress={this.loginWithFacebook}
            {...iconStyles}
          >
            Login with Instagram
          </Icon.Button>
		  
		  <Text>
			{"\n"}
		</Text>
		
		  <Icon.Button
            name="linkedin"
            backgroundColor="#0099bf"
            onPress={this.loginWithFacebook}
            {...iconStyles}
          >
            Login with LinkedIn
          </Icon.Button>
	   </View>
	    </View>
    );
  }
}
const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
   
  },
  buttons: {
    justifyContent: 'space-between',
    
    marginTop: 100,
	width: 175,
	marginLeft:100,
	
  },
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('NomadHer', () => Signup);
