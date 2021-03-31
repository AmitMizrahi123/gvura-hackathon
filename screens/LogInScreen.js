import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import backGroundImage from '../assets/images/logIn.png';
import Rect from '../assets/images/Rectangle.js';
import logo from '../assets/images/logo.png';
import Shadow from '../assets/images/Shadow.js';

import TextBox from '../components/TextBox/index';
import StyledButton from '../components/Button/loginIndex';

export default function LogInScreen({ navigation }) {
  return (
    <ImageBackground source={backGroundImage} style={styles.container}>
      <Rect />
      <Image source={logo} style={styles.logo} />
      <Shadow style={styles.shadow} />

      <View style={styles.register}>
        <Text>
          <Text style={(styles.register, { color: '#FFFFFF' })}>לא רשום? </Text>
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.register}
          >
            פתח משתמש
          </Text>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <TextBox content={'אימייל'}> </TextBox>
        <TextBox content={'סיסמא'}></TextBox>
      </View>
      <KeyboardAvoidingView
        behavior="height"
        style={styles.container}
        enabled={false}
      >
        <View style={styles.buttonContainer}>
          <StyledButton content={'התחברות'}></StyledButton>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    top: '60%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  register: {
    width: '100%',
    bottom: '5%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#0048FC',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    width: '100%',
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
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
