import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RadioInput extends React.Component {

  _renderOption = option => (
    <TouchableOpacity key={option} style={styles.option} onPress={() => this.props.onChange(option)}>
      <Icon
        name={option === this.props.value ? 'radio-button-checked' : 'radio-button-unchecked'}
        size={25}
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
    flexDirection: 'row',
    marginVertical: 10
  },
  label: {
    flex: 1,
    top: 20
  },
  options: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  option: {
    flexDirection: 'row',
    margin: 5,
    marginHorizontal: 10
  },
  optionLabel: {
    marginLeft: 5,
    lineHeight: 30
  }
});