'use client';

import { useCompletion } from 'ai/react';

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
    <div className="flex justify-center items-center mx-auto bg-gray-900 w-screen h-screen max-w-md py-24">
      <h1 className="rounded-lg text-6xl font-bold w-1/2 text-white md:text-xl pb-4">
        Welcome to Protugual
      </h1>
      <button
        disabled={!isLoading}
        type="button"
        onClick={stop}
        className="inline-block bg-gray-100 hover:bg-gray-300 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded m-2 disabled:opacity-50"
      >
        Stop
      </button>
    </div>
  );
}

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
