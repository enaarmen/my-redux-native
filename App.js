import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthLoadingScreen from './components/loading';
import { withNavigation } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AuthLoadingScreen navigation={withNavigation}/>
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
