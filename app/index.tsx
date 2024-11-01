import { View, StatusBar } from "react-native";
import StatePage from "./screens/StatePage";

export default function Index() {
  return (
    <View style={{paddingTop: StatusBar.currentHeight}}>
      <StatusBar barStyle="default" backgroundColor="black" translucent />
      <StatePage />
    </View>
  );
}
