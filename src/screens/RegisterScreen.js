import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../constants/theme";
import COLORS from "../constants/Colors";
import SwitchButton from "../components/common/SwitchButton";
import InputField from "../components/common/InputField";
import OrComponent from "../components/common/OrComponent";
import SocialIcon from "../components/common/SocialIcons";
import PrivacyCheckbox from "../components/common/PrivacyCheckbox";

export default function RegisterScreen({ navigation }) {
  const [isClient, setIsClient] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");

  const handleRegister = () => {
    let valid = true;

    if (userName.trim() === "") {
      setUserNameError("User Name is required");
      valid = false;
    } else if (userName.trim().toLowerCase() === "taken") {
      setUserNameError(
        "This user name is already taken, choose another user name"
      );
      valid = false;
    } else {
      setUserNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!accepted) {
      setCheckboxError("You must accept our terms");
      valid = false;
    } else {
      setCheckboxError("");
    }

    if (valid) {
      console.log("Register successful");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[theme.textStyles.subtitle, styles.welcome]}>
          Hey there,
        </Text>
        <Text style={theme.textStyles.title}>Create an Account</Text>

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
          icon="person-outline"
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <InputField
          icon="person-outline"
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <InputField
          icon="person-outline"
          placeholder="User Name"
          value={userName}
          onChangeText={setUserName}
        />
        {userNameError ? (
          <View style={styles.errorContainer}>
            <Ionicons
              name="alert-circle"
              size={16}
              color={COLORS.error}
              style={styles.errorIcon}
            />
            <Text style={styles.errorText}>{userNameError}</Text>
          </View>
        ) : null}

        <InputField
          icon="mail-outline"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? (
          <View style={styles.errorContainer}>
            <Ionicons
              name="alert-circle"
              size={16}
              color={COLORS.error}
              style={styles.errorIcon}
            />
            <Text style={styles.errorText}>{emailError}</Text>
          </View>
        ) : null}

        <InputField
          icon="lock-closed-outline"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          showPassword={showPassword}
          togglePassword={() => setShowPassword(!showPassword)}
        />
        {passwordError ? (
          <View style={styles.errorContainer}>
            <Ionicons
              name="alert-circle"
              size={16}
              color={COLORS.error}
              style={styles.errorIcon}
            />
            <Text style={styles.errorText}>{passwordError}</Text>
          </View>
        ) : null}

        <PrivacyCheckbox
          isChecked={accepted}
          onToggle={() => setAccepted(!accepted)}
        />
        {checkboxError ? (
          <View style={styles.errorContainer}>
            <Ionicons
              name="alert-circle"
              size={16}
              color={COLORS.error}
              style={styles.errorIcon}
            />
            <Text style={styles.errorText}>{checkboxError}</Text>
          </View>
        ) : null}

        {/* <TouchableOpacity style={styles.registerButton} onPress={handleRegister}> */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Gender")}
        >
          <LinearGradient
            colors={COLORS.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.registerText}>Register</Text>
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

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={[theme.textStyles.body, styles.footerText]}>
            Already have an account?{" "}
            <Text style={{ color: COLORS.subPrimary }}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background, 
  },
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
  registerButton: {
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
  registerText: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  footerText: {
    textAlign: "center",
    marginTop: 10,
    color: COLORS.text,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 5,
  },
  errorIcon: {
    marginRight: 6,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    flex: 1,
  },
});
