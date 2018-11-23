import React from 'react';
import { Text, View, TouchableOpacity ,Button, ToastAndroid, StyleSheet} from 'react-native';
import {  } from 'expo';



export default class StartQuiz extends React.Component {

  static navigationOptions = {
    title: 'Start Quiz',
  };
  
  
  render() {
      return (
        <View style={styles.loginButtonSection}>
        <Button 
        onPress= {( ) => {return;}}
                style={styles.loginButton}
                title="Start Quiz"
        />
   
   </View>);
  }
}

const styles = StyleSheet.create({
  loginButtonSection: {
     width: '100%',
     height: '50%',
     justifyContent: 'center',
     alignItems: 'center'
  }

,
  loginButton: {
    backgroundColor: 'blue',
    color: 'white'
  },
})