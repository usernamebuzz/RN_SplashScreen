import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';

function App() {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide(); {/*추가*/}
      }, 2000); {/* 스플래시 시간 조절 (2초) */}
    } catch(e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
