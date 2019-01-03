import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { navigate } from 'react-navigation';
//import App from '../App';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };
  constructor(props) {
    super(props);
    this.setname = false;
    this.name = '';
    this.setpass = false;
    this.pass = '';
  }

    _signInAsync = async (name, token) => {
      await AsyncStorage.setItem(token, name);
      this.props.navigation.navigate('HomeScreen');
    };

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('App');
    };
  
    render() {
      if (!this.setname || !this.setpass) {
      return (
        <View style={styles.container}>
          <Text>enter login and password</Text>
          <TextInput style={{borderColor: 'red', borderWidth: 10}} onChangeText={(text) => this.name = text} onEndEditing={() => {this.name == '' ? this.setname = false : this.setname = true}} />
          <TextInput style={{borderColor: 'red', borderWidth: 10}} onChangeText={(text) => this.pass = text} onEndEditing={() => {this.pass == '' ? this.setpass = false : this.setpass = true}} />
          <Button title="press to log in!" onPress={() => {(this.setpass && this.setname) ? this.setState({name: this.name, password: this.pass}) : null}} />
        </View>
      );
      } else {
          return (
          <View style={styles.container}>
            <Button style={{borderColor: 'red', borderWidth: 2}} title="Sign in!" onPress={() => {() => {this._signInAsync(this.name, this.pass)}}} />
            <Button style={{borderColor: 'red', borderWidth: 2}} title="Go back!" onPress={() => {() => {this.props.navigation.goBack()}}} />
          </View>
        );
      }
    }
  }

  //{this.setpass = false; this.setname = false; this.name = ''; this.pass = ''}
  
  class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    static navigationOptions = {
      title: 'Welcome to the app!',
    };

    _showMoreApp = () => {
      this.props.navigation.navigate('loading');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('SignInScreen');
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
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
  
  // More code like OtherScreen omitted for brevity