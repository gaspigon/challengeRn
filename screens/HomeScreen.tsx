// screens/HomeScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewDocumentModal } from "@/shared/components/NewDocumentModal";
import { getDocuments } from "@/shared/services/documentService";
import { useDocumentStore } from "@/shared/store/documents";



export default function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const { documents, setDocuments } = useDocumentStore();


useEffect(() => {
  const fetchData = async () => {
    try {
      const docs = await getDocuments();
      setDocuments(docs);
    } catch (err) {
      console.error("Error loading documents:", err);
    }
  };

  fetchData();
}, []);


  console.log("Documents in zustand", documents);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Documents</Text>
        {/* Futuras acciones: toggle, notificaciones */}
      </View>

      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Aquí se mostrarán los documentos 📄</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
        <Text style={styles.buttonText}>+ Add document</Text>
      </TouchableOpacity>

      <NewDocumentModal visible={showModal} onClose={() => setShowModal(false)} />


    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    marginBottom: 16,
  },
  title: { fontSize: 24, fontWeight: "bold" },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#888",
  },
  button: {
    backgroundColor: "#3478f6",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
