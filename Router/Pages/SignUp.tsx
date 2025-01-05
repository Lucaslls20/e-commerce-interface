import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../Navigation/Navigation";
import { Snackbar } from "react-native-paper";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("")
   const [snackbarVisible, setSnackbarVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setIsRePasswordVisible(!isRePasswordVisible);
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleRegister = () => {
  if(password === '' && rePassword === '' && username === '' && email == ''){
    setSnackbarMessage('Fill in all screens')
    setSnackbarVisible(true)
  }else if(username === ''){
    setSnackbarMessage('Fill the field of username')
    setSnackbarVisible(true)
  } else if(email === ''){
    setSnackbarMessage('Fill the field of email')
    setSnackbarVisible(true)
  } else if(rePassword === '') {
    setSnackbarMessage('Fill the field of re-password')
    setSnackbarVisible(true)
  } else{
    navigation.navigate('MyTabs')
  }
  };

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={24} color="#757575" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Username"
            placeholderTextColor="#757575"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="#757575" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Enter Email"
            placeholderTextColor="#757575"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="phone" size={24} color="#757575" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Phone Number"
            placeholderTextColor="#757575"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={24} color="#757575" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Password"
            placeholderTextColor="#757575"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <MaterialIcons
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={24}
              color="#757575"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={24} color="#757575" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Re-Password"
            placeholderTextColor="#757575"
            secureTextEntry={!isRePasswordVisible}
            value={rePassword}
            onChangeText={(text) => setRePassword(text)}
          />
          <TouchableOpacity onPress={toggleRePasswordVisibility} style={styles.eyeIcon}>
            <MaterialIcons
              name={isRePasswordVisible ? "visibility" : "visibility-off"}
              size={24}
              color="#757575"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleRegister} style={styles.touchableRegister}>
        <LinearGradient colors={["#FF7043", "#FF5722"]} style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000} // Duração da Snackbar
        action={{
          label: "OK",
          onPress: () => setSnackbarVisible(false),
        }}
      >
        {snackbarMessage}
      </Snackbar>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 30,
  },
  formContainer: {
    marginBottom: 20,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  inputWithIcon: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 40,
    color: "#333",
  },
  icon: {
    position: "absolute",
    left: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  touchableRegister: {
    borderRadius: 10,
    overflow: "hidden",
  },
  registerButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  registerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#757575",
  },
  loginText: {
    fontSize: 16,
    color: "#FF5722",
    fontWeight: "bold",
  },
});
