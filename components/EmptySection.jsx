import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from './Icon';

const EmptySection = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.message}>So emprty :'( create new memories</Text>
        <LinearGradient
        colors={['#FC4A1A', '#F7B733']}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        >
          <TouchableOpacity style={styles.buttonContent}>
            <Icon library='AntDesign' name='plus' color='white' size={24} />
            <Text style={styles.buttonMessage}>Add new plan</Text>
          </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    message: {
        color: '#757575',
        fontSize: 13,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    buttonContent: {
        display: 'flex',
        flexDirection: 'row',
    },
    buttonMessage: {
        color: 'white',
        fontWeight: '500',
    }
})

export default EmptySection