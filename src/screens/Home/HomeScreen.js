import { View, ScrollView, StyleSheet } from 'react-native';
import TopBar from "../../components/common/TopBar";
import TopUsersList from "../../components/home/TopUsersList"
import COLORS from '../../constants/Colors';
import PostCard from '../../components/home/WorkoutPostCard/PostCard';
import WorkoutDetailsCard from '../../components/home/WorkoutDetailsCard/WorkoutDetailsCard';
import { useState } from 'react';
import DrawerMenu from '../../components/common/DrawerMenu';


const HomeScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>

      <View style={styles.container}>
        <TopBar
          onSearch={() => console.log("Search")}
          onNotificationPress={() => console.log("Notifications")}
          onMenuPress={() => setMenuVisible(true)}
        />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TopUsersList />
          <PostCard />
          <WorkoutDetailsCard />
        </ScrollView>
      </View>
      {menuVisible && <DrawerMenu onClose={() => setMenuVisible(false)} />}
    </>
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
