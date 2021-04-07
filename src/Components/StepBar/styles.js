import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250,
    marginVertical: 18,
  },
  line: {
    backgroundColor: '#0e5090',
    width: '100%',
    height: 1,
    position: 'absolute',
  },
  stepText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#0e5090',
    fontSize: 23,
    opacity: 0.6,
  },
});
