import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Rect from '../assets/images/Rectangle.js';
import logo from '../assets/images/logo.png';

import TextBox from '../components/TextBox/index';
import StyledRegButton from '../components/Button/registerIndex';

export default function RegisterScreen() {
  return (
    <ImageBackground style={styles.container}>
      <Rect />
      <Image source={logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <TextBox content="שם מלא" reg={false}></TextBox>
        <TextBox content="אימייל"></TextBox>
        <TextBox content="סיסמא"></TextBox>
        <TextBox content="אימות סיסמא"></TextBox>
      </View>
      <KeyboardAvoidingView
        behavior="height"
        style={styles.container}
        enabled={false}
      >
        <View style={styles.buttonContainer}>
          <StyledRegButton content="הרשמה"></StyledRegButton>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: '72%',
    width: '100%',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: '32%',
    right: '15%',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    height: 72.5,
    width: 222.5,
    alignSelf: 'center',
    top: 80,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
