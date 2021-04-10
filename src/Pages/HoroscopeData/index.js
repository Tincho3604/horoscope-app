import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {calculateRemainingDays, inRange} from '../../Constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import styles from './styles';

const HoroscopeData = () => {
  const [isLoading, setIsLoading] = useState('');
  const [remainingDays, setRemainingDays] = useState(0);
  const [userData, setUserData] = useState({});
  const [horoscopeInfo, setHoroscopeInfo] = useState();
  useEffect(() => {
    const getDataUser = () => {
      try {
        AsyncStorage.getItem('userInfo').then(res => {
          const info = JSON.parse(res);
          console.log('asd', info.Nombre);
          setUserData(info.Nombre);
          const currentUserDate = inRange(info.Date);
          return fetch(
            `http://horoscope-api.herokuapp.com/horoscope/today/${currentUserDate}`,
          )
            .then(response => response.json())
            .then(responseJson => {
              setHoroscopeInfo(responseJson);
            })
            .catch(error => {
              console.log(error);
            });
        });
      } catch (e) {
        console.log(e);
      }
    };
    getDataUser();
  }, []);

  return (
    <View>
      <Text>{`Hola ${userData}`}</Text>
      <Text>Tu horoscopo del dia dice que:</Text>
      <Text>{horoscopeInfo?.horoscope}</Text>
      <Text>{`Faltan ${remainingDays} para tu cumpleaños`}</Text>
    </View>
  );
};
export default HoroscopeData;
