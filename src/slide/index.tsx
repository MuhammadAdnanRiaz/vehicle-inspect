/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
import Actions from '../actions';

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    backgroundColor: '#f00',
    position: 'relative',
  },
  slideImageResize: {
    resizeMode: 'contain',
  },
});

interface IProps {
  data: any;
}
interface ISize {
  height: number;
  width: number;
}
const Slide = memo(function Slide({data}: IProps) {
  const [size, setSize] = React.useState<ISize>({width: 0, height: 0});

  React.useEffect(() => {
    Image.getSize(data.file, (w: number, h: number) => {
      const ratio = Math.min(windowWidth / w, windowHeight / h);
      setSize({width: ratio * w, height: ratio * h});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.slide}>
      <ImageBackground
        source={{uri: data.file}}
        style={[
          styles.slideImage,
          {
            width: size.width,
            height: size.height,
            position: 'relative',
          },
        ]}>
        <Actions data={data.actions} size={size} />
      </ImageBackground>
    </View>
  );
});

export default Slide;
