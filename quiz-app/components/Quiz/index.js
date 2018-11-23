import React from 'react';
import { Text, View, ListView,StyleSheet,ScrollView} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {  } from 'expo';

var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];

export default class Quiz extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      radioBtnData : [{value : 'test' , label:"test"}]
    };
  }


  handledata = () => {
  
}
  componentDidMount () {
    fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    .then((responseJson) => {
   var radioButtonArray = []
      this.setState({
        data: responseJson.results
      })
     this.state.data.forEach(element => {
  
      radioButtonArray.push({value: element.correct_answer, label : element.correct_answer})
  
        element.incorrect_answers.forEach(element2 => {
          radioButtonArray.push({value: element2, label : element2})
        } )
      })
  
     
  
    })
    .catch((error) =>{
      console.error(error);
    });
  
  }

  static navigationOptions = {
    title: 'Trivia Quiz',
  };
  
  onPress = data => this.setState({ data });
  
  render() {
    // let selectedButton = this.state.data.find(e => e.selected == true);
    // selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
console.log(this.state.radioBtnData)
      return (
        <ScrollView>
       

        {this.state.data.map( (d,i) => {

              return (
                <View  style={styles.container} key={i}>
                <Text style={{ fontSize: 18 }}>
              {i+1 + ')'}{d.question}
                </Text>
                <RadioGroup radioButtons={this.state.radioBtnData} onPress={this.onPress} />
                </View>
              )

        } )}
    
       

   </ScrollView>
   );
  }
}


const styles = StyleSheet.create({
  container: {
    // padding : '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
});