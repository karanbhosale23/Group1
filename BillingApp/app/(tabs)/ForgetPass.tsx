import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ForgetPassProps {
  visible: boolean;
  onClose: () => void;
}

const ForgetPass: React.FC<ForgetPassProps> = ({ visible, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSendResetLink = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    Alert.alert("Success", `Reset link sent to ${email}`);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <SafeAreaView style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.text}>Provide the email address linked with your account to reset your password.</Text>
          <Text style={styles.emailLabel}>Email</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.closeButton} onPress={handleSendResetLink}>
            <Text style={styles.closeButtonText}>SEND RESET LINK</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.backToLoginBtn}>
            <Text style={styles.backToLog}>Back to log in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 24,
    alignItems: "center",
    width: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  emailLabel: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontWeight: "600",
  },
  emailInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#2576e0",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#2576e0",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  backToLoginBtn: {
    marginTop: 5,
  },
  backToLog: {
    color: "#2576e0",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default ForgetPass;