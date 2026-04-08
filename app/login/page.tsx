"use client";

import { useState, useEffect } from "react";

export default function Login() {
  const [stage, setStage] = useState(0);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 演出（時間で進む）
  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1500);
    const timer2 = setTimeout(() => setStage(2), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleLogin = () => {
    setError("パスワードが間違っています。接続IDとパスワードをご確認ください。");
  };

  return (
    <main className="bg-blue-800 text-white min-h-screen flex flex-col items-center justify-center p-8">
        {/* 右上ロゴ */}
<div className="fixed top-4 right-4 w-20 h-auto z-50">
  <img src="/project_Emo_RAMUNE_logo.png" alt="Project Emo-RAMUNE" className="w-full h-auto" />
</div>
        

      {/* ステージ0 */}
      {stage === 0 && (
        <p className="animate-pulse">
          ▶A3との対話ページにようこそ！
        </p>
      )}

      {/* ステージ1 */}
      {stage === 1 && (
        <p className="animate-pulse">
          ▶権限確認中…
        </p>
      )}

      {/* ステージ2 */}
      {stage === 2 && (
        <div className="text-center">

          <p className="mb-4">
            ▶確認完了、一般的な記録者と認定。パスワードを入力してください。
          </p>

          {/* パスワード入力 */}
          <input
            type="password"
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-blue-400 border border-white px-3 py-1 mb-4"
          />

          <br />

          <button
            onClick={handleLogin}
            className="border px-4 py-1 hover:bg-white hover:text-black transition"
          >
            Enter
          </button>

          {/* エラー表示 */}
          {error && (
            <p className="mt-4 text-sm opacity-60">
              {error}
            </p>
          )}

        </div>
      )}
      <div className="fixed bottom-2 right-2 text-xs opacity-25 text-white z-30">
  このサイトはフィクションです。実在の人物・団体とは関係ありません。
</div>
    </main>
  );
}