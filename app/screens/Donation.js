import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import Prompt from 'react-native-prompt';

export default class Donation extends React.PureComponent {
  state = { promptVisible: false };

  _displayPrompt = () => this.setState({ promptVisible: true });
  _hidePrompt = () => this.setState({ promptVisible: false });

  _getCertificate = (email) => {
    // TODO
    console.log('Will send PDF to ', email);
    this._hidePrompt();
  };

  render() {
    const { id, date, location } = this.props.navigation.state.params || {};

    if (!id) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>Date of donation: {date}</Text>
        <Text>Location of donation: {location}</Text>
        <Button title="Get certificate" onPress={this._displayPrompt} />

        <Prompt
          title="Organization's email"
          defaultValue=""
          placeholder="Enter email here"
          visible={ this.state.promptVisible }
          onCancel={this._hidePrompt}
          onSubmit={this._getCertificate}
        />
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
  buttons: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: 10
  }
});