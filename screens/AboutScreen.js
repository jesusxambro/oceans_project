import React from 'react';
import { View, Text, StyleSheet } from 'reac-native';


const AboutScreen = props => {
    return (
    <View style = { styles.screen}>
        <Text>About Us</Text>
    </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        aligntItems:'center'
    }
});

export default AboutScreen;
