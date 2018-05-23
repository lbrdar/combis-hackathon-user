import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Questionnaires extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Fill out some Questionnaires</Text>
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