import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';

const MenuItem = () => {
  return (
    <View>
        <TouchableOpacity style={styles.item}>
            <Text style={styles.text}>Example</Text>
            <View style={styles.horizontalLine} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {

    },
    text: {
      fontSize: 20,
      fontWeight: '500',
    },
    horizontalLine: {
      height: 1,
      width: '100%',
      backgroundColor: '#ccc',
      marginVertical: 10,
    },
})

export default MenuItem;
