import { createStackNavigator, createAppContainer} from 'react-navigation-stack';

import AboutScreen from '../screens/AboutScreen';
import LearnScreen from '../screens/LearnScreen';
import QuizScreen from '../screens/QuizScreen';
import WatchScreen from '../screens/WatchScreen';
import App from '../App';

const MenuNavigator = createStackNavigator({
    Categories: AboutScreen,
    LearnScreen,
    QuizScreen,
    WatchScreen,
    App
});

export default createAppContainer(MenuNavigator);