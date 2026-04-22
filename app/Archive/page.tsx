"use client";

import Link from "next/link";

export default function Music() {
  return (
    <main className="bg-blue-800 text-white min-h-screen p-8">
{/* 右上ロゴ */}
<div className="fixed top-4 right-4 w-32 h-auto z-50">
  <img src="/project_Emo_RAMUNE_logo.png" alt="Project Emo-RAMUNE" className="w-full h-auto" />
</div>
        

      {/* 説明 */}
      <div className="mb-8 max-w-2xl">
        <p className="opacity-80 leading-relaxed">
          A3は■■■■■した■■および■■を基に、断片的な出力を生成します。
          それらは人間における「夢」に近い在り方を示します。
        </p>
        <p className="opacity-60 mt-2">
          生成されたDRMはEcho.NETを通じて記録・送信されます。
        </p>
      </div>

      {/* タブ */}
      <div className="flex gap-4 mt-8 mb-16">

        <Link href="/Archive/peek">
          <button className="border px-3 py-1 hover:bg-white hover:text-black transition">
            覗いてみる
          </button>
        </Link>

        <Link href="/Archive/log">
          <button className="border px-3 py-1 hover:bg-white hover:text-black transition">
            log
          </button>
        </Link>

        <Link href="/Archive/important">
          <button className="border px-3 py-1 hover:bg-white hover:text-black transition">
            ■■■
          </button>
        </Link>

      </div>

      {/* 人気の動画 */}
      <div className="mb-16">
        <h2 className="mb-4 text-center">人気のDRM</h2>

        <div className="flex flex-col items-center gap-8">

          <a
            href="https://youtu.be/niYGujjMguw"
            target="_blank"
            className="opacity-80 hover:opacity-100 transition"
          >
            <img
              src="https://img.youtube.com/vi/niYGujjMguw/maxresdefault.jpg"
              style={{ width: "100%", maxWidth: "500px", border: "1px solid white" }}
            />
          </a>

        </div>
      </div>

      {/* おすすめ動画 */}
      <div className="mb-12">
        <h2 className="mb-4 text-center">おすすめDRM</h2>

        <div className="flex flex-col items-center gap-8">

          <a
            href="https://youtu.be/aDYQzthttLU?si=Ssla2RbpSEuqZofT"
            target="_blank"
            className="opacity-80 hover:opacity-100 transition"
          >
            <img
              src="https://img.youtube.com/vi/Ssla2RbpSEuqZofT/maxresdefault.jpg"
              style={{ width: "100%", maxWidth: "500px", border: "1px solid white" }}
            />
          </a>

        </div>
      </div>

     {/* SNS・連絡先 */}
<div className="border-t border-white pt-6 text-sm opacity-70 space-y-2">

<a 
  href="https://x.com/emo_ramune" 
  target="_blank"
  className="block hover:opacity-100"
>
  ♢Twitter：https://x.com/emo_ramune
</a>

<a 
  href="https://youtube.com/@emo_ramune" 
  target="_blank"
  className="block hover:opacity-100"
>
  ♢YouTube：https://youtube.com/@emo_ramune
</a>

<a 
  href="https://www.nicovideo.jp/user/88598996" 
  target="_blank"
  className="block hover:opacity-100"
>
  ♢ニコニコ動画：https://www.nicovideo.jp/user/88598996
</a>

<a 
  href="mailto:emoramusic22art@gmail.com"
  className="block hover:opacity-100"
>
  ♢Mail：emoramusic22art@gmail.com
</a>

</div>
<div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
  このサイトはフィクションです。実在の人物・団体とは関係ありません。
</div>
    </main>
  );
}
