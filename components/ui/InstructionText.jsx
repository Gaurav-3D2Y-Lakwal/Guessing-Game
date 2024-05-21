import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../utli/color'


const InstructionText = ({children, GSstyle}) => {
  return (
    <View>
      <Text style={[styles.instructionText, GSstyle]}>{children}</Text>
    </View>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText:{
        color: Colors.accent500,
        fontFamily: 'open-sans',
    },
})