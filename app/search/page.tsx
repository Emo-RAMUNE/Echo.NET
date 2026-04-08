"use client";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("記録者によるEcho.NET内のデータ検索は許可されていません。");
  };
  

  return (
    <div className="mt-8 mb-12 max-w-md">
      <form onSubmit={handleSearch} className="flex gap-３">
        <input
          type="text"
          placeholder="検索ワードを入力"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-3 py-1 border border-white bg-blue-300 text-white"
          
        />
        <button
          type="submit"
          className="px-3 py-1 border hover:bg-white hover:text-black transition"
        >
          検索
        </button>
      </form>
      {message && (
        <p className="mt-2 text-sm opacity-80">{message}</p>
      )}
    </div>
    
  );
}