import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import MainModal from "./components/MainModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const [image, setImage] = useState(null);

  let setPic = (img) => {
    setImage(img);
    console.log("setting pic...")
  };

  return (
      <>
        <TouchableOpacity style={styles.container} onPress={() => {
          !image && setModalVisible(!modalVisible);
        }}>
          {image && <Image source={{uri: image.uri}} style={{width: '100%', height: '50%'}}/>}
          {image && <Text>Analyze Image</Text>}
          {image && <Text onPress={() => setModalVisible(!modalVisible)}>Open</Text>}
        </TouchableOpacity>
        <MainModal modalVisible={modalVisible} setModalVisible={setModalVisible} setImage={setPic}/>
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