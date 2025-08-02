import {
  View,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../constants/Colors";

export default function TopBar({ onSearch, onNotificationPress, onMenuPress }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={COLORS.gradient}
      style={styles.topBarWrapper}
    >
      <SafeAreaView>
        <View style={styles.topBar}>
          {/* Search Icon */}
          <TouchableOpacity onPress={onSearch}>
            <Ionicons name="search" size={24} color={COLORS.text} />
          </TouchableOpacity>

          {/* Logo */}
          <Image
            source={require("../../assets/images/splt-logo.png")}
            style={styles.logo}
          />

          {/* Notifications + Menu */}
          <View style={styles.rightIcons}>
            <TouchableOpacity onPress={onNotificationPress}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={COLORS.text}
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onMenuPress}>
              <Feather name="menu" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  topBarWrapper: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 20,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: "contain",
    marginLeft: 20,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
