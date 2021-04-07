import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  customButtonStyle: {
    backgroundColor: '#fe6d1a',
    width: 220,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 60,
  },
  button: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
