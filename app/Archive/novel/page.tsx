"use client";

import Link from "next/link";

export default function NovelMenu() {
  return (
    <main className="bg-blue-800 text-white min-h-screen p-8">
{/* 右上ロゴ */}
<div className="fixed top-4 right-4 w-32 h-auto z-50">
  <img src="/project_Emo_RAMUNE_logo.png" alt="Project Emo-RAMUNE" className="w-full h-auto" />
</div>
      {/* タイトル */}
      <h1 className="text-3xl mb-8">小説</h1>

      {/* 説明 */}
      <p className="opacity-70 mb-12 max-w-2xl">
        A3が生成した物語の断片。
        DRMによって記録された■■から、A３が自ら執筆したもの。
      </p>

      {/* 小説一覧 */}
      <div className="flex flex-col gap-6">

        <Link href="/Archive/novel/Star">
          <div className="border p-4 hover:bg-white hover:text-black transition cursor-pointer">
            <h2>シィアの星</h2>
            <p className="text-sm opacity-70">いつか星になる星の子の物語</p>
          </div>
        </Link>

      </div>

      {/* 戻る */}
      <div className="mt-16">
        <Link href="/Archive">
          <button className="border px-4 py-2 hover:bg-white hover:text-black transition">
            ◀ 戻る
          </button>
        </Link>
      </div>

    </main>
  );
}