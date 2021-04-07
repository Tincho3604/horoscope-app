import React from 'react';
import {Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';
import styles from './styles';
import {string, func} from 'prop-types';

const CustomButton = ({titleCustomButton, style, changeScreen}) => {
  return (
    <View>
      <TouchableOpacity
        style={[style, styles.customButtonStyle]}
        onPress={changeScreen}>
        <Text style={styles.button}>{titleCustomButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

CustomButton.propTypes = {
  titleCustomButton: string,
  style: ViewPropTypes.style,
  changeScreen: func,
};

export default CustomButton;
