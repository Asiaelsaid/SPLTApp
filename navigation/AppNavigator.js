import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import {
  AgeScreen,
  DOBScreen,
  GenderScreen,
  HeightScreen,
  WeightScreen,
} from "../screens/ProfileDetailsScreen";
import CongratulationsScreen from "../screens/CongratulationsScreen";
import CreateGoalScreen from "../screens/CreateGoalScreen";
import AddGoalDetailsScreen from "../screens/AddGoalDetailsScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Weight" component={WeightScreen} />
        <Stack.Screen name="Height" component={HeightScreen} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="DOB" component={DOBScreen} />
        <Stack.Screen
          name="Congratulations"
          component={CongratulationsScreen}
        />
        <Stack.Screen name="CreateGoal" component={CreateGoalScreen} />
        <Stack.Screen name="AddGoalDetails" component={AddGoalDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
