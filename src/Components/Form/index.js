import React, {useState, useRef, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {func} from 'prop-types';
import {
  infoFields,
  validateFieldEmail,
  sweetAlert,
  validateFieldName,
  validateDate,
  storeDataUser,
} from '../../Constants/constants';
import {Formik} from 'formik';
import Field from '../../Components/Field';

const Form = ({navigation}) => {
  const [dateInfo, setDateInfo] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('gender').then(res => {
      setGender(res);
    });
  }, []);

  const onPressHandler = () => navigation.navigate('Gender');
  const recover = e => setDateInfo(e);
  const formikRef = useRef();
  return (
    <>
      <ScrollView style={styles.scrollStyle}>
        <Formik
          onSubmit={values => {
            const objInfo = {...values, Date: dateInfo, Gender: gender};
            if (
              validateFieldEmail(values) &&
              validateFieldName(values) &&
              validateDate(objInfo)
            ) {
              storeDataUser(objInfo);
              navigation.navigate('Horoscope');
              sweetAlert('¡Formulario completado!', '', 'success');
            }
          }}
          initialValues={{Email: ''}}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => {
            return (
              <View style={styles.formStyle}>
                {infoFields?.map((info, index) => {
                  return (
                    <Field
                      placeHolder={info?.placeHolder}
                      formikRef={formikRef}
                      name={info?.name}
                      onChangeText={handleChange(info.name)}
                      onBlur={handleBlur(info.name)}
                      values={values}
                      key={index}
                      styleInput={styles.formInput}
                      recover={recover}
                      setFieldValue={setFieldValue}
                      editable={info.editable}
                    />
                  );
                })}
                <View style={styles.formButtons}>
                  <CustomButton
                    titleCustomButton={'Volver'}
                    style={styles.backButton}
                    onPressAction={onPressHandler}
                  />
                  <CustomButton
                    titleCustomButton={'Continuar'}
                    onPressAction={handleSubmit}
                    style={styles.followButton}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </>
  );
};
Form.Form = {
  navigation: func,
};
export default Form;
