import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
