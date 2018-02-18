import React, { Component } from 'react';
import {
  Alert,
  Button,
  Image,
  Text,
  View
} from 'react-native';

import HomePage from './HomePage';
import styles from '../stylesheets/ProfilePreviewPage';
import data from '../../../db/seeds';

export default class ProfilePreviewPage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {...data[0]};
  }

  _handleDelete = () => {
    Alert.alert(
      `${this.state.name} says...`,
      this.state.rejection,
      [
        {
          text: 'Okay...',
          onPress: () => {
            const index = this.state.index + 1;
            if (index >= data.length) {
              this._handleDefeat();
            } else {
              this.setState({...data[this.state.index + 1]});
            }
          }
        }
      ]
    )
  };

  _handleAccept = () => {
    const index = this.state.index;
    const winner = Math.floor(Math.random() * (data.length - index)) + index;

    if (index === winner) {
      this._handleVictory();
    } else {
      Alert.alert(
        'Oh no!',
        `It looks like ${this.state.name} didn't 🍆 you back. Quick, to the batmobile!`,
        [
          {
            text: '😭',
            onPress: () => {
              this.setState({...data[index + 1]});
            }
          }
        ]
      )
    }
  };

  _handleDefeat = () => {
    Alert.alert(
      'G-A-M-E O-V-E-R',
      'You failed to find compatible tinder for your campfire. A bear ate you.',
      [
        {
          text: 'Wow, really?',
          onPress: () => {
            this.props.navigator.replace({ component: HomePage });
          }
        }
      ]
    )
  };

  _handleVictory = () => {
    Alert.alert(
      "It's a match!",
      '🔥🔥🔥 Now go make some magic and scare away that bear! 🔥🔥🔥',
      [
        {
          text: 'Play again?',
          onPress: () => {
            this.props.navigator.replace({ component: HomePage });
          }
        }
      ]
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hi, my name is {this.state.name}!
        </Text>
        <Image
          resizeMode='stretch'
          style={styles.image}
          source={this.state.photo}
        />
        <View style={styles.footer}>
          <Button
            onPress={this._handleDelete}
            title='🗑️'
          />
          <Button
            onPress={this._handleAccept}
            title='🍆'
          />
        </View>
      </View>
    );
  }
}
