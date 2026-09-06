import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";

import Header from "./components/Header";
import SaldoCard from "./components/SaldoCard";
import MenuIcones from "./components/MenuIcones";
import ListaLancamentos from "./components/ListaLancamentos";
import ModalConfiguracoes from "./components/ModalConfiguracoes";
import { lancamentosIniciais, menuOpcoes } from "./data/dados";
import { formatarValor } from "./utils/formatarValor";

export default function App() {
  const saldo = 5321.55;
  const gastos = -2200.88;

  const [valoresVisiveis, setValoresVisiveis] = useState(true);
  const [modalConfigVisivel, setModalConfigVisivel] = useState(false);
  const [lancamentos] = useState(lancamentosIniciais);

  function handleMenuPress(opcao) {
    if (opcao.titulo === "Configurações") {
      setModalConfigVisivel(true);
    } else {
      Alert.alert(opcao.titulo, opcao.mensagem);
    }
  }

  function handleLancamentoPress(item) {
    const valorTexto =
      item.tipo === "pendente"
        ? "Ainda não foi pago"
        : formatarValor(item.valor);

    Alert.alert(
      item.titulo,
      `Data: ${item.data}\nCategoria: ${item.categoria}\nValor: ${valorTexto}`,
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#6A0DAD" />
      <ScrollView contentContainerStyle={styles.container}>
        <Header
          nome="Alisson batista de sousa"
          onAvatarPress={() =>
            Alert.alert("Perfil", "Aqui abriria a tela de perfil do usuário.")
          }
        />

        <SaldoCard
          saldo={saldo}
          gastos={gastos}
          valoresVisiveis={valoresVisiveis}
          onToggle={() => setValoresVisiveis(!valoresVisiveis)}
        />

        <MenuIcones opcoes={menuOpcoes} onPress={handleMenuPress} />

        <ListaLancamentos
          lancamentos={lancamentos}
          valoresVisiveis={valoresVisiveis}
          onItemPress={handleLancamentoPress}
        />
      </ScrollView>

      <ModalConfiguracoes
        visivel={modalConfigVisivel}
        onFechar={() => setModalConfigVisivel(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingBottom: 30,
  },
});
