"use client";

import Link from "next/dist/client/link";

export default function Log() {

  const xUrl = "https://x.com/emo_ramune"; // ←自分のURLに変更

  const handlePost = () => {
    const text = encodeURIComponent(
      "Echo.NET：log title 「」　#Project_Emo_RAMUNE"
    );
    const tweetUrl = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <main className="bg-blue-800 text-white min-h-screen p-8">
        {/* 右上ロゴ */}
<div className="fixed top-4 right-4 w-32 h-auto z-50">
  <img src="/project_Emo_RAMUNE_logo.png" alt="Project Emo-RAMUNE" className="w-full h-auto" />
</div>
        <div className="mb-6">
  <Link href="/">
    <button className="border px-3 py-1 hover:bg-white hover:text-black transition">
      ← メインメニューに戻る
    </button>
  </Link>
</div>

      <h1 className="mb-6">LOG</h1>

      {/* ログ表示 */}
      <p className="font-mono text-sm mb-8">
      「あなたの忘れたくないものはなんですか？」<br />
      <br />
      <br />
      ★「#Project_Emo_RAMUNE」をつけて、忘れたくないものの画像や言葉を乗せてXでポストし、あなたもプロジェクトに参加しませんか？<br />
      </p>

      {/* Xリンク */}
      <div className="mb-6">
        <a 
          href={xUrl} 
          target="_blank"
          className="underline opacity-80 hover:opacity-100"
        >
          ▶ Xでlogを確認する
        </a>
      </div>

      {/* 投稿ボタン */}
      <button
        onClick={handlePost}
        className="border px-4 py-2 hover:bg-white hover:text-black transition"
      >
        ▶ プロジェクトに参加する
      </button>
      <div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
  このサイトはフィクションです。実在の人物・団体とは関係ありません。
</div>
    </main>
  );
}
