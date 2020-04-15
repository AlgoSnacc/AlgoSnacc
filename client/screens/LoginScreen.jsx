import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Login from '../components/Login.jsx';
import Logo from '../assets/logo.png';
import LogoName from '../assets/logo-name.png';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        {/* input Logo here */}
        <Image style={styles.logo} source={LogoName} />
        {/* <Text style={styles.appName}>AlgoSnacc</Text> */}
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
    paddingTop: 20,
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
  logo: {
    width: 180,
    height: 180,
    // alignSelf: 'center',
    marginTop: 20,
  },
});
