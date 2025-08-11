import { View } from "react-native";

export default function Divider({ h = 1, color = "#2E2E2E", mt = 12, mb = 12 }) {
    return <View style={{ height: h, backgroundColor: color, marginTop: mt, marginBottom: mb }} />;
}
