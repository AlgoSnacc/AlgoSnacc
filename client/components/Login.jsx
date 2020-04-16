import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  // const [success, setSuccess] = useState(false);
  // verify user info
  const handleLogin = async () => {
    console.log('login', login);
    try {
      const loginSuccess = await axios.post(`http://localhost:3000/login`, {
        username: login.username,
        password: login.password,
      });
      console.log('success', loginSuccess.data);
      if (loginSuccess.data) {
        // setSuccess(true);
        console.log('in success');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('error login');
    }
  };
  const { username, password } = login;

  return (
    <View style={styles.container}>
      <Input
        containerStyle={{ paddingBottom: 20 }}
        placeholder="username"
        leftIcon={{
          type: 'font-awesome',
          name: 'chevron-right',
          color: '#4a4a4a',
          marginRight: 10,
        }}
        value={username}
        onChangeText={(input) =>
          setLogin({
            ...login,
            username: input,
          })
        }
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
        value={password}
        onChangeText={(input) =>
          setLogin({
            ...login,
            password: input,
          })
        }
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
        onPress={handleLogin}
      />
      <Text style={styles.accountText}>Don't have an account?</Text>
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
    margin: 20,
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
