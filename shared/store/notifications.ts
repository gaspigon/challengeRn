import { create } from "zustand";
import { NotificationEvent } from "@/shared/types/document";

interface NotificationState {
  notifications: NotificationEvent[];
  addNotification: (notification: NotificationEvent) => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
    })),
  clearNotifications: () => set({ notifications: [] }),
}));
