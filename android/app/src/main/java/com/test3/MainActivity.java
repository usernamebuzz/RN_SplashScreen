package com.test3;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // 추가

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
