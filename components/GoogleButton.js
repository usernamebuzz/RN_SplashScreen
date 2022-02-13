import {TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import React from 'react';

const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.iconbutton}>
      <Image source={require('../assets/Google.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
    width: 60,
    height: 12,
    alignItems: 'center',
  },
});

export default GoogleButton;
