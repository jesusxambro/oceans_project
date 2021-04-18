import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


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
        alignItems:'center'
    }
});

export default QuizScreen;
