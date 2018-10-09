import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './pages/Signup'
//import Home from './pages/Home';
//import Profile from './pages/Profile';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
		<Signup/>
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
