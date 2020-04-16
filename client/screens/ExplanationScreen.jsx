import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import ChallengeHeader from "../components/ChallengeHeader.jsx";

const ExplanationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ChallengeHeader />
      <WebView
        source={{
          uri:
            "https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/factorial/factorial.js",
        }}
      />
    </View>
  );
};

export default ExplanationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
