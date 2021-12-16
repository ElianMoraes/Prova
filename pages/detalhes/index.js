import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }) {
    return (
        <View style={style.pag}>
            <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Cliente: Rodrigo Viera</Text>
            <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Pedido: Pizza de Calabresa</Text>
            <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Valor: 33,50</Text>
            <Text style={{margin:12, fontSize:16, textAlign:'center',fontWeight:'bold'}}>Data: 16/12/2021</Text>

            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Text style={{margin:12,fontSize:20, textAlign:'center',fontWeight:'bold'}}>Concluir Pedido</Text>
            </TouchableOpacity>
        </View>
    )    
}