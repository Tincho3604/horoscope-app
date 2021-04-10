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
export const formatDateFunction = date => moment(date).format('L');
