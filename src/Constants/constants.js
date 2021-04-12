import moment from 'moment';
import SweetAlert from 'react-native-sweet-alert';
import AsyncStorage from '@react-native-async-storage/async-storage';

// OBJECTS
export const arraySignsInfo = [
  {name: 'Aquarium', ranges: ['20/1', '18/2']},
  {name: 'Pisces', ranges: ['19/2', '20/3']},
  {name: 'Aries', ranges: ['21/3', '19/4']},
  {name: 'Taurus', ranges: ['20/4', '21/5']},
  {name: 'Gemini', ranges: ['21/5', '20/6']},
  {name: 'Cancer', ranges: ['21/6', '22/7']},
  {name: 'Leo', ranges: ['23/7', '22/8']},
  {name: 'Virgo', ranges: ['23/8', '22/9']},
  {name: 'Libra', ranges: ['23/9', '22/10']},
  {name: 'Scorpio', ranges: ['23/10', '21/11']},
  {name: 'Sagittarius', ranges: ['22/11', '21/12']},
  {name: 'Capricorn', ranges: ['22/12', '19/1']},
];
export const imagesHoroscope = {
  Aquarium: require('../Assets/Aquarium.png'),
  Pisces: require('../Assets/Pisces.png'),
  Aries: require('../Assets/Aries.png'),
  Taurus: require('../Assets/Taurus.png'),
  Gemini: require('../Assets/Gemini.png'),
  Cancer: require('../Assets/Cancer.png'),
  Leo: require('../Assets/Leo.png'),
  Virgo: require('../Assets/Virgo.png'),
  Libra: require('../Assets/Libra.png'),
  Scorpio: require('../Assets/Scorpio.png'),
  Sagittarius: require('../Assets/Sagittarius.png'),
  Capricorn: require('../Assets/Capricorn.png'),
};

export const pathGenderImages = [
  {name: 'Masculino', path: require('../Assets/gen-1.png')},
  {name: 'Transgénero', path: require('../Assets/gen-2.png')},
  {name: 'Femenino', path: require('../Assets/gen-3.png')},
];

// STRINGS
export const titleButton = 'Ingresar';
export const BadgeEmpty = {
  backgroundColor: '#FFFFFF',
  width: 20,
  height: 20,
  borderRadius: 15,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: '#0e5090',
  zIndex: 1,
};

export const ashe = [{name: 'Gender'}, {name: 'Form'}, {name: 'HoroscopePage'}];

export const infoFields = [
  {
    name: 'Nombre',
    placeHolder: 'Nombre:',
    defaultValue: '',
    rules: {required: 'El campo nombre es obligatorio'},
    initialValues: {Nombre: ''},
    editable: true,
  },
  {
    name: 'Email',
    placeHolder: 'EMail:',
    defaultValue: '',
    rules: {required: 'El campo email es obligatorio'},
    initialValues: {Email: ''},
    editable: true,
  },
  {
    name: 'Date',
    placeHolder: 'Fecha de Nacimiento:',
    infoError: 'El campo fecha es obligatorio',
    defaultValue: '',
    rules: {required: false},
    initialValues: {Date: ''},
    editable: false,
  },
];

//FUNCTIONS

export const sweetAlert = (title, subtitle, status) => {
  SweetAlert.showAlertWithOptions({
    title: title,
    subTitle: subtitle,
    confirmButtonTitle: 'OK',
    confirmButtonColor: '#FC8979',
    otherButtonTitle: 'Cancel',
    otherButtonColor: '#FC8979',
    style: status,
    cancellable: true,
  });
};

export const formatDateFunction = date => moment(date).format('D/M/YYYY');

export const validateEmail = value => {
  return [
    [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i].every(pattern =>
      pattern.test(value),
    ) || false,
  ];
};

export const validateName = value => {
  return [[/^[A-Za-z\s]+$/].every(pattern => pattern.test(value)) || false];
};

export const validateFieldEmail = value => {
  if (value.Email) {
    if (!validateEmail(value.Email)[0]) {
      sweetAlert('Error!', 'Formato de email invalido', 'warning');
    } else {
      return true;
    }
  } else {
    sweetAlert('Error!', 'El email es requerido', 'warning');
  }
};

export const validateFieldName = value => {
  if (value.Nombre) {
    if (!validateName(value.Nombre)[0]) {
      sweetAlert(
        'Error!',
        'El formato del campo nombre es incorrecto',
        'warning',
      );
    } else {
      return true;
    }
  } else {
    sweetAlert('Error!', 'El campo nombre es obligatorio', 'warning');
  }
};

export const validateDate = value => {
  if (!value.Date) {
    sweetAlert('Error!', 'El campo fecha es obligatorio', 'warning');
  } else {
    return true;
  }
};

export const storeGender = async value => {
  try {
    sweetAlert(`¡Has seleccionado ${value}`, '', 'success');
    await AsyncStorage.setItem('gender', value);
  } catch (e) {
    console.log(e);
  }
};

export const storeDataUser = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userInfo', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getDataUser = () => {
  try {
    AsyncStorage.getItem('userInfo').then(res => {
      const data = JSON.parse(res);
      return data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const inRange = value => {
  let day = parseInt(value.split('/')[0]);
  let mounth = parseInt(value.split('/')[1]);

  const rango1 = arraySignsInfo.filter(
    item => parseInt(item.ranges[1].split('/')[1]) === mounth,
  );
  const rango2 = arraySignsInfo.filter(
    item => parseInt(item.ranges[0].split('/')[1]) === mounth,
  );
  const final = [rango1[0], rango2[0]];
  if (parseInt(final[0].ranges[1].split('/')[0]) > day) {
    return final[0].name;
  } else {
    return final[1].name;
  }
};

export const daysInMounth = (mon, year) => {
  return new Date(year, mon, 0).getDate();
};

export const getUserDayBirth = value => {
  return parseInt(value.split('/')[0]);
};
export const getUserMonBirth = value => {
  return parseInt(value.split('/')[1]);
};

export const getUserYearBirth = value => parseInt(value.split('/')[2]);

export const captureCurrentDate = value => {
  return parseInt(formatDateFunction(new Date()).split('/')[value]);
};

export const currentRemainingDays = (current, TotalDays) => {
  let diference = 0;
  if (current < TotalDays) {
    diference = TotalDays - current;
    return diference;
  } else {
    return false;
  }
};

export const calculateRemainingDays = (birthMon, birthDay, currentYear) => {
  let sum = 0;
  let daysIntermediateMonths = 0;
  let currentMon = captureCurrentDate(1);
  let currentDay = captureCurrentDate(0);

  if (currentMon > birthMon) {
    for (let i = birthMon + 1; i < currentMon; i++) {
      daysIntermediateMonths += daysInMounth(i, currentYear);
    }
    sum =
      365 -
      (daysInMounth(birthMon, currentYear) -
        birthDay +
        daysIntermediateMonths +
        currentDay);
  } else if (currentMon < birthMon) {
    for (let i = currentMon + 1; i < birthMon; i++) {
      daysIntermediateMonths += daysInMounth(i, currentYear);
    }
    sum =
      daysInMounth(currentMon, currentYear) -
      currentDay +
      daysIntermediateMonths +
      birthDay;
  } else if (currentMon === birthMon) {
    if (currentDay < birthDay) {
      sum = birthDay - currentDay;
    } else if (currentDay > birthDay) {
      sum = 365 - (currentDay - birthDay);
    }
  }
  return sum;
};
