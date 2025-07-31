import AppNavigator from "./navigation/AppNavigator";
import { useLoadFonts } from "./hooks/useLoadFonts";
export default function App() {
  const [fontsLoaded] = useLoadFonts();
  if (!fontsLoaded) return null;
  return <AppNavigator />;
}
