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
    flex: 1
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10
  }
});