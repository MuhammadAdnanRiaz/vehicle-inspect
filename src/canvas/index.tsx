/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

import {SketchCanvas} from '@MuhammadAdnanRiaz/react-native-sketch-canvas';
import {useNavigation, useRoute} from '@react-navigation/native';

const Canvas = () => {
  const route = useRoute();
  const navigation = useNavigation();
  //@ts-ignore
  let {file}: {file: string} = route.params;
  file = file.substr(7);
  console.log('file is ', file);
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <SketchCanvas
          style={{flex: 1}}
          strokeColor={'red'}
          strokeWidth={7}
          localSourceImage={{
            directory: '',
            //@ts-ignore
            filename: file,
            mode: 'AspectFit',
          }}
        />
      </View>
      <Button
        title="Save"
        //@ts-ignore
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Canvas;
