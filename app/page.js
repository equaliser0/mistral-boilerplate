"use client";
import React, { useState } from "react";
import { useChat } from 'ai/react';

const dummyResponseComplettion = () => {
  return 'test'
}

export default async function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  // const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState("");

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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
              />
            </form>
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://sdk.vercel.ai/docs/guides/providers/mistral
// 'use client';
// import { useChat } from 'ai/react';
// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();
//   return (
//     <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
//       {messages.map(m => (
        // <div key={m.id} className="whitespace-pre-wrap">
        //   {m.role === 'user' ? 'User: ' : 'AI: '}
        //   {m.content}
        // </div>
//       ))}
//       <form onSubmit={handleSubmit}>
//         <input
//           className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={handleInputChange}
//         />
//       </form>
//     </div>
//   );
// }
