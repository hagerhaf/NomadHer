import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './pages/Profile';
//import Home from './pages/Home';
//import Signup from './pages/Signup';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
		<Profile/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
