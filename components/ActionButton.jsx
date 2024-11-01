import React from 'react';
import { View, TouchableOpacity, StyleSheet, } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from './Icon';

const ActionButton = ({colors, library, iconName, iconColor, action}) => {
  return (
    <View>
        <LinearGradient
        colors={colors}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        >
          <TouchableOpacity>
            <Icon library={library} name={iconName} color={iconColor} size={24} />
          </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 35.2,
        height: 33,
        borderRadius: 10,
    }
})

export default ActionButton;
