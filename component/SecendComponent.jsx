import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SecendComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_color}>2nd Component</Text>
    </View>
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
export default SecendComp