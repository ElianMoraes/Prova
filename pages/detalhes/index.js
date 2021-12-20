import React from 'react'
import { View, Text } from 'react-native'
import style from './style.js'
export default function Detalhes({ navigation, route }) {

    const { name, habilidade } = route.params;
    
    const pokemon = { "name": habilidade }
    
    const confirmar = () => {
        let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
        fetch(url, {
            method: "PUT"
        })
            .then(resp => { return resp.status })
            .then(data => { if (data == 200) navigation.navigate('Listar pokemon',pokemon) })
    }

    return (
        <View style={style.pag}>
            <View style={style.detalhe}>
                <View style={style.linha}><Text>Nome Pokemon:</Text><Text>{name}</Text></View>
                <View style={style.linha}><Text>Habilidade:</Text><Text>{habilidade}</Text></View>
               
            </View>
        </View>
    )
}