import React from 'react';
import useStore from '../useStore';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../../components/Icon';
import MenuItem from '../../components/MenuItem';

const MenuScreen = () => {
  const goBack = useStore((state) => state.goBack);
  
  return (
    <View>
      <TouchableOpacity style={styles.arrowBack} onPress={goBack}>
        <Icon library="Ionicons" name="arrow-back" color="black" size={30} />
      </TouchableOpacity>
      <View style={{height: 40,}} />
      <View style={styles.container}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  arrowBack: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
})

export default MenuScreen;
