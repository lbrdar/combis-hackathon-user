import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { Input } from '../common/index';
import { onSignIn } from "../utils/auth";

export default class Login extends React.Component {
  state = {
    username: '',
    pass: ''
  };

  _submit = () => {
    // TODO
    onSignIn();
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Input
          autoFocus
          autoCapitalize="none"
          label="Username"
          onChange={(text) => this.setState({ username: text})}
          value={this.state.username}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          label="Password"
          onChange={(text) => this.setState({ pass: text})}
          value={this.state.pass}
        />
        <Button title="Submit" onPress={this._submit} color="#ff2222" style={{ margin: 20 }} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 16,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});