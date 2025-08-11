import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../constants/Colors";

export default function GradientButton({ title, onPress, style }) {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[style, styles.container]}>
            <LinearGradient
                colors={COLORS.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { borderRadius: 14, overflow: "hidden" },
    gradient: {
        paddingVertical: 14,
        alignItems: "center",
        borderRadius: 14,
    },
    text: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
