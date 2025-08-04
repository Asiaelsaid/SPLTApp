import { View, ScrollView, StyleSheet } from 'react-native';
import TopBar from "../../components/common/TopBar";
import TopUsersList from "../../components/home/TopUsersList"
import COLORS from '../../constants/Colors';
import PostCard from '../../components/home/WorkoutPostCard/PostCard';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar
        onSearch={() => console.log("Search")}
        onNotificationPress={() => console.log("Notifications")}
        onMenuPress={() => console.log("Menu")}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TopUsersList />
        <PostCard />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
});
