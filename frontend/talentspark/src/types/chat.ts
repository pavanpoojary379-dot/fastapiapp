export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  session_id: string | "default";
}

export interface ChatResponse {
  reply: string;
  session_id: string;
}