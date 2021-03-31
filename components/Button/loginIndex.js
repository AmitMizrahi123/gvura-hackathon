import React from 'react';
import styles from './styles.js';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import textStyles from '../textStyles.js';

const StyledButton = (props) => {
  const { content, preeFunc } = props;
  return (
    <View style={styles.container}>
      <Pressable style={styles.logInButton}>
        <Text style={textStyles.logIn}> {content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
