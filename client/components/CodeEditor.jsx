import React from 'react';
import { WebView } from 'react-native-webview';

const CodeEditor = () => {
<<<<<<< HEAD
  return <WebView source={{ uri: process.ENV.IP + ':4000' }} />;
=======
  return <WebView source={{ uri: 'http://192.168.1.138:4000' }} />;
>>>>>>> 7ea3695c2d336fcf3fba3e6c95b4c09f36591a59
};

export default CodeEditor;
