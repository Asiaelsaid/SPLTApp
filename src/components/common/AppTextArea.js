import { TextInput, StyleSheet } from "react-native";
import COLORS from "../../constants/Colors";

export default function AppTextArea({ value, onChangeText, placeholder }) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={COLORS.placeholdertColor}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: COLORS.inputBackground,
        color: COLORS.text,
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        minHeight: 110,
    },
});
