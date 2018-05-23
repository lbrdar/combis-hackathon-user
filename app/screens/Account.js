import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Account extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>My Profile</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});