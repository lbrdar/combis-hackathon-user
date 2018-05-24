import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Input extends React.Component {
  render() {
    const { label, onChange, ...textInputProps } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          {...textInputProps}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  label: {
    flex: 1,
    top: 20
  },
  input: {
    flex: 2,
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 5,
    fontSize: 14,
    margin: 10
  }
});