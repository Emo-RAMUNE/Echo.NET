"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomeMenu() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTime, setCurrentTime] = useState("");
  const [visitorCount, setVisitorCount] = useState(0);
  const [coordinates, setCoordinates] = useState("");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("自動再生がブロックされました:", error);
        });
      }
    }

    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleDateString() + " " + now.toLocaleTimeString()
      );

      const rawCoord = Array.from({ length: 12 }, () =>
        Math.floor(Math.random() * 10)
      ).join("");
      const coord = rawCoord.match(/.{1,3}/g)?.join(",") ?? rawCoord;
      setCoordinates(coord);
    }, 1000);

    setVisitorCount(Math.floor(Math.random() * 10000));

    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { label: "▶ Echo.NETとは", href: "/about" },
    { label: "▶ Project Emo-RAMUNE", href: "/project" },
    { label: "▶ A3について", href: "/A3" },
    { label: "▶ アーカイブ（作品）", href: "/Archive" },
    { label: "▶ メッセージ", href: "/login" },
    { label: "▶ 検索", href: "/search" },
  ];

  return (
    <main className="bg-blue-800 text-white min-h-screen flex flex-col items-start gap-6 p-4 md:p-8">

      {/* 右上ロゴ */}
      <div className="fixed top-2 right-3 w-20 h-auto z-30">
        <img
          src="/project_Emo_RAMUNE_logo.png"
          alt="Project Emo-RAMUNE"
          className="w-full h-auto"
        />
      </div>

      {/* 画像＋PVサムネをまとめる */}
      <div className="absolute top-1/2 right-4 md:right-1/3 transform -translate-y-1/2 z-10">

        {/* メイン画像 */}
        <img
          src="/AA.png"
          className="w-40 md:w-72 lg:w-96 h-auto"
        />

        {/* PVサムネ（左下に被せる） */}
        <a
          href="https://youtu.be/gByf0jzKbvg"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -bottom-6 -left-6 md:-bottom-20 md:-left-20 hover:scale-105 transition"
        >
          <img
            src="/thumbnail.png"
            alt="PV"
            className="w-40 md:w-40 lg:w-80 h-auto rounded-md shadow-lg border border-white/30"
          />
        </a>
      </div>

      {/* タイトル */}
      <h1 className="text-3xl mb-1 relative inline-block">
        Echo.NET
        <span className="absolute bottom-0 left-0 h-1 bg-cyan-400 w-full translate-y-1"></span>
      </h1>

      {/* 情報 */}
      <div className="text-xs opacity-70 mb-4 space-y-1">
        <p>現在時刻：{currentTime}</p>
        <p>量子訪問者数：{visitorCount}人</p>
        <p>■■■■■：{coordinates}</p>
      </div>

      {/* メニュー */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="w-full px-3 py-2 bg-cyan-500/30 hover:bg-cyan-400/40 rounded-md cursor-pointer">
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* 音楽 */}
      <audio ref={audioRef} src="/welcome.wav" />

      {/* フッター */}
      <div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
        このサイトはフィクションです。実在の人物・団体とは関係ありません。
      </div>

    </main>
  );
}
