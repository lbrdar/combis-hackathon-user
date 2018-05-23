import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from "moment";

export default class DateInput extends React.Component {
  render() {
    const { value, label, onChange, ...dateInputProps } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <DatePicker
          date={value}
          mode="date"
          placeholder={label}
          format="MM/DD/YYYY"
          maxDate={moment().format("MM/DD/YYYY")}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={onChange}
          {...dateInputProps}
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