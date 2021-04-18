import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import AboutScreen from '../screens/AboutScreen';
import LearnScreen from '../screens/LearnScreen';
import QuizScreen from '../screens/QuizScreen';
import WatchScreen from '../screens/WatchScreen';
import HomeScreen from '../screens/HomeScreen';

const MainNavigator = createStackNavigator({
    Categories: HomeScreen,
    AboutScreen,
    LearnScreen,
    QuizScreen,
    WatchScreen,
    HomeScreen
});

export default createAppContainer(MainNavigator);