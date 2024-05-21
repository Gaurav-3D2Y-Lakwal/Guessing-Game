import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Colors from '../utli/color'
import PrimaryButton from '../components/ui/PrimaryButton'

const GamesOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
      <Image 
      source={require('../assets/images/success.png')}
      style={styles.image}
      />
      </View>
      <View>
        <Text style = {styles.summaryText}>
            Your phone needed <Text style= {styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  )
}

export default GamesOverScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image:{
        width: '100%',
        height: '100%',
    },
    summaryText:{
        fontFamily: 'open-sans',
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 24, 
    },
    highlight:{
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
})