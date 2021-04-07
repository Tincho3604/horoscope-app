import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
import {titleButton} from '../../Constants/constants';
const dama = require('../../Assets/dama.png');

const Home = ({navigation}) => {
  const onPressHandler = () => navigation.navigate('GenderPage');

  return (
    <View style={styles.mainHomeContainer}>
      <Image source={dama} style={styles.damaImg} />
      <CustomButton
        titleCustomButton={titleButton}
        changeScreen={onPressHandler}
      />
    </View>
  );
};

export default Home;
