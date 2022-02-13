import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {login} from '@react-native-seoul/kakao-login';

const KakaoButton = () => {
  const signInWithKakao = async () => {
    const token = await login();
    setResult(JSON.stringify(token));
  };

  return (
    <TouchableOpacity style={styles.iconbutton} onPress={signInWithKakao}>
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
