import {  Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/Colors";

export default function UploadBox({ onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.box}>
      <Ionicons name="image-outline" size={40} color={COLORS.gray} />
      <Text style={styles.text}>Upload Photo(s)</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 150,
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#3A3A3A",
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { marginTop: 8, color: "#B0B0B0" },
});
