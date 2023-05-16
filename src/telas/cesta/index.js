import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../components/Texto';

import Topo from './components/topo'; 
import Detalhes from './components/Detalhes';
import Item from './components/item';


export default function Cesta({ topo, detalhes, itens }) {
  return <>
    <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
              return <>
                <Topo {...topo}/>
                <View style={estilos.cesta}>
                  <Detalhes {...detalhes}/>
                  <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                </View>
               </>
            }}
        />
  </>
}

const estilos = StyleSheet.create({
  titulo:{
    color: "#464646",
    marginTOp: 32,
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
},
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
 
});