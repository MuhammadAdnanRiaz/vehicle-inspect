/* eslint-disable react-native/no-inline-styles */
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  StyleSheet,
  PanResponder,
  Animated,
  ImageBackground,
  Dimensions,
  Image,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const ReportDamage = () => {
  const route: any = useRoute();
  const navigator = useNavigation();
  console.log(route);
  const {url} = route.params;

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          //@ts-ignore
          x: pan.x._value,
          //@ts-ignore
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
        console.log(pan.x);
        console.log('released');
      },
    }),
  ).current;

  const [size, setSize] = React.useState<any>({width: 0, height: 0});

  React.useEffect(() => {
    Image.getSize(url, (w: number, h: number) => {
      const ratio = Math.min(windowWidth / w, windowHeight / h);
      setSize({width: ratio * w, height: ratio * h});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const panStyle = {
    transform: [{translateX: pan.x}, {translateY: pan.y}],
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: url}}
        style={[
          styles.image,
          {
            width: size.width,
            height: size.height,
            position: 'relative',
          },
        ]}>
        <Animated.View style={[panStyle]} {...panResponder.panHandlers}>
          <Icon
            name="alert-circle-outline"
            size={30}
            color="#900"
            onPress={() => navigator.navigate('Camera')}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  );
};
let styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'relative',
  },
  button: {},
});

export default ReportDamage;
