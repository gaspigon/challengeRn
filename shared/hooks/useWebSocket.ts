import { useEffect } from "react";
import { useNotificationStore } from "@/shared/store/notifications";
import { NotificationEvent } from "@/shared/types/document";

export const useWebSocket = () => {
  const addNotification = useNotificationStore((state) => state.addNotification);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/notifications");

    ws.onmessage = (event) => {
      try {
        const data: NotificationEvent = JSON.parse(event.data);
        addNotification(data);
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);
};
