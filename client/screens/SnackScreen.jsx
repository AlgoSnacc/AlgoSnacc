import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AnimateNumber from 'react-native-animate-number';

import Snacks from '../components/Snacks.jsx';
import Robot from '../assets/robot.png';

const SnackScreen = () => {
  const numSnacks = (
    <AnimateNumber
      value={5}
      countBy={1}
      interval={15}
      timing={(interval) => {
        return interval * (1 - Math.sin(Math.PI)) * 15;
      }}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.snackHeader}>
        <Text style={styles.snackTitle}>{numSnacks} Snacks</Text>
        <Image style={styles.robot} source={Robot} />
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.completeTitle}>Challenges Completed</Text>
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
    backgroundColor: '#ff7878',
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  snackTitle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  completeTitle: {
    color: '#4a4a4a',
    // color: 'black',
    // backgroundColor: '#ffde91',
    alignSelf: 'stretch',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  robot: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginLeft: 20,
  },
});
