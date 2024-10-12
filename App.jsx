import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import FirstCom from './component/FirstComponent'
import SecendComp from './component/SecendComponent'

const App = () => {
  return (
    <>
    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.text_color}>hello world</Text>
    </View>
    <FirstCom />
    <SecendComp />
    <View>
      <Text style={{backgroundColor:"red",color:"green", fontSize:20}}>helo world</Text>
      <Text style={{backgroundColor:"red",color:"green", fontSize:20}}>
        hellow 2
      </Text>
    </View>
    
    <Image style={{height:500,}} source={{uri:"https://media.gettyimages.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=gi&k=20&c=Uo_yzYm9UJu6GpKilOLGrCbiSjyMB5DsvZTYpybYxj4="}}/>
    <Image style={{height:500,}} source={{uri:"https://media.gettyimages.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=gi&k=20&c=Uo_yzYm9UJu6GpKilOLGrCbiSjyMB5DsvZTYpybYxj4="}}/>
    <Image style={{height:300, width:400}} source={require('./images.jpeg')}/>
    <TextInput multiline/>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    height:300,
    alignItems:"center",
    justifyContent:"center",
  },
  text_color:{
    color:"black",
    fontSize:50

  }
})
export default App