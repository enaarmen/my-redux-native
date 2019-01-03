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

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setname = false;
    this.name = '';
    this.setpass = false;
    this.pass = '';
  }
    static navigationOptions = {
      title: 'Please sign in',
    };

    _signInAsync = async () => {
      await AsyncStorage.setItem('token', 'name');
      this.props.navigation.navigate('loading');
    };
  
    render() {
      if (!this.setname || !this.setpass) {
      return (
        <View style={styles.container}>
          <Text>enter login</Text>
          <TextInput onChangeText={(text) => this.name = text} onEndEditing={this.name == '' ? this.setname = false : this.setname = true} />
          <TextInput onChangeText={(text) => this.name = text} onEndEditing={this.pass == '' ? this.setpass = false : this.setpass = true} />
          </View>
      );
      } else {
        <View style={styles.container}>
          <Button title="Sign in!" onPress={() => {this._signInAsync(this.name, this.pass)}} />
        </View>
      }
    }
  }
  
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
      this.props.navigation.navigate('Auth');
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