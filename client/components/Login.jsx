import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Have an account?</Text>
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
        buttonStyle={{ paddingLeft: 20, paddingRight: 20 }}
        title="Login"
        type="outline"
      />
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
  loginTitle: {
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 20,
  },
  inputField: {
    paddingBottom: 50,
    color: 'blue',
  },
});
