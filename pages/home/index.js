import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }) {
    const [lista, setlista] = useState([

    ])
     
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon", {
            "method": "GET",
            "headers": {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            } 
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setlista(data.results);
        }).catch(err => {    
        }); 
    }, 
    []);

    return (
    <View style={style.pag}>
        {lista.map((item, index) =>
            <TouchableOpacity style={style.menu} key={index} onPress={() => { navigation.navigate('Detalhes', item) }}>
            <Image style={style.icone} source={require('../../assets/pokebola.png')}></Image>
            <Text>{item.name}</Text>
            <Image style={style.img} source={{uri:'https://www.global-esports.news/wp-content/uploads/2021/08/These-are-the-strongest-and-weakest-Pokemon%E2%80%8E.jpg'}}/>
            </TouchableOpacity>
            )}
    </View>
)}

