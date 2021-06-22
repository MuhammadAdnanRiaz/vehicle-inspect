import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

export default function ActionButtons() {
  return (
    <View style={styles.buttonView}>
      <Pressable style={[styles.button, styles.cancelButton]}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.submitButton]}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  submitButton: {
    backgroundColor: '#1976d2',
    marginLeft: 10,
  },
  submitText: {
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
  },
  cancelText: {
    color: '#000',
  },
});
