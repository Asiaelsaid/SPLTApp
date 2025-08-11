import { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/common/TopBar";
import COLORS from "../../constants/Colors";
import SurfaceCard from "../../components/common/SurfaceCard";
import MetricChip from "../../components/common/MetricChip";
import Divider from "../../components/common/Divider";
import UploadBox from "../../components/common/UploadBox";
import AppTextArea from "../../components/common/AppTextArea";
import GradientButton from "../../components/common/GradientButton";


export default function WorkoutDetailsScreen() {
    const navigation = useNavigation();
    const [desc, setDesc] = useState("");

    return (
        <View style={styles.container}>
            <TopBar
                variant="backWithText"
                onBackPress={() => navigation.goBack()}
                rightText="Later"
                onRightTextPress={() => navigation.goBack()}
            />

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {/* Title */}
                <Text style={styles.sectionTitle}>Workout Details</Text>

                {/* Card */}
                <SurfaceCard style={{ marginTop: 8 }}>
                    {/* Metrics Row */}
                    <View style={styles.metricsRow}>
                        <MetricChip icon="time-outline" label="Duration" value="1h : 0s" />
                        <MetricChip icon="barbell-outline" label="Volume" value="20kg" />
                        <MetricChip icon="refresh-outline" label="Sets" value="12" />
                        <MetricChip icon="trophy-outline" label="PR" value="5" />
                    </View>

                    <Divider />

                    {/* Upload */}
                    <Text style={styles.blockLabel}>Upload Photo(s)</Text>
                    <UploadBox onPress={() => { /* open picker */ }} />

                    <Divider />

                    {/* Text Area */}
                    <AppTextArea
                        value={desc}
                        onChangeText={setDesc}
                        placeholder="Describe your workout session"
                    />
                </SurfaceCard>

                {/* Post Button */}
                <GradientButton title="Post" onPress={() => { /* submit */ }} style={{ marginTop: 16 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.background },
    content: { padding: 16, paddingBottom: 40 },
    sectionTitle: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: "700",
        marginLeft: 4,
        marginTop: 8,
        marginBottom: 2,
    },
    metricsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
    },
    blockLabel: {
        color: COLORS.gray,
        fontSize: 12,
        marginBottom: 8,
    },
});
