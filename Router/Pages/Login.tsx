import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Snackbar } from "react-native-paper"; // Importação do Snackbar
import { RootStackParamList } from "../Navigation/Navigation";

export default function Login() {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputValueFromEmail, setInputValueFromEmail] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false); // Estado para controlar a Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Mensagem da Snackbar

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePress = () => {
    if (inputValueFromEmail === "" && password === "") {
      setSnackbarMessage("Both fields are empty");
      setSnackbarVisible(true);
    } else if (password === "") {
      setSnackbarMessage("Password field is empty");
      setSnackbarVisible(true);
    } else if (inputValueFromEmail === "") {
      setSnackbarMessage("Email field is empty");
      setSnackbarVisible(true);
    } else {
      navigation.navigate("MyTabs");
    }
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_1280.png",
            }}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Luxeshop</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="person"
              size={24}
              color="#757575"
              style={styles.icon}
            />
            <TextInput
              style={styles.inputWithIcon}
              placeholder="Username, email or mobile number"
              placeholderTextColor="#757575"
              value={inputValueFromEmail}
              onChangeText={(text) => setInputValueFromEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock"
              size={24}
              color="#757575"
              style={styles.icon}
            />
            <TextInput
              style={styles.inputWithIcon}
              placeholder="Password"
              placeholderTextColor="#757575"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              <MaterialIcons
                name={isPasswordVisible ? "visibility" : "visibility-off"}
                size={24}
                color="#757575"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity onPress={handlePress} style={styles.touchableLogin}>
            <LinearGradient
              colors={["#ff8b26", "#f36137"]}
              style={styles.loginButton}
            >
              <Text style={styles.loginText}>Log in</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signUpText}>Sign up now</Text>
            </TouchableOpacity>
          </View>
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
  header: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  formContainer: {
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 40,
  },
  loginButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  footerText: {
    fontSize: 16,
    color: "#757575",
  },
  signUpText: {
    fontSize: 16,
    color: "#f36137",
    fontWeight: "bold",
  },
  touchableLogin: {
    borderRadius: 10, // Garante que o TouchableOpacity respeite o mesmo borderRadius do LinearGradient
    overflow: "hidden", // Impede que o gradiente ultrapasse o limite arredondado
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
    position: "relative",
  },
  inputWithIcon: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 40, // Espaço para o ícone à esquerda
    paddingRight: 40, // Espaço para o ícone à direita (olho)
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
  
  
});
