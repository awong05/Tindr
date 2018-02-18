import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';

import HomePage from './src/js/components/HomePage';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomePage,
          title: 'Tindr'
        }}
        style={{ flex: 1 }}
      />
    );
  }
}
