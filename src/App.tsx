import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const fetchResponse = async () => {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (res.ok) {
      const data = await res.json();
      setResponse(data.response);
    } else {
      setResponse("Error fetching response");
    }
  };

  return (
    <main>
      <h1 className="text-4xl">Harry the Horse</h1>
      <textarea
        placeholder="Type here..."
        className="textarea"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className="btn" onClick={fetchResponse}>Ask Harry</button>
      <p>{response}</p>
    </main>
  );
}

export default App;
