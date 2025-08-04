
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

const PostHeader = ({ userName, avatar }) => {
    return (
        <LinearGradient
            colors={theme.colors.postCardGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.header}
        >
            <View style={styles.left}>
                <Image source={avatar} style={styles.avatar} />
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <View style={styles.right}>
                <TouchableOpacity style={styles.workoutBtn}>
                    <Text style={styles.workoutText}>View Workout</Text>
                </TouchableOpacity>
                <MaterialIcons name="more-vert" size={23} color="white" style={{ marginLeft: 10 }} />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: { flexDirection: 'row', alignItems: 'center', flex: 1 },
    right: { flexDirection: 'row', alignItems: 'center' },
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
    userName: { ...theme.textStyles.subtitle, color: 'white', fontWeight: 'bold', marginBottom: 0, fontSize: 18 },
    workoutBtn: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 14,
        paddingVertical: 11,
        borderRadius: 10,
        shadowColor: theme.colors.text,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    workoutText: { fontSize: 14, color: 'white', fontWeight: 'bold' },
});

export default PostHeader;
