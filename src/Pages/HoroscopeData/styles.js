import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainHoroscopeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
  },
  mainHoroscopetext: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  horoscopeImg: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eachI: {
    width: '100%',
    height: 70,
  },
  textContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 20,
  },
  remainingDaystext: {
    fontSize: 18,
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerText: {
    fontSize: 40,
    textTransform: 'uppercase',
    color: '#558DF6',
  },
  spinnerElement: {
    marginVertical: 50,
  },
  errorMessage: {
    fontSize: 20,
    textAlign: 'center',
  },
});
