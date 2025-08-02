import AppNavigator from "./navigation/AppNavigator";
import { useLoadFonts } from "./hooks/useLoadFonts";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  const [fontsLoaded] = useLoadFonts();
  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      {/* <AuthProvider> */}
      <AppNavigator />
      {/* </AuthProvider> */}
    </SafeAreaProvider>
  );
}
