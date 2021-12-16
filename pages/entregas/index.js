import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Entregas({ navigation }){
    return (
        <View style={style.pag}>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12, color: 'red', fontSize:16, textAlign:'center',fontWeight:'bold'}}>Entrega 1</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Endereço: Rua Das Palmeiras</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Bairro: Novo Horizonte</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Numero: 455</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12, color: 'red', fontSize:16, textAlign:'center',fontWeight:'bold'}}>Entrega 2</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Endereço: Rua Sem Sentido</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Bairro: Santa Vera</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Numero: 50</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12, color: 'red', fontSize:16, textAlign:'center',fontWeight:'bold'}}>Entrega 3</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Endereço: Rua Das Casadas</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Bairro: Morumbi</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Numero: 47</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                <Text style={{margin:12, color: 'red', fontSize:16, textAlign:'center',fontWeight:'bold'}}>Entrega 4</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Endereço: Estrada Viera Lima</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Bairro: Colinas</Text>
                <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Numero: 200</Text>
            </TouchableOpacity>
        </View>
    )
}