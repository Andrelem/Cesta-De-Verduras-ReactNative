import React from "react";
import { Image ,StyleSheet,Dimensions,Text, View} from "react-native";
import Texto from "../../componentes/texto";

import logo from '../../../assets/logo.png';
import Topo from "./Componentes/Topo";

export default function Cesta() {
    

    return <>
        <Topo/>
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta De Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.logo}/>
                <Texto style={estilos.nomefazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta para selecionar 
                  produtos cuidadosamente para sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}



const estilos =  StyleSheet.create({
    cesta: {
        paddingVertical:8,
        paddingHorizontal:16,
        
    },
    nome:{
        fontSize:26,
        lineHeight:42,
        color:"#464646",
        fontWeight:"bold"
    },
    nomefazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
    },
    descricao:{
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:16,
    },
    preco:{
        color:"#2A9F85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8,
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical:12,       
    },
    logo:{
        width:32,
        height:32,
    },
});