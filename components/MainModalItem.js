import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

export default function MainModalItem({onPress}) {
  return (
      <>
        <TouchableHighlight style={modalItemStyle.item} onPress={() => onPress()}>
          <Text style={modalItemStyle.text}>Hide Modal!</Text>
        </TouchableHighlight>
      </>
  )
}

const modalItemStyle = StyleSheet.create({
  item: {
    padding: 20,
  },
  text: {
    fontSize: 20
  }
});