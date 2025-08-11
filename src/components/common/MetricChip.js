import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/Colors";

export default function MetricChip({ icon, label, value }) {
    return (
        <View style={styles.chip}>
            <View style={styles.row}>
                {!!icon && <Ionicons name={icon} size={14} color={COLORS.text} style={{ marginRight: 6 }} />}
                <Text style={styles.label}>{label}</Text>
            </View>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    chip: {
        backgroundColor: "#242424",
        borderWidth: 1,
        borderColor: "#2E2E2E",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 12,
        minWidth: 90,
    },
    row: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
    label: { color: COLORS.gray, fontSize: 12 },
    value: { color: COLORS.text, fontSize: 14, fontWeight: "700" },
});
