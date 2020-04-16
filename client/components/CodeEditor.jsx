import React from 'react';
import { WebView } from 'react-native-webview';
import { IP } from 'react-native-dotenv';

const CodeEditor = () => {
  return <WebView source={{ uri: IP + ':4000' }} />;
};

export default CodeEditor;
