export async function onRequest(context) {
  const { request } = context;
  const body = await request.json();

  const prompt = body.prompt;

  return new Response(JSON.stringify({ response: prompt }), {
    headers: { "Content-Type": "application/json" },
  });
}
