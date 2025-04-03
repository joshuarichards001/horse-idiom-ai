import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const fetchResponse = async () => {
    const res = await fetch("/api/ask", {
      method: "GET",
      body: JSON.stringify({ prompt }),
    })
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <main>
      <h1>Harry the Horse</h1>
      <textarea
        placeholder="Type here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={fetchResponse}>Ask Harry</button>
      <p>{response}</p>
    </main>
  );
}

export default App;
