import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../utli/color';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGamesScreen = ({onPickNumber}) => {
   const [enterNumber, setEnteredNumber] = useState('');

   const numberInputHandler = (enteredText)=>{
    setEnteredNumber(enteredText);
   }

   const resetInputHandler= ()=>{
     setEnteredNumber('');
   }

   const confirmInputHandler = () =>{
         const chosenNumber = parseInt(enterNumber);

         if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99 ){
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'okay' , style: 'destructive', onPress:resetInputHandler }]
            )
            return;
         }
         onPickNumber(chosenNumber);
   }

  return (
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText>
            Enter a Number
        </InstructionText>
      <TextInput 
      style={styles.numberInput} 
      maxLength={2}
      keyboardType="number-pad"
      autoCapitalize='none'
      value={enterNumber}
      onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>  
    </Card>
    </View>
  )
}

export default StartGamesScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput:{
        height: 50,
        width:50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer:{
        flexDirection:"row",
    },
    buttonContainer:{
        flex:1,
    }
})