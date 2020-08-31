import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage,
} from 'react-native';

export class Register extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    passwrd: '',
    passwrdConfirm: '',
  };

  cancelRegister = () => {
    Alert.alert('Registration cancelled');
    this.props.navigation.navigate('Home');
  };

  registerAccount = () => {
    if (!this.state.username) {
      Alert.alert('Please enter a username');
    } else if (this.state.passwrd !== this.state.passwrdConfirm) {
      Alert.alert('Passwords do not match');
    } else {
      AsyncStorage.getItem(this.state.username, (result) => {
        if (result !== null) {
          Alert.alert(`${this.state.username} already exists`);
        } else {
          AsyncStorage.setItem(
            this.state.username,
            this.state.passwrdConfirm,
            () => {
              Alert.alert(`${this.state.username} account created`);
              this.props.navigation.navigate('Home');
            }
          );
        }
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Text style={styles.heading}>Register Account</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({ username: text })}
          value={this.state.username}
        />
        <Text style={styles.label}>Enter Username</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({ passwrd: text })}
          value={this.state.passwrd}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({ passwrdConfirm: text })}
          value={this.state.passwrdConfirm}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TouchableHighlight
          onPress={this.registerAccount}
          underlayColor="#31e981"
        >
          <Text style={styles.buttons}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.cancelRegister}
          underlayColor="#31e981"
        >
          <Text style={styles.buttons}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
    paddingTop: '10%',
  },
  heading: {
    flex: 1,
    fontSize: 16,
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10,
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
  },
  label: {
    paddingBottom: 10,
  },
});
