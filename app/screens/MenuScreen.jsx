import React from 'react';
import useStore from '../useStore';
import { View, SafeAreaView, StatusBar, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from '../../components/Icon';


const MenuScreen = () => {
  const goBack = useStore((state) => state.goBack);

  return (
    <View>
      <TouchableOpacity style={styles.arrowBack} onPress={goBack}>
            <Icon library="Ionicons" name="arrow-back" color="black" size={30} />
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  arrowBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 0,
    margin: 0,
  },
})

export default MenuScreen;
