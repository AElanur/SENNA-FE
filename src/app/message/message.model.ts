export interface Message {
  id?: number;            // Optional if not set when sending
  sender?: string;
  recipient?: string;
  content: string;
  timestamp?: string;     // Optional if set by backend
}
