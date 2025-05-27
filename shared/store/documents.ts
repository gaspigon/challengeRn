import { create } from "zustand";
import { Document } from "@/shared/types/document";

type ViewMode = "list" | "grid";

interface DocumentStore {
  documents: Document[];
  setDocuments: (docs: Document[]) => void;

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
}));
