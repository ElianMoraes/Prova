import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }) {
    return(
        <View style={style.pag}>
                <Text style={{margin:12,fontSize:25, textAlign:'center',fontWeight:'bold'}}>Quem é Você ?</Text>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Text style={{margin:12, backgroundColor:"white", fontSize:20, textAlign:'center',fontWeight:'bold'}}>Joãozin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Text style={{margin:12, backgroundColor:"white",fontSize:20, textAlign:'center', fontWeight:'bold'}}>Clebin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Text style={{margin:12, backgroundColor:"white",fontSize:20, textAlign:'center',fontWeight:'bold'}}>Zezin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Text style={{margin:12, backgroundColor:"white",fontSize:20, textAlign:'center',fontWeight:'bold'}}>Reginaldo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Text style={{margin:12, backgroundColor:"white",fontSize:20, textAlign:'center',fontWeight:'bold'}}>Gil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                <Text style={{margin:12, backgroundColor:"white",fontSize:20, textAlign:'center',fontWeight:'bold'}}>Bielsa</Text>
            </TouchableOpacity>
        </View>
    )
}            