import React from 'react';
import {View, ViewPropTypes} from 'react-native';
import styles from './styles';

const Badge = ({style}) => {
  return <View style={[styles.defaultBadgeStyle, style]} />;
};

Badge.propTypes = {
  style: ViewPropTypes.style,
};
export default Badge;
