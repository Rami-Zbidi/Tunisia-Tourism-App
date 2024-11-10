import React from 'react';
import useStore from '../useStore';
import { View, Text, Button } from 'react-native';

const MapScreen = () => {
    const setScreen = useStore((state) => state.setScreen);

  return (
    <View>
        <Text>Map</Text>
        <Button title='state' onPress={() => setScreen('state')} />
        <Button title='menu' onPress={() => setScreen('menu')} />
    </View>
  )
}

export default MapScreen;
