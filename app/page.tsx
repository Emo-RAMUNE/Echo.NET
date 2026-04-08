"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      onClick={() => router.push("/home")}
      className="bg-blue-800 text-white h-screen flex flex-col items-center justify-center cursor-pointer"
    >
      <h1 className="text-2xl mb-4 animate-pulse">
        Connecting...
      </h1>
      <p className="opacity-70">
        記録者に直接■■、デバイスに■■しています。
      </p>
      <p className="mt-6 text-sm opacity-50">
        クリックして接続
      </p>
    </main>
  );
}