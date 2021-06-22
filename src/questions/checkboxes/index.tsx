import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './style';
import ActionButtons from '../../model-buttons';

interface IProps {
  data: any;
}
export default function Checkboxes(props: IProps) {
  const {data} = props;
  const {choices, question}: {choices: string[]; question: string} = data;
  const [selected, setSelected] = React.useState<string[]>([]);
  return (
    <View style={styles.wrapper}>
      <Text>{question}</Text>
      {choices.map((item: string, index: number) => {
        return (
          <View style={styles.questionView} key={index.toString()}>
            <CheckBox
              value={selected.includes(item)}
              style={styles.container}
              onValueChange={() => {
                const found = selected.includes(item);
                if (found) {
                  const filtered = selected.filter((i: string) => i !== item);
                  setSelected(filtered);
                } else {
                  setSelected([...selected, item]);
                }
              }}
            />
            <Text>{item}</Text>
          </View>
        );
      })}
      <ActionButtons />
    </View>
  );
}
