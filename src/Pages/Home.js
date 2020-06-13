import React from "react";
import { ImageBackground, View, Text, StyleSheet,Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends React.Component {
    
  render() {
    return (
        <>
            <View style={styles.container}>
              <ImageBackground source={require('../img/background.jpeg')} style={styles.image}>
                <View style={styles.container2}>
                  <Text style={ styles.welText }>Bem vindo ao Saude Hoje, aqui voce pode verificar uma possivel doenca lembrbando que nao somos 100% exatos mas para voce ter um direciomanto mais preciso</Text>
                  <TouchableOpacity style={ styles.buttons } onPress={ ()=> this.props.navigation.navigate('Page1') }> 
                    <Text style={styles.buttonsText}>Diagnostico Online</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
        </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  container2: {
    marginTop: 50,
  },
  welText: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'white',
  },
  buttons: {
    marginTop: 100,
    backgroundColor: 'green',
    alignSelf: 'center',
    width: "75%",
    height: 80,
    borderRadius: 100,
  },
  buttonsText: {
    alignSelf: 'center',
    padding: 30,
    color: 'white',
  }
});