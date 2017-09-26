import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../assets/styles/home.js';

import {
  View,
  Text,
  TouchableOpacity,

} from 'react-native';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate('Home')}
          style={styles.headerContainer}>
          <Icon
            name="home"
            size={30}
            color='#ffff'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

