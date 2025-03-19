"use client";

import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Match } from "../types/Match";

const WS_URL = process.env.EXPO_PUBLIC_WS_URL || Constants.expoConfig?.extra?.WS_URL;

export const useWebSocket = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!WS_URL) {
      setError("Ошибка: WebSocket URL не найден.");
      return;
    }

    const socket = new WebSocket(WS_URL);

    socket.onopen = () => {}; 

    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);

        if (parsedData.type === "update_matches" && Array.isArray(parsedData.data)) {
          setMatches(parsedData.data);
        } else {
          console.warn("⚠️ Неожиданная структура данных:", parsedData);
        }
      } catch (err) {
        console.error("❌ Ошибка обработки WebSocket-сообщения:", err); 
      }
    };

    socket.onerror = (err) => {
      setError("Ошибка соединения с WebSocket.");
    };

    socket.onclose = () => {};

    return () => socket.close();
  }, []); 

  return { matches, error };
};
