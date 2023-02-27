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
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);


const artPic = require('./assets/art.png');
const milePic = require('./assets/mile.png');
const pierPic = require('./assets/pier.png');
const waterPic = require('./assets/water.png');
const willisPic = require('./assets/willis.png');

function handleButtonPress(url) {
    WebBrowser.openBrowserAsync(url);
    };
  

function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={artPic} style={styles.Image}/>
      <Button info
        onPress={() => handleButtonPress("https://www.artic.edu/ ")}
        title={'More Information'}
        style = {styles.button}
      >More Information</Button>
    </View>
  );
}

function MileScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={milePic} style={styles.Image}/>
      <Button info
        onPress={() => handleButtonPress("https://www.themagnificentmile.com/")}
        title={'More Information'}
        style = {styles.button}
        >More Information</Button>

    </View>
    
  );
}

function PierScreen({navigation}) {
  var url = "https://navypier.org/";
  return (
    <View style={styles.mainContainer}>
      <Image source={pierPic} style={styles.Image}/>
      <Button info
        onPress={() => handleButtonPress("https://navypier.org/")}
        title={'More Information'}
        style = {styles.button}
        >More Information</Button>
    </View>
  );
}

function WaterScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={waterPic} style={styles.Image}/>
      <Button info
        onPress={() => handleButtonPress("https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html")}
        title={'More Information'}
        style = {styles.button}
        >More Information</Button>
    </View>
  );
}

function WillisScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={willisPic} style={styles.Image}/>
      <Button info style = {styles.button}
        onPress={() => handleButtonPress("https://www.willistower.com/")}
        title={'More Information'}
        >More Information</Button>
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
        flex: 1,
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
    height: 480,
    width: 320
  },
  button: {
    margin: 10,
    padding: 10,
    //backgroundColor: '#00afff',
    //color: '#ffffff',
  },
});

