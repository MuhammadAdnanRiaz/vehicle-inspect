import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Components from './imports';

interface IProps {
  visible: boolean;
  setVisible: () => void;
  data: any;
}
const QuestionModal = (props: IProps) => {
  const {visible, setVisible, data} = props;
  const obj = JSON.parse(JSON.stringify(data));
  const {
    json: {datatype},
  }: {json: {datatype: string}} = obj;
  console.log(obj);
  const Component = Components[datatype];
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={setVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <React.Suspense fallback={<View />}>
            <Component data={obj.json} />
          </React.Suspense>
          <Icon
            name="close-circle-outline"
            style={styles.closeIcon}
            size={30}
            color={'#000'}
            onPress={setVisible}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});

export default QuestionModal;
