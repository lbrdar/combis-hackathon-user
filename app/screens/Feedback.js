import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default class Feedback extends React.PureComponent {
  _goToEmail = () =>
    Linking.openURL('mailto:leo.brdar@gmail.com').catch(() => alert("Oops", "Something went wrong"));

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please give us your feedback so we can improve!</Text>
        <Text style={styles.text}>You can contact us at</Text>
        <TouchableOpacity onPress={this._goToEmail} style={styles.emailContainer}>
          <Text style={styles.emailText}> leo.brdar@gmail.com</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  emailContainer: {
  },
  emailText: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center'
  }
});