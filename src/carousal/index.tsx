import React, {useRef, useState, useCallback} from 'react';
import {Dimensions, FlatList} from 'react-native';
import Slide from '../slide';
import Controls from '../carousal-controls';
const {width: windowWidth} = Dimensions.get('window');

const slideList = [
  {
    id: 1,
    image: require('../assets/van-front.jpg'),
  },
  {
    id: 2,
    image: require('../assets/van-side.jpg'),
  },
  {
    id: 3,
    image: require('../assets/van-side-revert.png'),
  },
  {
    id: 4,
    image: require('../assets/van-back.jpg'),
  },
];
interface IProps {
  images: any[];
}
export default function Carousal(props: IProps) {
  const {images} = props;
  const [index, setIndex] = useState(0);
  const ref = useRef<any>();
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const i = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(i);

    const distance = Math.abs(roundIndex - i);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = distance > 0.4;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const prev = () => {
    if (index === 0) {
      return;
    }
    ref.current?.scrollToIndex({index: index - 1});
    setIndex(index - 1);
  };

  const next = () => {
    if (index === slideList.length - 1) {
      return;
    }
    ref.current?.scrollToIndex({index: index + 1});
    setIndex(index + 1);
  };

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(e => e.id, []),
    getItemLayout: useCallback(
      (_, i) => ({
        index: i,
        length: windowWidth,
        offset: i * windowWidth,
      }),
      [],
    ),
  };
  return (
    <>
      <FlatList
        ref={ref}
        data={images}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        renderItem={({item}) => {
          return <Slide data={item} />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Controls
        url={images[index].file}
        prev={prev}
        next={next}
        index={index}
        length={slideList.length - 1}
      />
    </>
  );
}
