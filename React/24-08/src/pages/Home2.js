import { FlatList, Text, View } from "react-native";
import ItemContato from "../components/ItemContado";


const CONTATOS = [
  {
    id: "1",
    nome: "Magro chuveirinho",
    cargo: "Trocador de chuveiro",
    icone: "user",
  },
  {
    id: "2",
    nome: "Anderson Pereira",
    cargo: "Amigo do Magro",
    icone: "smartphone",
  },
  {
    id: "3",
    nome: "Alisson",
    cargo: "Programador",
    icone: "code",
  },
  {
    id: "4",
    nome: "Gustavo",
    cargo: "Desenvolvedor",
    icone: "code",
  },
];

export default function Home2() {
  return (
    <FlatList
      data={CONTATOS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ItemContato contato={item} />
      )}
    />
  );
}