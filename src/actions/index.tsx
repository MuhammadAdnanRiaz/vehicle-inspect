import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import Model from '../model';

interface IProps {
  data: any[];
  size: any;
}
export default function Actions(props: IProps) {
  const {data, size} = props;
  const [visible, setVisible] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(false);

  return (
    <View>
      {data.map((item: any, index: number) => {
        return (
          <View
            key={index.toString()}
            style={
              styles({x: item.x, y: item.y, h: size.height, w: size.width})
                .container
            }>
            <Pressable
              key={index.toString()}
              onPress={async () => {
                await Promise.all([setSelectedItem(item), setVisible(true)]);
              }}>
              <Icon
                name="add-circle-outline"
                size={15}
                color="#000"
                style={styles({}).icon}
              />
            </Pressable>
          </View>
        );
      })}
      {visible && (
        <Model
          visible={visible}
          setVisible={() => setVisible(!visible)}
          data={selectedItem}
        />
      )}
    </View>
  );
}
