import React from 'react';
import {  StatusBar, View, Text, LogBox, StyleSheet } from 'react-native';
import { ColorsConstant } from './src/constants/Colors.constant';
import Router from './src/navigation/Router'
import Toast from 'react-native-toast-message';

function App() {
  LogBox.ignoreLogs(['Warning: ...', 'new NativeEventEmitter']);
  LogBox.ignoreAllLogs();

    return (
      <View style={{ flex: 1 }}>
        <View style={[ls.statusBar, { backgroundColor: ColorsConstant.btnColor }]}>
          <StatusBar translucent backgroundColor={ColorsConstant.btnColor} />
        </View>
          <Router />
        <Toast />
      </View>
    );
 
}

const c = ColorsConstant, ls = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
  },
})

export default App;