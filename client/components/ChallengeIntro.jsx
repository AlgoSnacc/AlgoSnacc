import React from "react";
import { StyleSheet, View } from "react-native";
import { Badge, Text } from "react-native-elements";
import ChallengeHeader from "./ChallengeHeader.jsx";

const ChallengeIntro = () => {
  return (
    <View style={styles.container}>
      <ChallengeHeader />
      <View style={styles.explanation}>
        <Text>
          In mathematics, the factorial of a non-negative integer n, denoted by
          n!, is the product of all positive integers less than or equal to n.
          For example: 5! = 5 * 4 * 3 * 2 * 1 = 120
        </Text>
      </View>
    </View>
  );
};

export default ChallengeIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  explanation: {
    margin: 10,
  },
});
