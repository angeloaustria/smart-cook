import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

export default function MainModalItem(props) {
    return (
        <TouchableHighlight style={modalItemStyle.item}>
            <Text style={modalItemStyle.text}>Hide Modal!</Text>
        </TouchableHighlight>
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