import { Alert, StyleSheet, Text, View , FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import GuessLogItem from '../components/game/GuessLogItem'

const generateRandonBetween = (min, max, exclude) =>{
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandonBetween(max,min,exclude);
    }else{
        return rndNum;
    }

}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandonBetween(1, 100, userNumber );
   const [currentGuess, setCurrentGuess] = useState(initialGuess);
   const [guessRound, setGuessRound] = useState([initialGuess]);

   useEffect(() =>{
    if(currentGuess === userNumber){
      onGameOver(guessRound.length);
    }
   }, [currentGuess, userNumber, onGameOver]);

   useEffect(() =>{
    minBoundary = 1;
    maxBoundary = 100;
   },[]);

    const nextGuessHandler = (direction)=>{
       if((direction === 'lower' && currentGuess < userNumber) 
        || (direction === 'higher' && currentGuess > userNumber))
        {
        Alert.alert("Don't lie!", 'You Know that this is wrong...' ,
        [{text: 'Sorry!' , style: 'cancel'},]);
        return;
       }

        if(direction === 'lower'){
            maxBoundary = currentGuess;
        } else{
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandonBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRound(prevguessNo => [newRndNumber,...prevguessNo])
    }
    
    const guessRoundLenght = guessRound.length;
     
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card>
          <InstructionText style={styles.InstructionText}>
            Higher or Lower?
            </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            Lower
            </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            Higher
            </PrimaryButton>
            </View>
          </View>
          </Card>
      </View>
      <View style={styles.listContainer}>
      <FlatList
      data={guessRound}
      renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundLenght - itemData.index} guess={itemData.item} />}
      keyExtractor={(item)=>item}
      />
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 24,
        margin: 24,
    },
    InstructionText:{
        marginBottom: 12,
    },
    buttonsContainer:{
        flexDirection: "row",
    },
    buttonContainer:{
        flex:1,
    },
    listContainer:{
        flex: 1,
        padding: 8,
    }, 
})