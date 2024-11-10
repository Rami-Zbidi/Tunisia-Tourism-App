import React from 'react';
import useStore from '../useStore';
import { View, Text, Button } from 'react-native';

const LoadingScreen = () => {
  const setState = useStore((state) => state.setScreen);

  return (
    <View>
        <Text>Loading</Text>
        <Button title='click me' onPress={() => setState('map')} />
    </View>
  )
}

export default LoadingScreen;
