import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.signInContainer}>
        <LoginScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae5af',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
});
