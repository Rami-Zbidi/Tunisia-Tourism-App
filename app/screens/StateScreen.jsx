import React from 'react';
import { View, SafeAreaView, StatusBar, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ButtonGroup from '../../components/ButtonGroup';
import { ImageBackground } from 'react-native';
import Icon from '../../components/Icon';
import Card from '../../components/Card';
import EmptySection from '../../components/EmptySection';

import useStore from '../useStore';

const { width, height } = Dimensions.get('window');

const StateScreen = () => {
  const setScreen = useStore((state) => state.setScreen);
  const goBack = useStore((state) => state.goBack);

  const handleNavigation = (dest) => {
    setPrev();
    setScreen(dest);
  }

  const memories = [];

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" backgroundColor="black" translucent />
      <ScrollView>
      <ImageBackground
        source={require('../../assets/images/headerIMG.jpg')}
        style={styles.header}
        resizeMode="cover"
        >
          <View style={styles.overlay} />
          <TouchableOpacity style={styles.arrowBack} onPress={() => goBack()}>
            <Icon library="Ionicons" name="arrow-back" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu} onPress={() => setScreen('menu')}>
          <Icon library="Feather" name="menu" color="white" size={35} />
          </TouchableOpacity>

          <Text style={styles.title}>Tozeur</Text>
          <View style={styles.buttonGroup}>
            <ButtonGroup />
          </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat at nihil itaque aspernatur eos! Minus earum quidem corporis iste reiciendis beatae voluptatem. At magni aut delectus, animi in nihil vel.</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Memories</Text>
        {memories.length==0 ?
        <View style={styles.emptySection}><EmptySection /></View>:
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        >
          <Card
            title='Metabga'
            description='food'
          />
          <Card
            title='Metabga'
            description='food'
          />
          <Card
            title='Metabga'
            description='food'
          />
        </ScrollView>
        }
        
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Must Try Food</Text>
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        >
          <Card
            title='Metabga'
            description='food'
          />
          <Card
            title='Metabga'
            description='food'
          />
          <Card
            title='Metabga'
            description='food'
          />
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Destinations To Visit</Text>
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          overScrollMode="never"
        >
          <Card
            title='Metabga'
            description='food'
          />
          <Card
            title='Metabga'
            description='food'
          />
          <Card
            title='Metabga'
            description='food'
          />
        </ScrollView>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: height * 0.3,
    padding: 15,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    zIndex: 1,
    fontSize: 50,
    fontWeight: '600',
    color: 'white',
  },
  buttonGroup: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
  arrowBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 0,
    margin: 0,
  },
  menu: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 0,
    margin: 0,
  },
  body: {
    padding: 10,
  },
  description: {
    fontSize: 15,
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  emptySection: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  }
})

export default StateScreen;