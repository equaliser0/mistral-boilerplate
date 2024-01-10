'use client';

import { useCompletion } from 'ai/react';
import "../public/App.css";

export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
    error,
  } = useCompletion({
    api: '/api/completion',
  });
  return (
    <>
      <div className="bg">
        <div className="welcome-container">
          <h1 className="text-center" style={{fontFamily : "cursive" , fontSize : "bolder"}}>Welcome to Portugal</h1>
        </div>
        <div className="App" style={{marginTop : "130px"}}>
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
    </>
  );
}

// XXX
// <div className="flex justify-center items-center mx-auto bg-gray-900 w-screen h-screen max-w-md py-24">
//       <h1 className="rounded-lg text-6xl font-bold w-1/2 text-white md:text-xl pb-4">
//         Welcome to Protugual
//       </h1>
//       <div className="bg-white mx-auto w-1/2 h-[700px] max-w-md py-24 flex flex-col">
//         <h4 className="text-xl font-bold text-gray-900 md:text-xl pb-4">
//          Chat Section
//         </h4>
//         {error && (
//           <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
//             {error.message}
//           </div>
//         )}
//         <output>{completion}</output>
//         <form
//           onSubmit={handleSubmit}
//           className="fixed w-full max-w-xl bottom-0 mb-8 items-stretch flex"
//         >
//           <input
//             className="border border-gray-300 rounded m-2 shadow-xl p-2 flex-grow"
//             value={input}
//             placeholder="Say something..."
//             onChange={handleInputChange}
//           />
//           <button
//             disabled={isLoading}
//             type="submit"
//             className="inline-block bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded m-2 disabled:opacity-50"
//           >
//             Send
//           </button>
//           <button
//             disabled={!isLoading}
//             type="button"
//             onClick={stop}
//             className="inline-block bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded m-2 disabled:opacity-50"
//           >
//             Stop
//           </button>
//         </form>
//       </div>
//     </div>


// 'use client';
// import { fetchEventSource } from '@microsoft/fetch-event-source';
// import { FormEvent, useCallback, useState } from 'react';
//
// export const runtime = 'edge';
//
// export default function Home() {
//   const [stream, setStream] = useState(true);
//
//   const [input, setInput] = useState('');
//   const [output, setOutput] = useState('');
//   const [inflight, setInflight] = useState(false);
//   const onSubmit = useCallback(
//     async (e: FormEvent) => {
//       e.preventDefault();
//
//       // Prevent multiple requests at once
//       if (inflight) return;
//
//       // Reset output
//       setInflight(true);
//       setOutput('');
//
//       try {
//         if (stream) {
//           console.log('streaming');
//           // If streaming, we need to use fetchEventSource directly
//           await fetchEventSource(`/api/generate`, {
//             method: 'POST',
//             body: JSON.stringify({ input }),
//             headers: { 'Content-Type': 'application/json' },
//             onmessage(ev) {
//               setOutput((o) => o + ev.data);
//             },
//           });
//           setInput('');
//         } else {
//           // If not streaming, we can use the supabase client
//           const res = await fetch(`/api/generate`, {
//             method: 'POST',
//             body: JSON.stringify({ input }),
//           });
//           const data = await res.json();
//           setOutput(data.text);
//           setInput('');
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setInflight(false);
//       }
//     },
//     [input, stream, inflight]
//   );
//
//   return (
//     <main className="max-w-lg p-6 lg:p-20 mx-auto">
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           placeholder="Ask..."
//           value={input}
//           className="border py-2"
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <div>
//           <input
//             type="checkbox"
//             id="stream"
//             style={{ marginRight: 5 }}
//             checked={stream}
//             onChange={() => setStream((s) => !s)}
//           />
//           <label htmlFor="stream">Stream</label>
//         </div>
//         <button className="border px-2 py-1 rounded text-white bg-black">
//           Ask
//         </button>
//       </form>
//       <div style={{ width: 500 }}>Response: {output}</div>
//     </main>
//   );
// }
