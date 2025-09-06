
import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    // console.log(query);
    const res = await fetch("http://localhost:5000/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResults(data);
    setLoading(false);
  }

  return (
    <div className="flex flex-col h-screen w-full bg-white justify-center items-center text-gray-400 text-center gap-16font-[family-name:var(--font-geist-sans)]">
    <div className="p-4">

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="border p-2 rounded mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>

      {loading && <p>Loading...</p>}

      {results && (
        <div className="mt-4">
          <h2 className="font-bold">AI Summary</h2>
          <p>{results.summary}</p>

          <h2 className="font-bold mt-4">Raw Products</h2>
          <ul>
            {results.products.map((p: any, i: number) => (
              <li key={i}>
                {p.items.title} - {p.price} (<a href={p.link}>View</a>)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}
