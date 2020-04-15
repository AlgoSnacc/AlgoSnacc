import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.signUpTitle}>Create an account</Text>
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
        containerStyle={{ paddingBottom: 20 }}
        placeholder="email"
        leftIcon={{
          type: 'font-awesome',
          name: 'envelope',
          color: '#4a4a4a',
          size: 20,
          marginRight: 10,
        }}
      />
      <Input
        style={styles.inputField}
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
        style={styles.signUpButton}
        buttonStyle={{
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: '#2b97fc',
        }}
        title="Sign Up"
        type="solid"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    borderRadius: 10,
    paddingBottom: 20,
    paddingTop: 10,
    margin: 50,
  },
  signUpTitle: {
    marginBottom: 20,
  },
  signUpButton: {
    marginTop: 20,
  },
});
