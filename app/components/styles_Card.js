import { StyleSheet, Dimensions } from 'react-native';

const deviceWitdh = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  flex: { flexDirection: 'row', alignItems: 'center' },
  bgImage: {
    position: 'absolute',
    width: deviceWitdh,
    height: deviceHeight,
  },
  imageCard: { position: 'absolute', height: 377, width: '100%' },
  textWrapper: {
    // zIndex: 3,
    marginTop: 106,
    marginHorizontal: 24,
    alignContent: 'center',
  },
  nextIcon: { height: 20, width: 20, marginTop: 4 },
  product: {
    marginTop: 23,
    marginBottom: 15,
    backgroundColor: '#E2E2EA',
    borderRadius: 2.5,
    width: '100%',
    height: 5,
  },
  lineOff: { backgroundColor: '#0062FF', borderRadius: 2.5, width: '66%', height: 5 },
  updateText: { textAlign: 'center', paddingTop: 20, fontSize: 15 },
  text: {
    paddingTop: 8,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'left',
    color: '#B5B5BE',
    fontFamily: 'Hellix-Regular',
  },
  textCardh1: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'left',
    color: '#B5B5BE',
  },
  textBold: {
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    color: 'white',
    fontFamily: 'Hellix-Regular',
  },
  textAmount: {
    lineHeight: 56,
    paddingVertical: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 50,
    color: '#171725',
    fontFamily: 'Hellix-Regular',
  },
  textCardh2: {
    fontSize: 16,
    marginTop: 14,
    lineHeight: 24,
    color: '#92929D',
  },
  textCardh3: {
    lineHeight: 24,
    color: '#92929D',
  },
  textTitle: {
    color: '#171725',
    fontSize: 20,
    fontFamily: 'Hellix-Regular',
    fontWeight: '400',
    lineHeight: 24,
    paddingBottom: 26,
  },
  textLink: {
    lineHeight: 46,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    color: '#0062FF',
    fontFamily: 'Hellix-Regular',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  textCoin: {
    fontWeight: '500',
    fontSize: 17,
    color: '#0062FF',
    fontFamily: 'Hellix-Bold',
  },
  buttonContainer: {
    fontFamily: 'Hellix-Regular',
    justifyContent: 'center',
    backgroundColor: '#171725',
    marginTop: 6,
    height: 60,
    width: '100%',
    borderRadius: 4,
  },
  cardWrapper: {
    marginTop: 40,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    border: '1px solid #FAFAFB',
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
