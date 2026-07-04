import api from "./api";
import type { ChatRequest, ChatResponse } from "../types/chat";

export const sendChatMessage = async (payload: ChatRequest): Promise<ChatResponse> => {
  const { data } = await api.post<ChatResponse>("/chat/", payload);
  return data;
};