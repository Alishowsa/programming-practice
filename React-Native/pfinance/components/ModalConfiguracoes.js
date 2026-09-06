import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function ModalConfiguracoes({ visivel, onFechar }) {
  return (
    <Modal
      visible={visivel}
      animationType="slide"
      transparent
      onRequestClose={onFechar}
    >
      <View style={styles.fundo}>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Configurações</Text>

          <TouchableOpacity
            style={styles.opcao}
            onPress={() =>
              Alert.alert("Editar perfil", "Aqui abriria a edição do perfil.")
            }
          >
            <Ionicons name="person-outline" size={20} color="#555" />
            <Text style={styles.opcaoTexto}>Editar perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.opcao}
            onPress={() =>
              Alert.alert(
                "Notificações",
                "Aqui você ligaria/desligaria notificações.",
              )
            }
          >
            <Ionicons name="notifications-outline" size={20} color="#555" />
            <Text style={styles.opcaoTexto}>Notificações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.opcao}
            onPress={() => Alert.alert("Sair", "Aqui você sairia da conta.")}
          >
            <Ionicons name="log-out-outline" size={20} color="#e74c3c" />
            <Text style={[styles.opcaoTexto, { color: "#e74c3c" }]}>Sair</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fechar} onPress={onFechar}>
            <Text style={styles.fecharTexto}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  conteudo: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  opcao: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  opcaoTexto: {
    fontSize: 15,
    marginLeft: 12,
    color: "#333",
  },
  fechar: {
    marginTop: 16,
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  fecharTexto: {
    fontSize: 15,
    fontWeight: "600",
    color: "#555",
  },
});
