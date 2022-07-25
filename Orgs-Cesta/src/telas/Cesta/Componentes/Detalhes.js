import react from "react";
import { View, Image ,StyleSheet} from "react-native";

import Texto from "../../../componentes/texto";


export default function Detalhes({nome,logofazenda,nomeFazenda,descricao,preco}){
    return<>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={logofazenda} style={estilos.logo}/>
                <Texto style={estilos.nomefazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
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
})