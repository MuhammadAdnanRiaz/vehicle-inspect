import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  prev: any;
  next: any;
  index: number;
  length: number;
  url: string;
}
export default function CarousalControls(props: IProps) {
  const {prev, next, index, length, url} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back-circle-outline"
        size={30}
        color={index === 0 ? '#e0e0e0' : '#757575'}
        onPress={prev}
      />
      <Icon
        name="alert-circle-outline"
        size={30}
        color="#900"
        onPress={() =>
          navigation.navigate('Damage', {
            screen: 'ReportDamage',
            params: {
              url: url,
            },
          })
        }
      />
      <Icon
        name="arrow-forward-circle-outline"
        size={30}
        color={index === length ? '#e0e0e0' : '#757575'}
        onPress={next}
      />
    </View>
  );
}
