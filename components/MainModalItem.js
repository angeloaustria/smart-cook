import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

export default function MainModalItem({text, onPress}) {
  return (
      <>
        <TouchableHighlight style={modalItemStyle.item} onPress={() => onPress()}>
          <Text style={modalItemStyle.text}>{text}</Text>
        </TouchableHighlight>
      </>
  )
}

const modalItemStyle = StyleSheet.create({
  item: {
    padding: 15,
    width: '100%'
  },
  text: {
    fontSize: 20
  }
});