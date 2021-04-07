import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const HeaderBackButton = ({navigation, test, props}) => {
  console.log('test', test);
  return (
    <TouchableOpacity style={styles.customButtonHeader}>
      <IconAntDesign name="arrowleft" size={20} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

export default HeaderBackButton;