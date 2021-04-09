import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
import {infoFields} from '../../Constants/constants';
import Field from '../../Components/Field';
const Form = ({navigation}) => {
  const [dateInfo, setDateInfo] = useState('');
  const onPressHandler = () => navigation.navigate('Gender');
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    const dataForm = {...data, Date: dateInfo};
    console.log(dataForm);
    reset();
  };
  const recover = e => {
    setDateInfo(e);
  };
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={styles.formStyle}>
          {infoFields?.map((info, index) => {
            return (
              <Field
                control={control}
                errors={errors}
                placeHolder={info?.placeHolder}
                name={info?.name}
                rules={info?.rules}
                infoError={info?.infoError}
                defaultValue={info?.defaultValue}
                key={index}
                styleInput={styles.formInput}
                recover={recover}
                getValues={getValues}
                editable={info?.editable}
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
              onPressAction={handleSubmit(onSubmit)}
              style={styles.followButton}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Form;
