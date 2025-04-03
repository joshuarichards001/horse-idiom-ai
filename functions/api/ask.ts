export function onRequestGet(context) {
  const { request } = context;
  const { prompt } = request.json();

  return "Harry doesn't like your question: " + prompt;
}
