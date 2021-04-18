import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground} from 'react-native';

const bgImage = {uri: "https://trello-attachments.s3.amazonaws.com/607b0f73efae1c86fac8ddcf/607b13170e8b12787f1f53c9/500998eb3dee19439650e1a647ce596f/OceanPic5.jpg"}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.imagebg}>
      </ImageBackground>
      <View style={styles.middle}>
        <Button title="Home" />
        <Button title="Learn" />
        <Button title="Watch" />
        <Button title="Quiz" />
        <Button title="About" />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    // backgroundColor: "darkturquoise",
    // padding: 20,
    // margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "deepskyblue",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,

    justifyContent: "space-between",
    backgroundColor: "dodgerblue",
    opacity: .75,
    
  },
  imagebg: {
    flex:1,
    resizeMode:'cover',
    justifyContent: "center",
  },
});