import 'react-native-gesture-handler';
import * as React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const artPic = require('./assets/art.png');
const milePic = require('./assets/mile.png');
const pierPic = require('./assets/pier.png');
const waterPic = require('./assets/water.png');
const willisPic = require('./assets/willis.png');

function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={artPic}/>
    </View>
  );
}

function MileScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={milePic}/>
    </View>
  );
}

function PierScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={pierPic}/>
    </View>
  );
}

function WaterScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={waterPic}/>
    </View>
  );
}

function WillisScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={willisPic}/>
    </View>
  );
}

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Art institue of Chicago" component={HomeScreen} />
        <Drawer.Screen name="Magnificent Mile" component={MileScreen} />
        <Drawer.Screen name="Water Tower" component={WaterScreen} />
        <Drawer.Screen name="Navy Pier" component={PierScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    padding: 10,
    textAlign: 'center',
  },
  TextInput: {
    fontSize: 16,
    fontColor: '#c4c3d0',
    padding: 4,
    paddingTop: 40,
    textAlign: 'center',
  },
  Text: {
    fontColor: '#c4c3d0',
    fontSize: 20,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  Image: {
    fontColor: '#c4c3d0',
    fontSize: 20,
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
