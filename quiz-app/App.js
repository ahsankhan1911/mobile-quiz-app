import {createStackNavigator, createAppContainer } from 'react-navigation';
import StartQuiz from './components/StartQuiz.js'
import FaceDetect from './components/FaceDetect.js'
import Quiz from './components/Quiz/'


const Navigation = createStackNavigator({
  Quiz : {screen : Quiz},
  StartQuiz: {screen: StartQuiz},
  Home: {screen: FaceDetect},

});



export default createAppContainer( Navigation);