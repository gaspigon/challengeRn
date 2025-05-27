import { create } from "zustand";
import { Document } from "@/shared/types/document";
import uuid from "react-native-uuid";


type ViewMode = "list" | "grid";

interface DocumentStore {
  documents: Document[];
  setDocuments: (docs: Document[]) => void;
  addDocument: (title: string, version: string) => void;
  viewMode: ViewMode;
  toggleViewMode: () => void;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],
  setDocuments: (docs) => set({ documents: docs }),

  viewMode: "list",
  toggleViewMode: () =>
    set((state) => ({
      viewMode: state.viewMode === "list" ? "grid" : "list",
    })),
    addDocument: (title, version) => {
  const newDocument: Document = {
    ID: uuid.v4().toString(),
    Title: title,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString(),
    Version: version,
    Attachments: [],
    Contributors: [
      {
        ID: uuid.v4().toString(),
        Name: "Gaspar Gonzalez", // Example contributor
      },
    ],
  };
        set((state) => ({
      documents: [newDocument, ...state.documents],
    }));
  }
}));
