import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import Login from '../components/Login.jsx';
import SignUp from '../components/SignUp.jsx';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.signInContainer}>
        {/* input Logo here */}
        <SignUp navigation={navigation} />
        <View>
          <Divider style={styles.divider} />
        </View>
        <Login />
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
  },
  signInContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: 300,
    alignSelf: 'center',
  },
});
