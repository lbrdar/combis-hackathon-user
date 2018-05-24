import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hey there!</Text>
        <Text>QR code placeholder!</Text>
        <Button title="Inbox" onPress={() => this.props.navigation.navigate('Inbox')} color="#ff2222" />
        <Button title="Questionnaires" onPress={() => this.props.navigation.navigate('Questionnaires')} color="#ff2222" />
        <Button title="My Donations" onPress={() => this.props.navigation.navigate('Donations')} color="#ff2222" />
        <Button title="My Account" onPress={() => this.props.navigation.navigate('Account')} color="#ff2222" />
        <Button title="Give Feedback" onPress={() => this.props.navigation.navigate('Feedback')} color="#ff2222" />
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
  }
});