import Image from "next/image";

export default function Project() {
  return (
    <main className="bg-blue-800 text-white min-h-screen flex flex-col items-center justify-center p-8">
        {/* 右上ロゴ */}
<div className="fixed top-4 right-4 w-32 h-auto z-50">
  <img src="/project_Emo_RAMUNE_logo.png" alt="Project Emo-RAMUNE" className="w-full h-auto" />
</div>
        

      <p className="mb-4 text-sm opacity-50">
        &gt;&gt; FILE: PROJECT_EMO_RAMUNE_OVERVIEW  
        <br />
        &gt;&gt; STATUS: RESTRICTED
      </p>

      <div className="border border-white p-2 opacity-80 hover:opacity-100 transition">
        <Image
          src="/Project_Emo_RAMUNE.png"
          alt="Project Report"
          width={800}
          height={1200}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <p className="mt-4 text-xs opacity-40">
        ※このファイルは制限されたアクセス権限下で表示されています
      </p>
      <div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
  このサイトはフィクションです。実在の人物・団体とは関係ありません。
</div>
    </main>
  );
}