import React from 'react';
import { Text, View, ListView,StyleSheet,ScrollView} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {  } from 'expo';

import store from './store.js'

export default class Quiz extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

 
  componentDidMount () {
    store.getQuizData()
    .then((responseJson) => {
  
      this.setState({
        data: responseJson.results
      })
     
  
    })
    .catch((error) =>{
      console.error(error);
    });
  
  }

  static navigationOptions = {
    title: 'Trivia Quiz',
  };
  
  onPress =(index) => {
  store.radioButtonArrayUI.forEach( element => {
    console.log(element)
  })
  }
  
  render() {
      return (
        <ScrollView>
       

        {this.state.data.map( (d,i) => {
           
           store.radioButtonArrayUI = d.incorrect_answers.map( d2 => {return {value: d2, label : d2}});
           
           store.radioButtonArrayUI.push({value: d.correct_answer , label : d.correct_answer})
          
           store.quizData.push( d.incorrect_answers.map( d2 => {return {value: d2, label : d2}}),{value: d.correct_answer , label : d.correct_answer} )

           console.log("starting here    ",store.quizData)
              return (
                <View  style={styles.container} key={i}>
                <Text style={{ fontSize: 18 }}>
              {i+1 + ')'}{d.question}
                </Text>
                {store.radioButtonArrayUI ? <RadioGroup radioButtons={store.radioButtonArrayUI} onPress={() => {this.onPress(i)}} /> : null }
                
                </View>
              )

        } )}
    
       

   </ScrollView>
   );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});