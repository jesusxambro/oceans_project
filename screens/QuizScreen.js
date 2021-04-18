import React from 'react';
import { View, Text, StyleSheet } from 'reac-native';


const QuizScreen = props => {
    return (
    <View style = { styles.screen}>
        <Text>Quiz</Text>
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

export default QuizScreen;
