import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function MenuIcones({ opcoes, onPress }) {
  return (
    <View style={styles.menuLinha}>
      {opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuBotao}
          activeOpacity={0.6}
          onPress={() => onPress(opcao)}
        >
          <Ionicons name={opcao.icone} size={20} color="#555" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menuLinha: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  menuBotao: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
});
