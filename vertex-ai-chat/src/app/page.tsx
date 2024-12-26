"use client";

import { useState } from "react";
import ChatForm from "@/components/ChatForm";
import MessageList from "@/components/MessageList";
// import { chatWithVertexAI } from "../lib/VertexAi";

export default function Home() {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);

  const handleSend = async (message: string) => {
    setMessages((prev) => [...prev, { user: "You", text: message }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, { user: "AI", text: data.response }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { user: "AI", text: "エラーが発生しました。" }]);
    }
  };

  return (
    <div>
      <MessageList messages={messages} />
      <ChatForm onSend={handleSend} />
    </div>
  );
}
