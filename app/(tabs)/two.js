import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {Alert, Modal, Pressable, ImageBackground, StyleSheet, Dimensions} from 'react-native';

import { Text, View } from '../../components/Themed';

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width;

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);

 return (
    <View style={styles.container}>
      <ImageBackground 
      style = {{flex:1}}
      source={require('../../assets/images/map.jpg')}
      resizeMode="cover"
      styles= {styles.img}>


<View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView} >
            <Text style={styles.modalText}> <Text style={{fontWeight: "bold", color: 'rgba(2, 25 , 34)'}}>Rivendell</Text> (Sindarin: Imladris) 
            {"\n"} The Last Homely House East of the Sea
            {"\n\n"} Founded by the Elf-Lord Elrond as a stronghold during the war of the Elves and Sauron during the second age.
            {"\n\n"} Rivendell serves as an important location during the Lord of the Rings: 
            here, Frodo is healed after getting stabbed by the Nazgûl, and the council meets to establish the Fellowship.
            {"\n\n"} The Fellowship sets out from Rivendell on December 25, T.A. 3018.
            
            {"\n\n"} You have walked <Text style={{fontWeight: "bold", color: 'rgba(2, 25 , 34)'}}>737 km</Text>.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Rivendell</Text>
      </Pressable>
    </View>

        <View style={styles.main}>
        {/* empty for moving the modal */}
        </View>

    </ImageBackground>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );


  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: { 
    flex:1,
    justifyContent: 'center', 
  }, 
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textColor: "rgba(2, 25 , 34)",
    alignSelf: 'center'
  },
  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  subtitle: {
    fontSize: 15,
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    color:"#eee",
    paddingTop:5,
    alignSelf: 'center'
  },
  separator: {
    height: 1,
    width: '80%',
  },

  //modal things
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#5FB6B0',
  },
  buttonClose: {
    backgroundColor: '#4C869F',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'rgba(2, 25 , 34)'
  },
});
