// screens/HomeScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewDocumentModal } from "@/shared/components/NewDocumentModal";
import { getDocuments } from "@/shared/services/documentService";
import { useDocumentStore } from "@/shared/store/documents";
import { FlatList, ActivityIndicator } from "react-native";
import { DocumentCard } from "@/shared/components/DocumentCard";
import { Ionicons } from "@expo/vector-icons"; 



export default function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const { documents, setDocuments, viewMode, toggleViewMode } = useDocumentStore();


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




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}}>
      <View style={styles.header}>
        <Text style={styles.title}>Documents</Text>
      </View>
        <View style={styles.content}>
   <View style={styles.toggleContainer}>
  <TouchableOpacity
    onPress={() => viewMode !== "list" && toggleViewMode()}
    style={[
      styles.toggleIconButton,
      viewMode === "list" && styles.toggleIconButtonActiveLeft,
    ]}
  >
    <Ionicons
      name="list"
      size={18}
      color={viewMode === "list" ? "#3478f6" : "#888"}
    />
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => viewMode !== "grid" && toggleViewMode()}
    style={[
      styles.toggleIconButton,
      viewMode === "grid" && styles.toggleIconButtonActiveRight,
    ]}
  >
    <Ionicons
      name="grid-outline"
      size={18}
      color={viewMode === "grid" ? "#3478f6" : "#888"}
    />
  </TouchableOpacity>
</View>
        {documents.length === 0 ? (
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        ) : (
          <FlatList
            data={documents}
            key={viewMode} 
            keyExtractor={(item) => item.ID}
            renderItem={({ item }) => (
              <DocumentCard document={item} mode={viewMode} />
            )}
            numColumns={viewMode === "grid" ? 2 : 1}
            columnWrapperStyle={
              viewMode === "grid" ? { justifyContent: "space-between" } : undefined
            }
            contentContainerStyle={{ paddingBottom: 120 }}
            ListEmptyComponent={
              <View style={styles.placeholder}>
                <Text style={styles.placeholderText}>No documents found</Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
          />
        )}


      <NewDocumentModal visible={showModal} onClose={() => setShowModal(false)} />
        

      </View>

      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
        <Text style={styles.buttonText}>+ Add document</Text>
      </TouchableOpacity>
        </View>
  
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  header: {
    marginBottom: 16,
  paddingHorizontal: 16, 
  backgroundColor: "#fff",
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
  marginTop:20,
  backgroundColor: "#3478f6",
  paddingVertical: 14,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",


  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  viewToggle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 12,
  },
  toggleContainer: {
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  overflow: "hidden",
  width: '23%',
  alignSelf: "flex-end",
  marginBottom: 16,
  marginTop: 10,
},

toggleIconButton: {
  paddingVertical: 6,
  paddingHorizontal: 12,
  backgroundColor: "transparent",
},

toggleIconButtonActiveLeft: {
  backgroundColor: "#fff",
  borderRightWidth: 1,
  borderRightColor: "#ccc",
},

toggleIconButtonActiveRight: {
  backgroundColor: "#fff",
},
content: {
  flex: 1,
  backgroundColor: "#f5f5f5",
  paddingHorizontal: 16,
},
boxButton: {
  borderTopWidth: 1,
  paddingHorizontal:10,
  borderColor: "#ccc",
  backgroundColor: "#f5f5f5"
}

});
