import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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

export default styles;
