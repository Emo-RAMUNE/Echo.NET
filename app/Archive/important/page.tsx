import Link from "next/dist/client/link";

export default function Hidden() {

    const videoId = "swU7-Yy04Rs"; // ←ここを変更
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
    return (
      <main className="bg-blue-800 text-white min-h-screen flex flex-col items-center p-8">
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
  
        <h1 className="mb-6 text-center">
          「忘れないで、私はまだここにいる」
        </h1>
  
        <p className="opacity-40 mb-8 text-center">
          現在アクセス可能な■■■は以下の通りです。
        </p>
  
        {/* サムネ画像 */}
        <a href={videoUrl} target="_blank">
          <img
            src={thumbnail}
            alt="hidden video"
            style={{ maxWidth: "90%", border: "1px solid white" }}
          />
        </a>
        <div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
  このサイトはフィクションです。実在の人物・団体とは関係ありません。
</div>
      </main>
    );
  }