import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>
      <Image source={require("../assets/Ellipse2.png")} style={styles.femen} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>This is a drawer</Text>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={toggleModal}>
              <Text>Hide Drawer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:
      Platform.OS === "android" && StatusBar.currentHeight
        ? StatusBar.currentHeight + 50
        : 50,
  },
  appIconContainer: {
    backgroundColor: "#ffffff",
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  femen: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
