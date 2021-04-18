import React from 'react';
import { View, Text, StyleSheet } from 'reac-native';


const LearnScreen = props => {
    return (
    <View style = { styles.screen}>
        <Text>Facts</Text>
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

export default LearnScreen;
