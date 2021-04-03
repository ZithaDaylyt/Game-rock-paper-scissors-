import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PlayScreen from './components/PlayScreen';


export default function App() {
  const [play,setPlay] = useState(false);
  return (
    
      play ? ( <PlayScreen/> ) : (
        <View style={styles.container}>
          <Text style={styles.header}>Rock Paper Scissors</Text>
          <Text style={styles.emoji}>✊🖐✌️</Text>
          <View style={styles.btn}>
            <Button title="Play" color="white" onPress={()=>setPlay(true)}/>
          </View>
        </View>
      )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:30,
    marginBottom:10,
  },
  btn:{
    marginTop:30,
    width:250,
    backgroundColor:'#324376',
    color:'#fff',
    
  },
  emoji:{
    fontSize:65,
  }
});
