import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import MainModal from "./components/MainModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View style={styles.container} onTouchStart={() => {setModalVisible(!modalVisible);}}>
        <TouchableHighlight onPress={() => {setModalVisible(true);}}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <MainModal visible={modalVisible}/>
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
