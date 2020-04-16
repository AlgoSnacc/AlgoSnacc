import React from 'react';
import { WebView } from 'react-native-webview';

const CodeEditor = () => {
  return <WebView source={{ uri: process.ENV.IP + ':4000' }} />;
};

export default CodeEditor;
