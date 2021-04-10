import React, {useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
import {
  infoFields,
  validateFieldEmail,
  sweetAlert,
  validateFieldName,
  validateDate,
} from '../../Constants/constants';
import {Formik} from 'formik';
import Field from '../../Components/Field';

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
            const objInfo = {...values, Date: dateInfo};
            console.log(objInfo);
            if (
              validateFieldEmail(values) &&
              validateFieldName(values) &&
              validateDate(objInfo)
            ) {
              sweetAlert('Form complete succesfully!', '', 'success');
            }
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


/*

           
            */
