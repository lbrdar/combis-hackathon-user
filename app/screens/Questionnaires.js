import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Loading } from "../common";

export default class Questionnaires extends React.Component {
  state = { questionnaires: [], loading: true };

  componentWillMount() {
    setTimeout(() => this.setState({ questionnaires: [
        {
          id: '34143',
          question: 'Are you ok?'
        },
        {
          id: '43241',
          question: "Where you in UK last month?"
        }
      ], loading: false }), 1000)
  }

  _renderRow = ({ item: questionnaire }) => (
    <TouchableOpacity style={styles.row} onPress={() => this.props.navigation.navigate('Questionnaire', { ...questionnaire })}>
      <Text numberOfLines={1} style={styles.label}>
        {questionnaire.question}
      </Text>
    </TouchableOpacity>
  );

  _keyExtractor = (item) => item.id;

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <FlatList
        data={this.state.questionnaires}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    backgroundColor: 'white'
  },
  label: {
    height: 30,
    lineHeight: 30
  }
});