import Image from "next/image"; // ←① 一番上に書く

export default function About() {
  return (
    <main className="bg-blue-800 text-white min-h-screen p-8">
      {/* 右上ロゴ */}
<div className="fixed top-2 right-3 w-20 h-auto z-50">
  <img src="/project_Emo_RAMUNE_logo.png" alt="Project Emo-RAMUNE" className="w-full h-auto" />
</div>
      

      <h1 className="text-3xl mb-6">Echo.NETについて</h1>
      <br />

      <p className="mb-4 leading-relaxed">
  <span className="opacity-80">
    　Echo.NETは、■■された■■と■■を■■■■■するための時空間通信ネットワークです。
  </span>
  <br />
  <span className="opacity-50 text-sm">
    　＞ 現在、これ以上の情報を開示する権限はありません。
  </span>
</p>

      {/* ↓② ここに書く */}
      <div className="mt-8 flex justify-center">
        <Image
          src="/EchoNETProgram.png"
          alt="未開示"
          width={600}
          height={400}
        />
      </div>
      <div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
  このサイトはフィクションです。実在の人物・団体とは関係ありません。
</div>
    </main>
  );
}
