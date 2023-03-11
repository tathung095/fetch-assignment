import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  flex: { flexDirection: 'row' },
  center: { flex: 1, height: 70, alignItems: 'center', alignSelf: 'center' },
  dot: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 12,
    right: 38,
    borderRadius: 50,
    width: 10,
    height: 10,
    zIndex: 3,
  },
  image: { width: 32, height: 32, marginTop: 10 },
});
