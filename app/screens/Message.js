import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default class Message extends React.PureComponent {

  _acceptInvite = () => {
    // TODO
  };

  _declineInvite = () => {
    // TODO
  };

  _renderButtons = () => (
    <View style={styles.buttons}>
      <Button title="Accept" onPress={this._acceptInvite} />
      <Button title="Decline" onPress={this._declineInvite} />
    </View>
  );

  render() {
    const { id, text, type } = this.props.navigation.state.params || {};

    if (!id) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>{text}</Text>
        { type !== 'info' && this._renderButtons() }
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