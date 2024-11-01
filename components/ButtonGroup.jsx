import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActionButton from './ActionButton';

const ButtonGroup = () => {
  return (
    <View style={styles.buttonGroup}>
        <ActionButton
            colors={['#FC4A1A', '#F7B733']}
            library="AntDesign"
            iconName="plus"
            iconColor="white"
        />
        <ActionButton
            colors={['#F7971E', '#FFD200']}
            library="SimpleLineIcons"
            iconName="notebook"
            iconColor="white"
        />
        <ActionButton
            colors={['#FF4B2B', '#FF416C']}
            library="Feather"
            iconName="phone"
            iconColor="white"
        />
        <ActionButton
            colors={['#756FF0', '#A38DF7', '#D4AEFF']}
            library="AntDesign"
            iconName="staro"
            iconColor="white"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        
    }
})

export default ButtonGroup;