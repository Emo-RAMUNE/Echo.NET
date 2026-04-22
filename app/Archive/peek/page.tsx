"use client";

import Link from "next/dist/client/link";

export default function Peek() {

  const videos = [
    "https://youtu.be/oQ97kxJT0ng",
    "https://youtu.be/Zud1ZnRmIi0",
    "https://youtu.be/8gIgk87OOTg",
    "https://youtu.be/bjomoV3-5X8",
    "https://youtu.be/15_epj1Auxc",
    "https://youtu.be/BAohQXVIJQY",
    "https://youtu.be/6CDwyUYbdu8",
    "https://youtu.be/sz40vclj44I",
    "https://youtu.be/Y8un0PHHg-Q",
   "https://youtu.be/smuRktXr2s0",
   "https://youtu.be/_K9kunFCGMo", 
   "https://youtu.be/1_jFNITKJaw",
   "https://youtu.be/niYGujjMguw",
   "https://youtu.be/yipRDI1bb8s",
   "https://youtu.be/m9vOV_nA5DM",
   "https://youtu.be/tsp3oy815p8",
   "https://www.youtube.com/watch?v=aDYQzthttLU",
  ];

  const handleClick = () => {
    const random = videos[Math.floor(Math.random() * videos.length)];
    window.location.href = random;
  };

  return (
    <main className="bg-blue-800 text-white min-h-screen flex flex-col items-center justify-center p-8">
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

      <h1 className="mb-6">覗いてみる</h1>

      <button
        onClick={handleClick}
        className="border px-4 py-2 hover:bg-white hover:text-black transition"
      >
        ▶ CONNECT
      </button>

      <p className="mt-6 opacity-60 text-sm">
        ※どの■■に接続されるかは不定です
      </p>
      <p className="mt-6 opacity-60 text-sm">
  &gt;&gt; DRMを選択中…<br />
  &gt;&gt; 不安定な■■を検出
</p>
<div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
  このサイトはフィクションです。実在の人物・団体とは関係ありません。
</div>
    </main>
  );
}
