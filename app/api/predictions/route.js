export async function POST(req) {
  const response = await fetch("https://api.replicate.com/v1/models/mistralai/mistral-7b-instruct-v0.2/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/stability-ai/sdxl
      version: "79052a3adbba8116ebc6697dcba67ad0d58feff23e7aeb2f103fc9aa545f9269",

      // This is the text prompt that will be submitted by a form on the frontend
      input: { prompt: req.body.prompt },
    }),
  });
  console.log(response);

  if (response.status !== 201) {
    let error = await response.json();
    // res.statusCode = 500;
    return JSON.stringify({ detail: error.detail });
  }
  const prediction = await response.json();
  // res.statusCode = 201;
  return JSON.stringify(prediction)
}
