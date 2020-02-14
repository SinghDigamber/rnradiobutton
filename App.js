import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioButton from './components/RadioButton';

const PROP = [
	{
		key: 'samsung',
		text: 'Samsung',
	},
	{
		key: 'apple',
		text: 'Apple',
	},
	{
		key: 'motorola',
		text: 'Motorola',
	},
	{
		key: 'lenovo',
		text: 'Lenovo',
  },
];


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RadioButton PROP={PROP} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
