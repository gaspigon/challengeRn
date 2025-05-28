import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Document } from "@/shared/types/document";
import { Ionicons } from "@expo/vector-icons"; 

interface Props {
  document: Document;
  mode: "list" | "grid";
}

export const DocumentCard = ({ document, mode }: Props) => {
  return (
    <View style={[styles.card, mode === "grid" && styles.cardGrid]}>
        {mode === "list" ? (
        <View style={styles.titleRow}>
            <Text style={styles.title}>{document.Title}</Text>
            <Text style={[styles.version, {marginLeft: 10}]}>v{document.Version}</Text>
        </View>
        ) : (
        <>
            <Text style={styles.title}>{document.Title}</Text>
            <Text style={styles.version}>Version {document.Version}</Text>
        </>
        )}

      {mode === "list" && (
  <View style={styles.metaRow}>
    {/* Contributors */}
    <View style={styles.metaColumn}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
        <Ionicons name="people-outline" size={14} color="#000" style={{ marginRight: 4 }} />
      <Text style={styles.label}>Contributors</Text>
    </View>
      {document.Contributors.map((c) => (
        <Text style={styles.text} key={c.ID}>
          {c.Name}
        </Text>
      ))}
    </View>

    {/* Attachments */}
    <View style={styles.metaColumn}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
        <Ionicons name="attach-outline" size={14} color="#000" style={{ marginRight: 4 }} />
        <Text style={styles.label}>Attachments</Text>
    </View>
      {document.Attachments.map((a, i) => (
        <Text key={i} style={styles.text}>
          {a}
        </Text>
      ))}
    </View>
  </View>
)}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 3,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  cardGrid: {
    width: "48%",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  version: {
    fontSize: 12,
    color: "#666",
    marginBottom: 6,
    marginTop: 5,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginTop: 6,
    marginBottom: 4,
  },
    text: {
        fontSize: 13,
        color: "gray",
        marginBottom: 4,
    },
    metaRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 16,
},

metaColumn: {
  flex: 1,
},
titleRow: {
  flexDirection: "row",
  alignItems: "center",
},

});
