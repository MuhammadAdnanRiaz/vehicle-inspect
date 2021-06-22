import React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import {styles} from './style';
import ActionButtons from '../../model-buttons';

interface IProps {
  data: any;
}
export default function Checkboxes(props: IProps) {
  const {data} = props;
  const {question}: {choices: string[]; question: string} = data;
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.wrapper}>
      <Text>{question}</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
      <ActionButtons />
    </View>
  );
}
