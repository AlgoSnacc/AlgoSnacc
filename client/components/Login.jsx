import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.loginTitle}>Have an account?</Text> */}
      <Input
        containerStyle={{ paddingBottom: 20 }}
        placeholder="username"
        leftIcon={{
          type: 'font-awesome',
          name: 'chevron-right',
          color: '#4a4a4a',
          marginRight: 10,
        }}
      />
      <Input
        placeholder="password"
        secureTextEntry={true}
        leftIcon={{
          type: 'font-awesome',
          name: 'lock',
          color: '#4a4a4a',
          marginRight: 10,
        }}
      />
      <Button
        style={styles.loginButton}
        buttonStyle={{
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#2b97fc',
        }}
        title="Login"
        type="solid"
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={styles.accountText}>Don't have and account?</Text>
      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('Sign Up')}
      >
        Sign Up
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 300,
    borderRadius: 10,
    paddingBottom: 20,
    paddingTop: 10,
    margin: 50,
  },

  loginButton: {
    marginTop: 20,
  },
  inputField: {
    paddingBottom: 50,
    color: 'blue',
  },
  accountText: {
    marginTop: 20,
  },
  signUpText: {
    marginTop: 10,
    color: '#2b97fc',
    fontWeight: 'bold',
  },
});
