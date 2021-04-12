import React, {useEffect, useState} from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import styles from './styles';
import Badge from '../../Components/Badge';
import {pagesName, BadgeEmpty} from '../../Constants/constants';
import {string} from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StepBar = ({titleStepBar, screen, style}) => {
  const [previousPage, setPreviousPage] = useState([
    {
      page: '',
    },
  ]);

  useEffect(() => {});
  return (
    <View style={[styles.main, style]}>
      <View style={styles.stepBarStyle}>
        {pagesName.map((item, index) => {
          return <Badge key={index} style={BadgeEmpty} />;
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
