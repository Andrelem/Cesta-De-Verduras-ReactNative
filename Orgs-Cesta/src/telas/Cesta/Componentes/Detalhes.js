import react from "react";
import { View, Image ,StyleSheet} from "react-native";

import Texto from "../../../componentes/texto";
import logo from '../../../../assets/logo.png';

export default function Detalhes(){
    return<>
            <Texto style={estilos.nome}>Cesta De Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.logo}/>
                <Texto style={estilos.nomefazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta para selecionar 
                  produtos cuidadosamente para sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
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