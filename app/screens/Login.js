import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { Input } from '../common/index';
import { onSignIn } from "../utils/auth";

export default class Login extends React.Component {
  state = {
    email: '',
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
          label="Email"
          onChange={(text) => this.setState({ email: text})}
          value={this.state.email}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          label="Password"
          onChange={(text) => this.setState({ pass: text})}
          value={this.state.pass}
        />
        <Button title="Submit" onPress={this._submit} />
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