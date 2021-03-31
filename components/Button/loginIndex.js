import React from 'react';
import styles from './styles.js';
import {
  Text,
  View,
  Pressable,
} from 'react-native';
import textStyles from '../textStyles.js';
import * as firebase from 'firebase';

const StyledButton = (props) => {
  const { content, email, password } = props;

  const onLoginPress = (email, password) => {
    firebase
        .auth()
        .LogInWithEmailAndPassword(email, password)
        .then(alert("pass"))
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.logInButton}>
        <Text onPress={() => onLoginPress(email, password)} style={textStyles.logIn}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
