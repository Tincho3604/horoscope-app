import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import StepBar from '../../Components/StepBar';
import Form from '../../Components/Form';

const FormData = ({navigation, route}) => {
  return (
    <View style={styles.FormDataContainer}>
      <View style={styles.FormPrimaryContainer}>
        <StepBar titleStepBar={'Ingresa tus datos'} />
      </View>
      <View style={styles.FormSecondaryContainer}>
        <Form navigation={navigation} />
      </View>
      <View />
    </View>
  );
};

export default FormData;
