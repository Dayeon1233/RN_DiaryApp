import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LogContext from '../contexts/LogContext';

function CalendarScreen() {
  return <View style={styles.block} />;
}
const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
});

export default CalendarScreen;
