import React, {useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
import {infoFields, validationFormAlert} from '../../Constants/constants';
import {Formik} from 'formik';
import Field from '../../Components/Field';
import SweetAlert from 'react-native-sweet-alert';

const Form = ({navigation}) => {
  const [dateInfo, setDateInfo] = useState('');
  const onPressHandler = () => navigation.navigate('Gender');
  const recover = e => setDateInfo(e);
  const formikRef = useRef();
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <Formik
          onSubmit={values => {
            const objInfo = {...values, dateInfo};
            SweetAlert.showAlertWithOptions({
              title: 'Form complete succesfully!',
              subTitle: '',
              confirmButtonTitle: 'OK',
              confirmButtonColor: '#000',
              otherButtonTitle: 'Cancel',
              otherButtonColor: '#dedede',
              style: 'success',
              cancellable: true,
            });
          }}
          initialValues={{Email: ''}}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
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
          )}
        </Formik>
      </ScrollView>
    </>
  );
};

export default Form;
