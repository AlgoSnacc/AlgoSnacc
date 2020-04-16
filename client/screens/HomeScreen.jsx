import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('clicked challenge card');
          navigation.navigate('Challenge');
        }}
      >
        <Card
          title="Today's Challenge"
          containerStyle={{
            backgroundColor: '#17b9eb',
            height: 200,
            borderRadius: 10,
          }}
          titleStyle={{ color: 'white', alignSelf: 'flex-start' }}
          dividerStyle={{ height: 2, backgroundColor: 'white' }}
        >
          <Text style={styles.challenge}>Two Sum</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('clicked snacks card');
          navigation.navigate('Snacks');
        }}
      >
        <Card
          title="My Snacks"
          containerStyle={{
            backgroundColor: '#ff7878',
            height: 200,
            borderRadius: 10,
          }}
          titleStyle={{ color: 'white', alignSelf: 'flex-start' }}
          dividerStyle={{ height: 2, backgroundColor: 'white' }}
        >
          <Text style={styles.snacks}>5 Snacks</Text>
        </Card>
      </TouchableOpacity>
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
