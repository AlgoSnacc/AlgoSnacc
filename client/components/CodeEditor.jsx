import React from 'react';
import { WebView } from 'react-native-webview';

const CodeEditor = () => {
  return <WebView source={{ uri: 'http://192.168.1.138:4000' }} />;
};

export default CodeEditor;
