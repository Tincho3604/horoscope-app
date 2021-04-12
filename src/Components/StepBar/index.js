import React, {useEffect, useState} from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import styles from './styles';
import Badge from '../../Components/Badge';
import {pagesName, BadgeEmpty, ashe} from '../../Constants/constants';
import {string} from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StepBar = ({titleStepBar, screen, style}) => {
  const [previousPage, setPreviousPage] = useState([
    {
      page: '',
    },
  ]);

  useEffect(() => {});
  console.log(screen);
  return (
    <View style={[styles.main, style]}>
      <View style={styles.stepBarStyle}>
        {ashe.map((item, index) => {
          return (
            <Badge
              key={index}
              style={
                index === 0
                  ? null
                  : screen === item.name || screen === item.name
                  ? null
                  : BadgeEmpty
              }
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
