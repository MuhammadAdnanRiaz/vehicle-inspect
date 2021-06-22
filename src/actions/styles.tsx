import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '../utils/dimenstions';

interface IProps {
  x?: any;
  y?: any;
  h?: any;
  w?: any;
}
export const styles = (props: IProps) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      transform: [
        {
          translateY: (props.y / 100) * props.h - 7,
        },
        {translateX: (props.x / 100) * props.w - 7},
      ],
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    icon: {
      backgroundColor: '#fff',
      borderRadius: 50,
    },
  });
