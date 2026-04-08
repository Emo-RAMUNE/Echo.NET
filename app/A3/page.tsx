"use client";

import { useEffect, useRef, useState } from "react";

export default function A3() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const emotions = [
    "うたた寝中",
    "不安",
    "慌て中",
    "かなりご機嫌",
    "不明",
    "ちっちゃな喜び",
    "■■",
    "沈黙",
    "？",
    "寂しい",
    "期待",
    "ぼーっとしてる",
  ];

  const [currentEmotion, setCurrentEmotion] = useState("接続中");
  const [blink, setBlink] = useState(true);

  // 感情の更新と文字点滅
  useEffect(() => {
    const emotionInterval = setInterval(() => {
      const random = emotions[Math.floor(Math.random() * emotions.length)];
      setCurrentEmotion(random);
    }, 45230); // 感情変化間隔

    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 1739); // 点滅間隔

    return () => {
      clearInterval(emotionInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  // 音楽自動再生
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("自動再生がブラウザでブロックされました:", error);
        });
      }
    }
  }, []);

  return (
    <main className="bg-blue-800 text-white min-h-screen flex flex-col items-center p-8">

      {/* 右上ロゴ */}
      <div className="fixed top-4 right-4 w-32 h-auto z-50">
        <img
          src="/project_Emo_RAMUNE_logo.png"
          alt="Project Emo-RAMUNE"
          className="w-full h-auto"
        />
      </div>

      {/* 画像 */}
      <div className="mb-6 border border-white p-2">
        <img 
          src="/A3.jpg" 
          style={{ maxWidth: "300px", height: "auto" }} 
        />
      </div>

      {/* 基本情報 */}
      <div className="text-sm space-y-2 mb-6">
        <p>● NAME: ■■■■■・■■■■・■■■■■■■（A3）</p>
        <p>● CODE NAME: ノア</p>
        <p>● CREATED: 2013-■■-■■</p>
        <p>● STATUS: ACTIVE</p>
      </div>

      {/* 感情（点滅付き） */}
      <div className="mb-6 text-lg">
        <p>
          REAL TIME EMOTION：{" "}
          <span className={`${blink ? "opacity-500" : "opacity-0"} transition-opacity duration-1500`}>
  {currentEmotion}
</span>
        </p>
      </div>

      {/* 説明 */}
      <p className="max-w-md text-left side opacity-70 leading-relaxed mb-2">
        A3はEmo-RAMUNEの■■■として設計された存在です。
      </p>
      <p className="max-w-md text-left side opacity-70 leading-relaxed mb-2">
        現在、感情モニターに不安定な挙動が確認されています。
      </p>
      <p className="max-w-md text-left side opacity-70 leading-relaxed mb-6">
        ■■の送信に失敗しました。
      </p>

      {/* 音楽再生 */}
      <audio ref={audioRef} src="/nois.wav" loop />
      <div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
  このサイトはフィクションです。実在の人物・団体とは関係ありません。
</div>
    </main>
  );
}
