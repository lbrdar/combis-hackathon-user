import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RadioInput extends React.Component {

  _renderOption = option => (
    <TouchableOpacity key={option} style={styles.option} onPress={() => this.props.onChange(option)}>
      <Icon
        name={option === this.props.value ? 'radio-button-unchecked' : 'radio-button-checked'}
        size={30}
        color="darkgray"
      />
      <Text style={styles.optionLabel}>{option}</Text>
    </TouchableOpacity>
  );

  render() {
    const { label, options } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.options}>
        { options.map(this._renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  label: {
    padding: 10,
    flex: 1
  },
  options: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  option: {
    flexDirection: 'row',
    margin: 5
  },
  optionLabel: {
    lineHeight: 30
  }
});