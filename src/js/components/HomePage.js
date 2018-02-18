import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import ProfilePreviewPage from './ProfilePreviewPage';
import styles from '../stylesheets/HomePage';

export default class HomePage extends Component<{}> {
  _handlePress = ()  => {
    this.props.navigator.replace({ component: ProfilePreviewPage });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Welcome to Tindr!
        </Text>
        <Text style={styles.paragraph}>
          It's getting <Text style={{ fontStyle: 'italic' }}>cold</Text> out.
        </Text>
        <Text style={styles.paragraph}>
          🔥 Let's heat things up 🔥
        </Text>
        <Button
          onPress={this._handlePress}
          title="Gotcha! 😉"
        />
      </View>
    );
  }
}
