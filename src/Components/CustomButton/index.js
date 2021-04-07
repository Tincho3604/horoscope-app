import React from 'react';
import {Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';
import styles from './styles';
import {string, func} from 'prop-types';

const CustomButton = ({title, style, changeScreen}) => {
  return (
    <View>
      <TouchableOpacity
        style={[style, styles.customButtonStyle]}
        onPress={changeScreen}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

CustomButton.propTypes = {
  title: string,
  style: ViewPropTypes.style,
  changeScreen: func,
};

export default CustomButton;
