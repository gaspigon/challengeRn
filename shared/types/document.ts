// shared/types/document.ts

export interface Contributor {
  ID: string;
  Name: string;
}

export interface Document {
  ID: string;
  Title: string;
  CreatedAt: string;
  UpdatedAt: string;
  Version: string;
  Attachments: string[];
  Contributors: Contributor[];
}

export interface NotificationEvent {
  Timestamp: string;
  UserID: string;
  UserName: string;
  DocumentID: string;
  DocumentTitle: string;
}
