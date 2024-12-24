import React, { useState } from "react";
import { Button, StyleSheet, View, Modal } from "react-native";
import Profile from "./Profile";
import walkerData from "./walkerData.json";

const Request = ({arrived}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Request a Walk");
  const [waitText, setWaitText] = useState("");
  const [acceptedWalker, setAcceptedWalker] = useState(false);
  const [rejectedWalker, setRejectedWalker] = useState(false);
  const [completedWalk, setCompletedWalk] = useState("Accepted walker, waiting for them to arrive...")

  const handlePress = () => {
    setButtonText("Walk Requested");
    setWaitText("Waiting for Safe Walker to accept request...");
    setTimeout(() => {
      setModalVisible(true);
    }, 3000); // Set to 3000 for demonstration
  };

  const completedWalkUpdate = () => {
    setTimeout(() => {
        setCompletedWalk("Walker has arrived, walk in progress")
        setTimeout(() => {
            setCompletedWalk("Walk Completed!")
        }, 6000)
    }, 3000)
  };

  return (
    <View style={styles.container}>
      {acceptedWalker ? (
        <h2>{completedWalk}</h2>
      ) : (
        <Button title={buttonText} onPress={handlePress} />
      )}
      <Modal visible={modalVisible} animationType="slide">
        <Profile
          closeModal={() => setModalVisible(false)}
          acceptWalker={() => [setAcceptedWalker(true), completedWalkUpdate()]}
          rejectWalker={() => [setRejectedWalker(true), handlePress()]}
        />
      </Modal>
      {acceptedWalker ? null : <p>{waitText}</p>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "500px",
    alignItems: "center",
  },
});

export default Request;
