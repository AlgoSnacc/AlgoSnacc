import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Login from '../components/Login.jsx';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        {/* input Logo here */}
        <Text style={styles.appName}>AlgoSnacc</Text>
        <Login navigation={navigation} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fae5af',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  loginContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  appName: {
    paddingTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
