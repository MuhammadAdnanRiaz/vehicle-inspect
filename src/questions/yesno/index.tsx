import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from './style';
import ActionButtons from '../../model-buttons';

interface IProps {
  data: any;
}
export default function YesNo(props: IProps) {
  const {data} = props;
  const {question}: {question: string} = data;
  const [selected, setSelected] = React.useState<string>('');
  return (
    <View style={styles.wrapper}>
      <Text>{question}</Text>
      <View style={styles.questionView}>
        <TouchableHighlight
          style={styles.container}
          onPress={() => setSelected('yes')}>
          {selected === 'yes' ? (
            <View style={styles.checkedCircle} />
          ) : (
            <View />
          )}
        </TouchableHighlight>
        <Text>Yes</Text>
      </View>
      <View style={styles.questionView}>
        <TouchableHighlight
          style={styles.container}
          onPress={() => setSelected('no')}>
          {selected === 'no' ? <View style={styles.checkedCircle} /> : <View />}
        </TouchableHighlight>
        <Text>No</Text>
      </View>
      <ActionButtons />
    </View>
  );
}
