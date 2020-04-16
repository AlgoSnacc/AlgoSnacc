import React from "react";
import { StyleSheet, View } from "react-native";
import ChallengeIntro from "../components/ChallengeIntro.jsx";
import CodeEditor from "../components/CodeEditor.jsx";

const ChallengeScreen = ({ navigation }) => {
  return (
    <>
      <ChallengeIntro style={styles.intro} />
      <CodeEditor style={styles.editor} />
    </>
  );
};

export default ChallengeScreen;

const styles = StyleSheet.create({
  intro: {
    flex: 1,
  },
  editor: {
    flex: 2,
  },
});
