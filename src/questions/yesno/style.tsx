import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  questionView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#131313',
    alignItems: 'center', // To center the checked circle…
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 10,
  },
  checkedCircle: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: '#131313',
  },
});
