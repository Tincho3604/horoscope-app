import React, {useState} from 'react';
import {View, TextInput, ViewPropTypes} from 'react-native';
import DateCustomPicker from '../../Components/DateCustomPicker';
import {formatDateFunction} from '../../Constants/constants';
import {func, string, bool} from 'prop-types';
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
Field.propTypes = {
  placeHolder: string,
  name: string,
  recover: func,
  editable: bool,
  onBlur: func,
  onChangeText: func,
  values: string,
};
export default Field;
