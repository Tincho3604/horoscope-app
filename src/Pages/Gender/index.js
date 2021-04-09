import React from 'react';
import {View, ViewPropTypes} from 'react-native';
import styles from './styles';
import StepBar from '../../Components/StepBar';
import ImageGender from '../../Components/ImageGender';
import CustomButton from '../../Components/CustomButton';
import {string} from 'prop-types';

const Gender = ({style, route, navigation}) => {
  const onPressHandler = () => navigation.navigate('Form');
  return (
    <View style={[styles.mainGenderPage, style]}>
      <View style={styles.primaryContainer}>
        <StepBar screen={route.name} titleStepBar={'Ingresa tu género'} />
      </View>
      <View style={styles.secondaryContainer}>
        <ImageGender />
      </View>
      <View style={styles.buttonGenderPage}>
        <CustomButton
          titleCustomButton={'Ingresar'}
          onPressAction={onPressHandler}
        />
      </View>
    </View>
  );
};

Gender.proptype = {
  style: ViewPropTypes.style,
};

export default Gender;
