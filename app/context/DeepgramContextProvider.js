"use client";

import { createContext, useContext, useState, useRef } from "react";
import { getAuthToken, sendKeepAliveMessage } from "app/utils/deepgramUtils";

const DeepgramContext = createContext();

const DeepgramContextProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const [socketState, setSocketState] = useState(-1);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  const [rateLimited, setRateLimited] = useState(false);
  const keepAlive = useRef();
  const maxReconnectAttempts = 5;

  const connectToDeepgram = async () => {
    if (reconnectAttempts >= maxReconnectAttempts) {
      console.log("Max reconnect attempts reached.");
      // we don't actually know this is a rate limit, but want to show this anyways
      setRateLimited(true);
      return;
    }

    setSocketState(0); // connecting

    console.log("🔌 Starting WebSocket connection...");
    const authToken = await getAuthToken();
    console.log("🎫 Auth token for WebSocket:", authToken);
    
    const wsUrl = "wss://agent.deepgram.com/v1/agent/converse";
    const protocols = ["bearer", authToken];
    console.log("🌐 WebSocket URL:", wsUrl);
    console.log("📝 WebSocket protocols:", protocols);

    const newSocket = new WebSocket(wsUrl, protocols);
    console.log("🚀 WebSocket created, ready state:", newSocket.readyState);

    const onOpen = () => {
      setSocketState(1); // connected
      setReconnectAttempts(0); // reset reconnect attempts after a successful connection
      console.log("✅ WebSocket connected successfully!");
      console.log("🔗 WebSocket ready state:", newSocket.readyState);
      keepAlive.current = setInterval(sendKeepAliveMessage(newSocket), 10000);
    };

    const onError = (err) => {
      setSocketState(2); // error
      console.error("❌ WebSocket error details:", err);
      console.error("🔗 WebSocket ready state:", newSocket.readyState);
      console.error("🌐 WebSocket URL:", newSocket.url);
      console.error("📝 WebSocket protocol:", newSocket.protocol);
    };

    const onClose = (event) => {
      clearInterval(keepAlive.current);
      setSocketState(3); // closed
      console.error("🔌 WebSocket closed. Details:");
      console.error("   Code:", event.code);
      console.error("   Reason:", event.reason);
      console.error("   Was Clean:", event.wasClean);
      console.error("   Ready State:", newSocket.readyState);
      
      // Common WebSocket close codes
      const closeCodes = {
        1000: "Normal closure",
        1001: "Going away",
        1002: "Protocol error",
        1003: "Unsupported data",
        1004: "Reserved",
        1005: "No status received",
        1006: "Abnormal closure",
        1007: "Invalid frame payload data",
        1008: "Policy violation",
        1009: "Message too big",
        1010: "Mandatory extension",
        1011: "Internal server error",
        1015: "TLS handshake failure",
        4001: "Unauthorized",
        4003: "Forbidden",
        4008: "Rate limited",
        4009: "Conflict"
      };
      
      console.error("   Close Code Meaning:", closeCodes[event.code] || "Unknown");
      
      console.info("🔄 Attempting to reconnect in 3 seconds...");
      setTimeout(connectToDeepgram, 3000); // reconnect after 3 seconds
      setReconnectAttempts((attempts) => attempts + 1);
    };

    const onMessage = () => {
      // console.info("message", e);
    };

    newSocket.binaryType = "arraybuffer";
    newSocket.addEventListener("open", onOpen);
    newSocket.addEventListener("error", onError);
    newSocket.addEventListener("close", onClose);
    newSocket.addEventListener("message", onMessage);

    setSocket(newSocket);
  };

  return (
    <DeepgramContext.Provider
      value={{
        socket,
        socketState,
        rateLimited,
        connectToDeepgram,
      }}
    >
      {children}
    </DeepgramContext.Provider>
  );
};

function useDeepgram() {
  return useContext(DeepgramContext);
}

export { DeepgramContextProvider, useDeepgram };
