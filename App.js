import React, {useState, useEffect} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
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
        <LinearGradient colors={['#32a852', '#d13e60']} style={styles.header}>
          <StatusBar barStyle="light-content" />
          <Text>SmartCook</Text>
        </LinearGradient>
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
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});