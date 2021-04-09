import React from 'react';
import {Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';
import styles from './styles';
import {string, func} from 'prop-types';

const CustomButton = ({titleCustomButton, style, onPressAction}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.customButtonStyle, style]}
        onPress={onPressAction}>
        <Text style={styles.button}>{titleCustomButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

CustomButton.propTypes = {
  titleCustomButton: string,
  style: ViewPropTypes.style,
  onPressAction: func,
};

export default CustomButton;
