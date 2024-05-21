import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utli/color'

const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
      fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    },
})