import {TouchableOpacity, StyleSheet, Image, SafeAreaView} from 'react-native';
import React from 'react';
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";

const iosKeys = {
  kConsumerKey: "0cn7Y153BwktAITBA9KI",
  kConsumerSecret: "tMEalARoGO",
  kServiceAppName: "테스트앱(iOS)",
  kServiceAppUrlScheme: "testapp" // only for iOS
};

const androidKeys = {
  kConsumerKey: "0cn7Y153BwktAITBA9KI",
  kConsumerSecret: "tMEalARoGO",
  kServiceAppName: "테스트앱(안드로이드)"
};
const initials = Platform.OS === "ios" ? iosKeys : androidKeys;

const NaverButton = () => {
  const [naverToken, setNaverToken] = React.useState(null);

  const naverLogin = props => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token) => {
        console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        setNaverToken(token);
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      });
    });
  };

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken("");
  };

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === "024") {
      Alert.alert("로그인 실패", profileResult.message);
      return;
    }
    console.log("profileResult", profileResult);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.iconbutton} 
      onPress={() => naverLogin(initials)}>
      <Image source={require('../assets/Naver.png')} />
      </TouchableOpacity>

      {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}

      {!!naverToken && (
        <Button title="회원정보 가져오기" onPress={getUserProfile} />
      )}
    </SafeAreaView>
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

export default NaverButton;
