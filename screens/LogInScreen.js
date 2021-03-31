import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import backGroundImage from '../assets/images/logIn.png';
import Rect from '../assets/images/Rectangle.js';
import logo from '../assets/images/logo.png';
import Shadow from '../assets/images/Shadow.js';

// import TextBox from '../components/TextBox/index';
import StyledButton from '../components/Button/loginIndex';

export default function LogInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <TextInput
            style={styles.textBox}
            placeholder='E-mail'
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.textBox}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
        {/* <TextBox content={'email'}></TextBox>
        <TextBox content={'password'}></TextBox> */}
      </View>
      <KeyboardAvoidingView
        behavior="height"
        style={styles.container}
        enabled={false}
      >
        <View style={styles.buttonContainer}>
          <StyledButton content={'LogIn'} email={email} password={password}></StyledButton>
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
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  textBox: {
    height: 50,
    width: 220,
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
