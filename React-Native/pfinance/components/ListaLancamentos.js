import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { formatarValor } from "../utils/formatarValor";

export default function ListaLancamentos({
  lancamentos,
  valoresVisiveis,
  onItemPress,
}) {
  return (
    <View>
      <Text style={styles.titulo}>Últimos lançamentos</Text>

      <View style={styles.lista}>
        {lancamentos.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            activeOpacity={0.6}
            onPress={() => onItemPress(item)}
          >
            <View>
              <Text style={styles.data}>{item.data}</Text>
              <Text style={styles.itemTitulo}>{item.titulo}</Text>
            </View>

            {item.tipo === "pendente" ? (
              <View style={styles.barraPendente} />
            ) : (
              <Text
                style={[
                  styles.valor,
                  { color: item.tipo === "entrada" ? "#2ecc71" : "#e74c3c" },
                ]}
              >
                {valoresVisiveis ? formatarValor(item.valor) : "••••"}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#555",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 25,
    marginLeft: 20,
  },
  lista: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  data: {
    color: "#aaa",
    fontSize: 11,
    marginBottom: 2,
  },
  itemTitulo: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
  },
  valor: {
    fontSize: 15,
    fontWeight: "bold",
  },
  barraPendente: {
    width: 60,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
  },
});
