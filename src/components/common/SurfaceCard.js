import { View, StyleSheet } from "react-native";
import COLORS from "../../constants/Colors";

export default function SurfaceCard({ children, style }) {
    return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1A1A1A",
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: COLORS.borderColor,
    },
});
