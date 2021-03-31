import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const TextBox = (props) => {
  const { content } = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBox}
        placeholder={content}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
    </View>
  );
};

export default TextBox;
