import { View, StatusBar } from "react-native";
import useStore from "./useStore";

import LoadingScreen from "./screens/LoadingScreen";
import MapScreen from "./screens/MapScreen";
import MenuScreen from './screens/MenuScreen';
import StateScreen from "./screens/StateScreen";

const Index = () => {
  const screen = useStore((state) => state.screen);
  return (
    <View style={{ paddingTop: StatusBar.currentHeight }}>
      <StatusBar barStyle="default" backgroundColor="black" translucent />
      {screen === 'loading' && <LoadingScreen />}
      {screen === 'map' && <MapScreen />}
      {screen === 'menu' && <MenuScreen />}
      {screen === 'state' && <StateScreen />}
    </View>
  );
};

export default Index;
