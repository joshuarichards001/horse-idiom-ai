export function onRequestPost(context) {
  const { request } = context;
  const { prompt } = JSON.parse(request.body);

  return "Harry doesn't like your question: " + prompt;
}
