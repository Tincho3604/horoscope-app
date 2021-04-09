import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import DateCustomPicker from '../../Components/DateCustomPicker';
import {formatDateFunction} from '../../Constants/constants';
import {useController} from 'react-hook-form';
import styles from './styles';

const Field = ({
  control,
  errors,
  placeHolder,
  name,
  defaultValue,
  infoError,
  rules,
  styleInput,
  recover,
  getValues,
  editable,
}) => {
  const [infoDateValue, setInfoDateValue] = useState('');

  const showDate = e => {
    const valor = formatDateFunction(e);
    recover(valor);
    setInfoDateValue(valor);
  };
  return (
    <>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <View style={styles.test}>
                <TextInput
                  style={styleInput}
                  onBlur={onBlur}
                  placeholder={placeHolder}
                  placeholderTextColor="#0e5090"
                  onChangeText={info => onChange(info)}
                  maxLength={20}
                  value={name === 'Date' ? (value = infoDateValue) : value}
                  editable={editable}
                />
                {name === 'Date' && <DateCustomPicker showData={showDate} />}
              </View>
            );
          }}
          name={name}
          rules={rules}
          defaultValue={defaultValue}
        />
        {errors?.name && <Text>{infoError}</Text>}
      </View>
    </>
  );
};

export default Field;
