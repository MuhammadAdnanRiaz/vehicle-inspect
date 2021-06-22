import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from './style';
import ModelButtons from '../../model-buttons';

interface IProps {
  data: any;
}
export default function Radio(props: IProps) {
  const {data} = props;
  const {choices, question}: {choices: string[]; question: string} = data;
  const [selected, setSelected] = React.useState<string>('');
  return (
    <View style={styles.wrapper}>
      <Text>{question}</Text>
      {choices.map((item: string, index: number) => {
        return (
          <View style={styles.questionView} key={index.toString()}>
            <TouchableHighlight
              style={styles.container}
              onPress={() => setSelected(item)}>
              {item === selected ? (
                <View style={styles.checkedCircle} />
              ) : (
                <View />
              )}
            </TouchableHighlight>
            <Text>{item}</Text>
          </View>
        );
      })}
      <ModelButtons />
    </View>
  );
}
