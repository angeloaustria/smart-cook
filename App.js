import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View style={styles.container}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
          <View style={modalStyle.outerContainer}>
            <View style={modalStyle.innerContainer}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight onPress={() => {setModalVisible(true);}}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const modalStyle = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#32a852',
    height: '30%',
    width: '100%'
  }
});
