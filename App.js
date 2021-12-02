/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ShareButton from './src/components/ShareButton';
import MainSection from './src/components/MainSection';

import images from './src/asset/images/imagesBase64';

// The attribute to setting the share function.
// const url = '/home/hkuit155/Trifa_RN_Project/ShareFunctionTestProject/src/asset/images/logo.jpg';
const title = 'Share via';
const message = 'Share today workout to';
const options = Platform.select({
  ios: {

  },
  default: {
    title:  'FBI Warming',
    message: 'Share today workout to',
    url: images.image1,
  },
});

const onShare = async () => {
    console.log("The button has been clicked.");
    try {
      const shareResponse = await Share.open(options)
    } catch (error) {
      alert(error.message);
    }
};

// The block to transfer image into base 64
const testBase64Func = async() => {
  ImgToBase64.getBase64String('file://src/asset/images/logo.jpg')
  .then(base64String => console.log(base64String))
  .catch(err =>  console.log(err));
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={isDarkMode? styles.darkerBackground : styles.lighterBackground}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={isDarkMode? styles.darkerBackground : styles.lighterBackground}>
        <Header />
        <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white,}}>
          <MainSection title="Test Share Button">
             <ShareButton onPress={testBase64Func} title="Share"/>
          </MainSection>
          <MainSection title="Learn More">
            Read the docs to discover what to do next:
          </MainSection>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    darkerBackground: {
        backgroundColor: Colors.darker
    },
    lighterBackground: {
        backgroundColor: Colors.lighter
    },
})

export default App;
