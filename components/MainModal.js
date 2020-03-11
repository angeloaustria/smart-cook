import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import MainModalItem from "./MainModalItem";

export default function MainModal(props) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.visible}>
            <View style={modalStyle.outerContainer}>
                <View style={modalStyle.innerContainer}>
                    <MainModalItem/>
                </View>
            </View>
        </Modal>
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