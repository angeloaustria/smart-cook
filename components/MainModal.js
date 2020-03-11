import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity, TouchableWithoutFeedback,
  View
} from 'react-native';
import MainModalItem from "./MainModalItem";

export default function MainModal({modalVisible, setModalVisible}) {
  return (
      <>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}>
          <TouchableOpacity
              style={modalStyle.outerContainer}
              activeOpacity={1}
              onPressOut={() => {
                setModalVisible(false)
              }}
          >
            <TouchableWithoutFeedback>
              <View style={modalStyle.innerContainer}>
                <MainModalItem onPress={() => {
                  console.log('hello');
                }}/>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </>
  )
}

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
    height: '33%',
    width: '100%'
  }
});