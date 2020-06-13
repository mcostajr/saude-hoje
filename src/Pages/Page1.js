import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Button, ImageBackground } from "react-native";
import { CheckBox } from 'react-native-elements'

export default class Page1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sintoma: [
        { id: 1, key: 'Febre Alta', checked: false },
        { id: 2, key: 'Dor de Garganta', checked: false },
        { id: 4, key: 'Fadiga', checked: false },
        { id: 8, key: 'Calafrios', checked: false },
        { id: 16, key: 'Congestao Nasal', checked: false },
        { id: 32, key: 'Tosse', checked: false },
        { id: 64, key: 'Insuficiencia Respiratoria', checked: false },
        { id: 128, key: 'Dor de Cabeca', checked: false },
        { id: 256, key: 'Falta de Ar', checked: false },
        { id: 512, key: 'Coriza', checked: false },
        { id: 1024, key: 'Nausea e Vomito', checked: false },
        { id: 2048, key: 'Diarreia', checked: false },
        { id: 4096, key: 'Febre', checked: false },
        { id: 8192, key: 'Dificuldade Respiratoria', checked: false },
        { id: 16384, key: 'Dores Muscular', checked: false },
        { id: 32768, key: 'Fraqueza', checked: false },
        { id: 65536, key: 'Irritacao nos Olhos', checked: false },
        { id: 131072, key: 'Cansaco', checked: false },
        { id: 262144, key: 'Ausencia de Apetite', checked: false },
        { id: 524288, key: 'Congestao', checked: false }
      ],
      result: '',
    }
  }

  onCheckChanged(id) {
    const sintoma = this.state.sintoma;

    const index = sintoma.findIndex(x => x.id === id);
    sintoma[index].checked = !sintoma[index].checked;
    this.setState(sintoma);
  }

  onFilterChenged(){
    const sintoma = this.state.sintoma;
    const s = this.state
    s.result = ''

    const conjunto = sintoma.filter(item => item.id && item.checked == true).map(item => {return ( item.id)}).reduce( (accum, curr) => accum + curr );
   
    if(conjunto == 63) {
      s.result = 'Gripe Comum'
    }
    else if(conjunto== 4081){
      s.result = 'H1N1'
    }
    else if(conjunto == 12576){
      s.result = 'Influenza A'
    }
    else if(conjunto == 52785){
      s.result = 'Influenza B'
    }
    else if(conjunto == 459296){
      s.result = 'Influenza C'
    }
    else if(conjunto == 143392){
      s.result = 'COVID 19'
    }
    else {
      s.result = ''
    }

    this.setState(s);
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <ImageBackground source={require('../img/background.jpeg')} style={styles.image}>
            <View style={styles.fixToText}>
              <Text style={{ padding: 20, color: 'white', fontSize: 20}}>Informe os Sintomas</Text>
            </View>
            <ScrollView>
              <View>
                {
                  this.state.sintoma.map((item,key) => <CheckBox title={item.key} key={key}  checked={item.checked} onPress={()=>this.onCheckChanged(item.id)}/>)
                } 
              </View>
            </ScrollView>
            <TouchableOpacity style={ styles.button } onPress={()=> this.onFilterChenged()}> 
              <Text style={styles.buttonText}>Verificar</Text>
            </TouchableOpacity>
            <Text style={{padding: 50, color: 'white', fontSize: 20, alignSelf: 'center'}}>{ this.state.result }</Text>
          </ImageBackground>
        </View>
      </>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  button: {
    backgroundColor: 'green',
    width: "100%",
    height: 100,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 40,
    color: 'white',
    fontSize: 20
  },
  fixToText: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
});