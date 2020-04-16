import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignUp = ({ navigation }) => {
  const [signup, setSignup] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState(false);
  // function to signup users and store in db
  const handleSignup = () => {
    console.log('in handleSignup', signup);
    // const signupSuccess = await axios.post(`https://localhost:3000/`);
    // console.log('success', signupSuccess);
    setSuccess(true);
    if (success) {
      console.log('in success');
      navigation.navigate('Home');
    }
  };

  const { username, email, password } = signup;

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
        value={username}
        onChangeText={(input) =>
          setSignup({
            ...signup,
            username: input,
          })
        }
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
        value={email}
        onChangeText={(input) =>
          setSignup({
            ...signup,
            email: input,
          })
        }
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
        value={password}
        onChangeText={(input) =>
          setSignup({
            ...signup,
            password: input,
          })
        }
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
        onPress={handleSignup}
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
