import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../constants/theme";
import COLORS from "../constants/Colors";
import SwitchButton from "../components/common/SwitchButton";
import InputField from "../components/common/InputField";
import OrComponent from "../components/common/OrComponent";
import SocialIcon from "../components/common/SocialIcons";

export default function LoginScreen({ navigation }) {
  const [isClient, setIsClient] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[theme.textStyles.subtitle, styles.welcome]}>
        Hey there,
      </Text>
      <Text style={theme.textStyles.title}>Welcome Back</Text>

      <View style={styles.switchContainer}>
        <SwitchButton
          label="Client"
          active={isClient}
          onPress={() => setIsClient(true)}
        />
        <SwitchButton
          label="Trainer"
          active={!isClient}
          onPress={() => setIsClient(false)}
        />
      </View>

      <InputField
        icon="mail-outline"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <InputField
        icon="lock-closed-outline"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        showPassword={showPassword}
        togglePassword={() => setShowPassword(!showPassword)}
      />

      <TouchableOpacity>
        <View style={styles.forgotContainer}>
          <Text style={[theme.textStyles.small, styles.forgot]}>
            Forgot your password?
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => console.log("Login")}
      >
        <LinearGradient
          colors={COLORS.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Ionicons
            name="log-in"
            size={24}
            color={COLORS.text}
            style={styles.iconSpacing}
          />
          <Text style={styles.loginText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <OrComponent />

      <View style={styles.socialRow}>
        <SocialIcon
          imageSource={require("../assets/images/google.png")}
          backgroundColor={COLORS.text}
        />
        <SocialIcon
          imageSource={require("../assets/images/facebook.png")}
          backgroundColor={COLORS.text}
        />
        <SocialIcon
          imageSource={require("../assets/images/Apple.png")}
          backgroundColor={COLORS.text}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={[theme.textStyles.body, styles.footerText]}>
          Don't have an account?{" "}
          <Text style={{ color: COLORS.subPrimary }}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    justifyContent: "center",
  },
  welcome: {
    textAlign: "center",
    marginBottom: 5,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  iconSpacing: {
    marginRight: 8,
  },
  forgotContainer: {
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.text,
    marginBottom: 55,
  },
  forgot: {
    textAlign: "center",
    paddingBottom: 2,
  },

  loginButton: {
    marginBottom: 20,
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
  },
  loginText: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  socialIcon: {
    width: 53,
    height: 53,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  footerText: {
    textAlign: "center",
    marginTop: 10,
    color: COLORS.text,
  },
});
