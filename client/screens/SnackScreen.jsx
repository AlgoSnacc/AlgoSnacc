import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Snacks from '../components/Snacks.jsx';

const SnackScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.snackHeader}>
        <Text style={styles.snackTitle}>My Snacks</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.completeTitle}> Challenges Completed</Text>
      </View>
      <Snacks />
    </View>
  );
};

export default SnackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  snackHeader: {
    backgroundColor: '#ffc561',
    height: 200,
    justifyContent: 'center',
  },
  snackTitle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  completeTitle: {
    color: '#4a4a4a',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});
