import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons"; 

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const NewDocumentModal = ({ visible, onClose }: Props) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Add document</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={26} color="gray" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitle}>Document informations</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Placeholder"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Version</Text>
          <TextInput
            style={styles.input}
            placeholder="Placeholder"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>File</Text>
            <TouchableOpacity style={styles.fileButton}>
            <Ionicons name="document-text-outline" size={18} color="#3478f6" />
            <Text style={styles.fileText}>Choose file</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: "50%",
    paddingBottom: 0, 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 16,
    color: "#444",
  },
  formGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
  },
  fileButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
    width: "35%",
    marginBottom: 15,
  },
  fileText: {
    color: "#3478f6",
    fontWeight: "500",
    marginLeft: 8,
  },
  submitButton: {
    backgroundColor: "#3478f6",
    paddingVertical: 12,
    borderRadius: 10,
    
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  footer: {
  backgroundColor: "#f5f5f5",
  paddingHorizontal: 20,
  marginHorizontal: -20,  
  borderTopWidth: 0.5,
  borderTopColor: "#ccc",
  paddingVertical: 15,

},
});
