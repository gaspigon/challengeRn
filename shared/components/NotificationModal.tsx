import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useNotificationStore } from "@/shared/store/notifications";
import { Ionicons } from "@expo/vector-icons"; 

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const NotificationModal = ({ visible, onClose }: Props) => {
  const notifications = useNotificationStore((s) => s.notifications);
  const clearNotifications = useNotificationStore((s) => s.clearNotifications);

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
        <Text style={styles.title}>Notifications</Text>
            <TouchableOpacity onPress={clearNotifications}>
                <Ionicons name="trash" size={26} color="gray" />
            </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={26} color="gray" />
          </TouchableOpacity>
        </View>


        {notifications.length === 0 ? (
          <Text style={styles.empty}>No notifications yet.</Text>
        ) : (
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.Timestamp}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.text}>
                  {item.UserName} created <Text style={styles.bold}>"{item.DocumentTitle}"</Text>
                </Text>
              </View>
            )}
          />
        )}


      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  item: {
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  empty: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#3478f6",
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
    container: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "60%",
    minHeight: "60%",
    paddingBottom: 0, 
  },
});
