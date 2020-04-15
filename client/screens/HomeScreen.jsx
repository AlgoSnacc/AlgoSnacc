import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const Home = () => {
  return (
    <View>
      <Card
        title="Today's Challenge"
        containerStyle={{
          backgroundColor: '#24a0ff',
          height: 200,
          borderRadius: 10,
        }}
        titleStyle={{ color: 'white', alignSelf: 'flex-start' }}
      >
        <Text style={styles.challenge}>Two Sum</Text>
      </Card>
      <Card
        title="My Snacks"
        containerStyle={{
          backgroundColor: '#ffc561',
          height: 200,
          borderRadius: 10,
        }}
        titleStyle={{ color: 'white', alignSelf: 'flex-start' }}
      >
        <Text style={styles.snacks}>5 Snacks</Text>
      </Card>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  challenge: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  snacks: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
});
