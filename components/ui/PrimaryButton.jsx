import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../utli/color'

const PrimaryButton = ({children, onPress}) => {
    const pressHandler = () =>{
        console.log('Pressed!');
    }
  return (
    <View style={styles.buttonOuterContainer}>
    <Pressable 
    style={({pressed}) => 
        pressed
          ?[styles.buttonInnerContainer,styles.pressed] 
          :styles.buttonInnerContainer} 
    onPress={onPress} 
    android_ripple={{color: Colors.primary600}}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer:{
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
    },
    buttonInnerContainer:{
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center'
    },
    Pressed:{
        opacity: 0.75,
    }
})