import React from 'react';
import { StyleSheet, Text, View, Picker, Modal, TouchableHighlight, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
  
    this.state = {
      pickerSelection: '',
      pickerDisplayed: false
    }
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    });
  }

  setDoencaValue(newValue) {
    this.setState({
      pickerSelection: newValue
    });
    
  }
  render() {
    const pickerValues = [
      {
        title: 'Gripe Comum',
        value: 'Febre alta, Dor de garganta e dores no corpo, Fadiga, Calafrios Congestão nasal, Tosse demorando cerca de 3 a 4 dias para começarem a surgir no corpo'
      },
      {
        title: 'H1N1',
        value: 'H1N1'
      },
      {
        title: 'Influenza A',
        value: 'Influenza A'
      },
      {
        title: 'Influenza B',
        value: 'Influenza B'
      },
      {
        title: 'Influenza C',
        value: 'Influenza C'
      },
      {
        title: 'COVID 19',
        value: 'Tosse, Febre, Cansaço,	Dificuldade para respirar (em casos graves)'
      }
    ]

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Consultoria</Text>
        </View>
        <View style={styles.body}>
          <Button onPress={() => this.togglePicker()} title={"Select"}></Button>
          <Modal visible={this.state.pickerDisplayed} animated={"slide"} transparent={true} onRequestClose={() => console.log('close was requested')}>
            <View style={styles.modalView}>
              {
                pickerValues.map((value, index) => {
                  return <TouchableHighlight key={index} onPress={() => this.setDoencaValue(value.value)} style={{paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{value.title}</Text>
                  </TouchableHighlight>
                })}
            </View>
          </Modal>
          <Text>{this.state.pickerSelection}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#89ffa5',
  },
  headerText:{
    alignSelf: 'center',
    padding: 30,
  },
  body: {
    
  },
  modalView:
  { 
    margin: 20, 
    padding:20, 
    backgroundColor: '#efefef', 
    bottom: 20, 
    left: 20, 
    right: 20, 
    position: 'absolute',
    alignItems: 'center'
  }
});
