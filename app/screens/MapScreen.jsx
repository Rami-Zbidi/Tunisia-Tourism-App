import React from 'react';
import useStore from '../useStore';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from '../../components/Icon';
import ActionButton from '../../components/ActionButton';
import Map from '../../components/Map';
import { SearchBar } from '@rneui/themed';

const { width, height } = Dimensions.get('window');

const MapScreen = () => {
    const setScreen = useStore((state) => state.setScreen);
  return (
    <View>
        <View style={styles.header}>
        <SearchBar placeholder='search...'
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderWidth: 0,
                shadowOpacity: 0,
                elevation: 0,
              }}
              inputContainerStyle={{
                backgroundColor: '#ffffff', 
                borderRadius: 15,
                width: width*0.6,
                height: height*0.05,
              }}
              inputStyle={{
                color: 'black',
                fontSize: 16,
              }}
            />
            <View style={styles.headerRight}>
                <ActionButton
                    colors={['#756FF0', '#A38DF7', '#D4AEFF']}
                    library="AntDesign"
                    iconName="staro"
                    iconColor="white"
                />
                <TouchableOpacity style={styles.menu} onPress={() => setScreen('menu')}>
                <Icon library="Feather" name="menu" color="black" size={35} />
                </TouchableOpacity>
            </View>
        </View>
        <Map />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    }
})

export default MapScreen;
