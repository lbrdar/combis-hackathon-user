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
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'stretch' }}>
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
          style={{ flex: 1, alignItems: 'stretch'  }}
          customStyles={{
            dateTouchBody: {
              height: 44,
              flex: 1
            },
            dateInput: {
              height: 44,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              alignItems: 'stretch',
              padding: 5,
              flex: 1
            },
            dateText: {
              lineHeight: 44,
              fontSize: 14
            },
            placeholderText: {
              color: 'gray',
              lineHeight: 44,
              fontSize: 14
            }
          }}
          {...dateInputProps}
        />
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
    flex: 1,
    top: 20
  }
});