import ForgetPass from "../(tabs)/ForgetPass";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LogIn = () => {
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const API_BASE = "http://192.168.1.41:8080/api/v1/auth";
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter both username and password");
      return;
    }
    // Check for admin credentials (from application.properties)
    if (username.trim() === "admin" && password.trim() === "adminpassword") {
      Alert.alert("Admin Login", "Welcome, Admin!");
      router.push("../(tabs)/AdminPage");
      return;
    }
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });
      if (response.ok) {
        const data = await response.json();
        Alert.alert("Success", "Login successful!");
        console.log("Login successful!", data);
        // Redirect merchant to Transaction page, pass username
        router.push({ pathname: "../(tabs)/Transaction", params: { username: username.trim() } });
      } else {
        const errorText = await response.text();
        Alert.alert("Login Failed", errorText || `Status ${response.status}`);
      }
    } catch (err) {
      Alert.alert("Error", "Could not connect to backend");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ThynkTech India</Text>
        </View>
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username Name"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <View style={styles.row}>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.rememberMeText}>{showPassword ? "Hide Password" : "Show Password"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowForgotModal(true)}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <ForgetPass visible={showForgotModal} onClose={() => setShowForgotModal(false)} />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.signUpContainer}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("../")}>
              <Text style={styles.signUpText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 85,
    backgroundColor: "#2576e0",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  loginCard: {
    marginTop: 80,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#2576e0",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    marginLeft: 5,
  },
  forgotPassword: {
    color: "#2576e0",
    fontSize: 12,
  },
  loginButton: {
    height: 45,
    backgroundColor: "#2576e0",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    fontSize: 12,
    color: "#000",
  },
  signUpText: {
    fontSize: 12,
    color: "#2576e0",
    fontWeight: "500",
  },
});

export default LogIn;
