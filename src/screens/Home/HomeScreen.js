import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import TopBar from "../../components/common/TopBar";
import COLORS from "../../constants/Colors";

const topUsers = [
  {
    id: "1",
    name: "Sammyx",
    avatar: require("../../assets/images/home/user1.png"),
  },
  {
    id: "2",
    name: "xovio",
    avatar: require("../../assets/images/home/user2.png"),
  },
  {
    id: "3",
    name: "Honen",
    avatar: require("../../assets/images/home/user3.png"),
  },
  {
    id: "4",
    name: "xovio",
    avatar: require("../../assets/images/home/user4.png"),
  },
  {
    id: "5",
    name: "ChrisMu..",
    avatar: require("../../assets/images/home/user5.png"),
  },
];

export default function HomeScreen() {
  return (
    <>
      <TopBar
        onSearch={() => console.log("Search")}
        onNotificationPress={() => console.log("Notifications")}
        onMenuPress={() => console.log("Menu")}
      />
      <ScrollView style={styles.container}>
        {/* Top users */}
        <FlatList
          data={topUsers}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.userList}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.username}>{item.name}</Text>
            </View>
          )}
        />

        {/* Workout card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={topUsers[2].avatar} style={styles.avatarSmall} />
              <Text style={styles.cardUsername}>Honen</Text>
            </View>
            <TouchableOpacity style={styles.viewBtn}>
              <Text style={styles.viewBtnText}>View Workout</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/home/workout-placeholder.png")}
            style={styles.workoutImage}
          />

          <View style={styles.statsRow}>
            <Text style={styles.statText}>Time: 2:04</Text>
            <Text style={styles.statText}>Sets: 12</Text>
            <Text style={styles.statText}>Volume: 200</Text>
            <Text style={styles.statText}>PR: 1</Text>
          </View>

          <Text style={styles.comment}>
            Liked by sammyx and 60 others.\nNothing will top this feeling!!!
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },

  userList: {
    marginBottom: 20,
  },
  userItem: {
    alignItems: "center",
    marginRight: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 4,
  },
  username: {
    color: COLORS.white,
    fontSize: 12,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  cardUsername: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  viewBtn: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  viewBtnText: {
    color: COLORS.white,
    fontSize: 12,
  },
  workoutImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  statText: {
    color: COLORS.text,
    fontSize: 12,
  },
  comment: {
    color: COLORS.text,
    marginTop: 8,
    fontSize: 12,
  },
});
