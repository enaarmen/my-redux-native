import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/signInScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <HomeScreen />
      </View>
    );
  }
}
//<Text>Open up App.js to start working on your app!</Text>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
