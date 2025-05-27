import { api } from "@/shared/services/api";
import { Document } from "@/shared/types/document";

export const getDocuments = async (): Promise<Document[]> => {
  const response = await api.get<Document[]>("/documents");
  //console.log("📄 Documents from backend:", response.data);
  return response.data;
};
