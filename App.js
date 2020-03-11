import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import MainModal from "./components/MainModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
      <>
        <TouchableOpacity style={styles.container} onPress={() => {
          setModalVisible(!modalVisible);
        }}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <MainModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});