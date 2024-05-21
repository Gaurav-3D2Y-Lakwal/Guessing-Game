import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../utli/color'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
     card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        textShadowOffset: {width: 0,height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})