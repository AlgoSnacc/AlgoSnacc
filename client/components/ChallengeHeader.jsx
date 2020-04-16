import React from "react";
import { StyleSheet, View } from "react-native";
import { Badge, Text } from "react-native-elements";

const ChallengeHeader = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Factorial</Text>
        <Badge
          value="Easy"
          status="success"
          badgeStyle={{ marginTop: 10, marginLeft: 5 }}
        />
      </View>
    </>
  );
};

export default ChallengeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
  },
  title: {
    fontSize: 25,
    borderStyle: "solid",
  },
});
