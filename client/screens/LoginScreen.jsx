import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import Login from '../components/Login.jsx';
import SignUp from '../components/SignUp.jsx';

const LoginScreen = () => {
  return (
    <View>
      {/* input Logo here */}
      <SignUp />
      <View>
        <Divider style={styles.divider} />
      </View>
      <Login />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: 300,
    alignSelf: 'center',
  },
});
