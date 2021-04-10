import moment from 'moment';
import SweetAlert from 'react-native-sweet-alert';

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

export const pagesName = [
  {name: 'Gender'},
  {name: 'Form'},
  {name: 'HoroscopePage'},
];

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
    confirmButtonColor: '#000',
    otherButtonTitle: 'Cancel',
    otherButtonColor: '#dedede',
    style: status,
    cancellable: true,
  });
};

export const formatDateFunction = date => moment(date).format('L');

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
