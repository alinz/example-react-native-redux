import React, { PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 20,
    padding: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',

    margin: 5
  }
});

const Button = (props) => {
  const { children, onClick } = props

  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

Button.PropTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
