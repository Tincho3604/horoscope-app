import moment from 'moment';

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
    infoError: 'El campo nombre es obligatorio',
    defaultValue: '',
    rules: {required: true},
    editable: true,
  },
  {
    name: 'Email',
    placeHolder: 'EMail:',
    infoError: 'El campo email es obligatorio',
    defaultValue: '',
    rules: {required: true},
    editable: true,
  },
  {
    name: 'Date',
    placeHolder: 'Fecha de Nacimiento:',
    infoError: 'El campo fecha es obligatorio',
    defaultValue: '',
    rules: {required: false},
    editable: false,
  },
];

//FUNCTIONS
export const formatDateFunction = date => moment(date).format('L');
