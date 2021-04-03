import React, { useEffect, useState } from 'react'
import { View, Text,Image, StyleSheet, Button } from 'react-native'

const rock = require('./img/rock.png');
const paper = require('./img/paper.png');
const scissors = require('./img/scissors.png');
//colors
const colors = ['#9f6ba0','#fff07c','#c5e6a6'];
//random img select
const randomImg = ()=>{
    const emojis = [rock,paper,scissors];
    const random =Math.floor(Math.random() * 3);
    return emojis[random];
}
//hooks
export default function PlayScreen() {
    const [counter,setCounter] = useState(3);

    useEffect(()=>{
        //console.log(counter);

        if(counter < 1)return

        const timer = setTimeout(()=>{
            setCounter(prev => prev - 1)
        },500);

        return()=>{
            clearTimeout();
        };
    },[counter])

    return (
        <View style={StyleSheet.compose({backgroundColor:colors[counter-1]},styles.container)}>
            { (counter < 1) ? (
                <>
                    <Image style={styles.sign} source={randomImg()}/>
                    <View style={styles.button}>
                        <Button title="Play Again" onPress={()=>setCounter(3)}/>
                    </View>
                </>): ( <Text style={styles.counter}>{counter}</Text>)
             }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    counter:{
        fontSize:150,
    },
    sign:{
        width:200,
        height:200,
    },
    button:{
        position:'absolute',
        bottom: 40,
    }
})