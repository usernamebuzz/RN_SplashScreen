import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const KakaoButton = () => {
  return (
    <TouchableOpacity style={styles.iconbutton}>
      <Image source={require('../assets/Kakao.png')} />
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

export default KakaoButton;
