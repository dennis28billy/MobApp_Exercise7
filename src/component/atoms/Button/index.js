import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({label, onSubmit}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit} style={styles.submit}>
        <Text style={styles.labelButton}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#C238CE',
    paddingVertical: 15,
    borderRadius: 10,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
    fontWeight: '500',
  },
});

export default Button;

