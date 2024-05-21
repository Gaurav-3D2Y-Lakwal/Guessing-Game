import { useState, useEffect } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGamesScreen from './screens/StartGamesScreen';
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GamesOverScreen';
import Colors from './utli/color';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

   const [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  else{
    SplashScreen.hideAsync()
  }

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = (NumberofRounds) =>{
    setGameIsOver(true);
    setGuessRounds(NumberofRounds)
   }

   const startNewGameHandler = () =>{
       setUserNumber(null);
       setGuessRounds(0);
   }

  let Screen = <StartGamesScreen onPickNumber ={pickNumberHandler} />

  if(userNumber){
    Screen = 
    (<GameScreen userNumber={userNumber} onGameOver = {gameOverHandler}/>
      ); 
  }

  if(gameIsOver && userNumber){
    Screen = <GameOverScreen
              roundsNumber={guessRounds}
              userNumber={userNumber}
               onStartNewGame={startNewGameHandler}/>
  }


  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} 
    style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.png')}
       resizeMode='cover'
       style={styles.rootScreen}
       imageStyle={styles.backgroundImage}>
        
        <SafeAreaView style={styles.rootScreen}>{Screen}</SafeAreaView>
        
      </ImageBackground>
     </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.15,
  }
});
