import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import COLORS from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import ProfileStack from "./ProfileStack";
import ShopScreen from "../screens/ShopScreen";
import TrackScreen from "../screens/TrackScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: COLORS.background,
          height: 90,
          borderTopColor: COLORS.borderColor,
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.stepInactive,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let IconComponent = Ionicons;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Workouts":
              iconName = "barbell-outline";
              break;
            case "Track":
              iconName = "play-outline";
              break;
            case "Shop":
              iconName = "shopping-bag";
              IconComponent = Feather;
              break;
            case "Profile":
              iconName = "person-outline";
              break;
            default:
              iconName = "ellipse";
          }

          return <IconComponent name={iconName} size={26} color={color} />;
        },
        tabBarLabelStyle: {
          fontFamily: "Roboto_400Regular",
          fontSize: 14,
          marginBottom: 8,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Track"
        component={TrackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
