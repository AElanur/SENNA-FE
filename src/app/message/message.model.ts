export interface Message {
  id?: number;
  chat_id?: number;
  user_id?: number;
  content: string;
  timestamp?: string;
  sender_type?: string;
}
