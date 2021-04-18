import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const WatchScreen = props => {
    return (
    <View style = { styles.screen}>
        <Text>Watch</Text>
    </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default WatchScreen;
