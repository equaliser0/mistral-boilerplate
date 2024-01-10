"use client";
import React, { useState } from "react";

export default async function Home() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, user: "You" }]);
      setNewMessage("");
    }
  };
  return (
    <div className="bg">
      <div className="welcome-container">
        <h1
          className="text-center"
          style={{ fontFamily: "cursive", fontSize: "bolder" }}
        >
          Welcome to Portugal
        </h1>
      </div>
      <div className="App" style={{ marginTop: "130px" }}>
        <div className="ChatWindow">
          <div className="ChatMessages">
            {messages.map((message, index) => (
              <div key={index} className="Message">
                <strong>{message.user}:</strong> {message.text}
              </div>
            ))}
          </div>
          <div className="ChatInput">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
