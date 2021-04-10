import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import DateCustomPicker from '../../Components/DateCustomPicker';
import {formatDateFunction} from '../../Constants/constants';
import SweetAlert from 'react-native-sweet-alert';
import styles from './styles';

const Field = ({
  placeHolder,
  name,
  styleInput,
  recover,
  editable,
  onBlur,
  onChangeText,
  values,
}) => {
  const [infoDateValue, setInfoDateValue] = useState('');

  const showDate = e => {
    const value = formatDateFunction(e);
    recover(value);
    setInfoDateValue(value);
  };

  return (
    <>
      <View style={styles.test}>
        <TextInput
          style={styleInput}
          onBlur={onBlur}
          onChangeText={onChangeText}
          placeholder={placeHolder}
          placeholderTextColor="#0e5090"
          maxLength={20}
          values={values}
          defaultValue={infoDateValue}
          name={name}
          editable={editable}
        />
        {name === 'Date' && <DateCustomPicker showData={showDate} />}
      </View>
    </>
  );
};

export default Field;
