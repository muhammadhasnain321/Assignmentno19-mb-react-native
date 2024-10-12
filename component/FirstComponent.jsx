import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FirstCom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_color}>1st Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black",
    height:300,
    alignItems:"center",
    justifyContent:"center",
  },
  text_color:{
    color:"white",
    fontSize:50

  }
})
export default FirstCom