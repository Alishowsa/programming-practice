import { View, Text, StyleSheet, FlatList } from "react-native"

const FRUTA = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi']

export default function Home() {
  return (
    <View style={estilos.container}>
      <Text>Página Home</Text>
      <FlatList
        data={FRUTA}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (<View style={estilos.linha}>
          <Text style={estilos.texto}>{item}</Text>
        </View>)}
        contentContainerStyle={ estilos.conteudo }
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  linha: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'   
  },
  texto: {
    fontSize: 16,
    color: '#333'   
  },
  conteudo: {
    paddingTop: 60
  }
})
