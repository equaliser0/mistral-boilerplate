import { OpenAIStream, StreamingTextResponse } from 'ai';

// Note: There are no types for the Mistral API client yet.
// @ts-ignore
import MistralClient from '@mistralai/mistralai';

const client = new MistralClient(process.env.MISTRAL_API_KEY || '');

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  const promtTemplate = `You are a protoguese language speaker, always keep in mind to correct me, if the grammar or spelling ins not correct. In case I use english, please always give me additionally a translation. ${ prompt }`

  const response = await client.chatStream({
    model: 'mistral-tiny',
    stream: true,
    max_tokens: 1000,
    // use the chat completion API but only send a single prompt:
    messages: [{ role: 'user', content: promtTemplate }],
  });

  // Convert the response into a friendly text-stream. The Mistral client responses are
  // compatible with the Vercel AI SDK OpenAIStream adapter.
  const stream = OpenAIStream(response, {
    onStart: async () => {
      // This callback is called when the stream starts
      // You can use this to save the prompt to your database
      await savePromptToDatabase(prompt);
    },
    onToken: async (token: string) => {
      // This callback is called for each token in the stream
      // You can use this to debug the stream or save the tokens to your database
      console.log(token);
    },
    onCompletion: async (completion: string) => {
      // This callback is called when the stream completes
      // You can use this to save the final completion to your database
      // await saveCompletionToDatabase(completion); //TODO
    },
  });
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
