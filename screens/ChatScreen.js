//ChatScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";

const ChatScreen = ({ visible, onClose }) => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  // Function to send a message
  const sendMessage = () => {
    if (message.trim() !== "") {
      setConversation([...conversation, { text: message, sender: "user" }]);
      setMessage("");
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.chatContainer}>
          <View style={styles.conversation}>
            {conversation.map((msg, index) => (
              <View
                key={index}
                style={
                  msg.sender === "user"
                    ? styles.userMessage
                    : styles.coachMessage
                }
              >
                <Text>{msg.text}</Text>
              </View>
            ))}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message..."
              style={styles.input}
              multiline
            />
            <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  chatContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    maxHeight: "80%",
  },
  conversation: {
    maxHeight: 300,
    padding: 10,
    overflow: "auto",
  },
  userMessage: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginBottom: 10,
    alignSelf: "flex-end",
    borderRadius: 10,
  },
  coachMessage: {
    backgroundColor: "#81c784",
    padding: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "white",
  },
  closeButton: {
    alignSelf: "center",
    marginTop: 10,
  },
  closeButtonText: {
    color: "blue",
  },
});

export default ChatScreen;
