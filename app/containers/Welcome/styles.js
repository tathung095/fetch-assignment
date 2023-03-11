import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: { width: '100%', backgroundColor: '#171725', height: 460, position: 'absolute', top: 0 },
  backButton: { position: 'absolute', top: 40, left: 24 },
  backIcon: { height: 40, width: 40 },
  textWrapper: {
    marginTop: 106,
    marginHorizontal: 24,
    alignContent: 'center',
  },
  text: {
    paddingTop: 8,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'left',
    color: '#B5B5BE',
    fontFamily: 'Hellix-Regular',
  },
  textBold: {
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    color: 'white',
    fontFamily: 'Hellix-Regular',
  },
  bottomView: {
    height: 100,
  },
});
