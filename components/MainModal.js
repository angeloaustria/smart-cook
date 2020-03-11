import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity, TouchableWithoutFeedback,
  View
} from 'react-native';
import MainModalItem from "./MainModalItem";
import * as ImagePicker from "expo-image-picker";

export default function MainModal({modalVisible, setModalVisible, setImage}) {

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setImage(pickerResult);
    setModalVisible(false);
    // console.log(pickerResult);
  };

  return (
      <>
        <Modal
            animationType="slide"
            transparent={true}
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
                <MainModalItem
                    text={'Open from Device'}
                    onPress={async () => {
                      await openImagePickerAsync()
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