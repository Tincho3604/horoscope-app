import React from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import styles from './styles';
import Badge from '../../Components/Badge';
import {test, BadgeEmpty} from '../../Constants/constants';
import {string} from 'prop-types';

const StepBar = ({titleStepBar, screen, style}) => {
  return (
    <View style={[styles.main, style]}>
      <View style={styles.stepBarStyle}>
        {test.map((item, index) => {
          return (
            <Badge
              key={index}
              style={screen === item.name ? null : BadgeEmpty}
            />
          );
        })}
        <View style={styles.line} />
      </View>
      <Text style={styles.stepText}>{titleStepBar}</Text>
    </View>
  );
};
StepBar.propTypes = {
  titleStepBar: string,
  screen: string,
  style: ViewPropTypes.style,
};
export default StepBar;
