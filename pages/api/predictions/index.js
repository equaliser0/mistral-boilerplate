import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
    );
  }

  // const prediction = await replicate.predictions.create({
  //   // Pinned to a specific version of Stable Diffusion
  //   // See https://replicate.com/stability-ai/sdxl
  //   version: "8beff3369e81422112d93b89ca01426147de542cd4684c244b673b105188fe5f",
  //
  //   // This is the text prompt that will be submitted by a form on the frontend
  //   input: { prompt: req.body.prompt },
  // });

  const input = {
    prompt: req.body.prompt
  };

  const model = "istralai/mistral-7b-instruct-v0.2:79052a3adbba8116ebc6697dcba67ad0d58feff23e7aeb2f103fc9aa545f9269";
  const output = await replicate.run(model, { input });
  const string = output.join('');

  console.log(string);
  // console.log(await replicate.stream("mistralai/mistral-7b-instruct-v0.2", { input }))

  // for await (const event of replicate.stream("mistralai/mistral-7b-instruct-v0.2", { input })) {
  //   process.stdout.write(event.toString());
  // };

  // if (prediction?.error) {
  //   res.statusCode = 500;
  //   res.end(JSON.stringify({ detail: prediction.error }));
  //   return;
  // }
  //
  // res.statusCode = 201;
  // res.end(JSON.stringify(prediction));
}
