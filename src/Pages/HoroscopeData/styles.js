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
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 23,
  },
  textIntro: {
    fontSize: 20,
    paddingBottom: 40,
    fontWeight: '600',
    color: '#0e5090',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  horoscopeImg: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageElement: {
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
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 5,
    color: '#0e5090',
  },
  remainingDaystext: {
    marginTop: 30,
    fontSize: 18,
    color: '#0e5090',
    textTransform: 'uppercase',
    fontWeight: 'bold',
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
