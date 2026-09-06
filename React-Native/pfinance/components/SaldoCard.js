import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formatarValor } from "../utils/formatarValor";


export default function SaldoCard({
  saldo,
  gastos,
  valoresVisiveis,
  onToggle,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onToggle}
    >
      <View style={styles.coluna}>
        <Text style={styles.label}>Saldo</Text>
        <Text style={[styles.valor, { color: "#2ecc71" }]}>
          {valoresVisiveis ? formatarValor(saldo) : "••••••"}
        </Text>
      </View>

      <View style={styles.divisor} />

      <View style={styles.coluna}>
        <Text style={styles.label}>Gastos</Text>
        <Text style={[styles.valor, { color: "#e74c3c" }]}>
          {valoresVisiveis ? formatarValor(gastos) : "••••••"}
        </Text>
      </View>

      <View style={styles.olhoIcone}>
        <Ionicons
          name={valoresVisiveis ? "eye-outline" : "eye-off-outline"}
          size={18}
          color="#bbb"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -30,
    borderRadius: 14,
    flexDirection: "row",
    paddingVertical: 18,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  coluna: {
    flex: 1,
    alignItems: "center",
  },
  divisor: {
    width: 1,
    backgroundColor: "#eee",
  },
  label: {
    color: "#999",
    fontSize: 13,
    marginBottom: 4,
  },
  valor: {
    fontSize: 16,
    fontWeight: "bold",
  },
  olhoIcone: {
    position: "absolute",
    top: 8,
    right: 12,
  },
});
