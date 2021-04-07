import React from 'react';
import {View, ViewPropTypes} from 'react-native';
import styles from './styles';
//import {string, func} from 'prop-types';

const Badge = ({style}) => {
  return <View style={[styles.defaultBadgeStyle, style]} />;
};

export default Badge;
