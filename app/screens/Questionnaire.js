import React from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

export default class Donation extends React.PureComponent {
  state = { response: '' };

  _submit = () => {
    // TODO: send to API
    this.props.navigation.goBack();
  };

  render() {
    const { id, question } = this.props.navigation.state.params || {};

    if (!id) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>{question}</Text>
        <TextInput
          style={styles.input}
          autoFocus
          onChangeText={(text) => this.setState({ response: text})}
          value={this.state.response}
        />
        <Button title="Submit response" onPress={this._submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10
  },
  button: {
    flex: 1,
    margin: 10
  }
});