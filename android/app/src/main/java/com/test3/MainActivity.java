package com.test3;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Import 하시면 됩니다..
import android.os.Bundle; // Import 하시면 됩니다..

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this); // 추가
        super.onCreate(savedInstanceState);
  }
  @Override
  protected String getMainComponentName() {
    return "Test3";
  }
}
