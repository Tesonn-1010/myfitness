"use client";

import { useMemo, useState } from "react";

const plans = [
  {
    title: "胸・三頭筋",
    desc: "上半身前面のトレーニング",
    items: ["ベンチプレス 4x8", "ダンベルフライ 3x12", "ディップス 3x10"],
  },
  {
    title: "背中・二頭筋",
    desc: "上半身後面のトレーニング",
    items: [
      "ラットプルダウン 4x10",
      "ベントオーバーロウ 4x8",
      "アームカール 3x12",
    ],
  },
  {
    title: "脚・体幹",
    desc: "下半身と体幹の強化",
    items: [
      "スクワット 4x8",
      "ルーマニアンデッドリフト 3x10",
      "プランク 3x60秒",
    ],
  },
];

const meals = [
  {
    time: "朝食",
    desc: "1日のスタートを切る",
    items: ["オートミール", "プロテイン", "バナナ"],
  },
  {
    time: "昼食",
    desc: "メインの栄養補給",
    items: ["鶏むね肉", "玄米", "ブロッコリー"],
  },
  {
    time: "夕食",
    desc: "夜の栄養管理",
    items: ["サーモン", "サラダ", "さつまいも"],
  },
];

const muscleOptions = [
  { label: "01 胸", value: "胸" },
  { label: "02 背中", value: "背中" },
  { label: "03 脚", value: "脚" },
  { label: "04 肩", value: "肩" },
  { label: "05 腕", value: "腕" },
  { label: "06 腹筋", value: "腹筋" },
];

export default function Home() {
  const [selectedMuscle, setSelectedMuscle] = useState("胸");
  const [notes, setNotes] = useState("");
  const [doneAreas, setDoneAreas] = useState([]);

  const today = useMemo(() => new Date().toLocaleDateString("ja-JP"), []);

  const addLog = () => {
    if (!notes.trim()) return;
    setDoneAreas((current) => [
      { area: selectedMuscle, note: notes.trim(), date: today },
      ...current,
    ]);
    setNotes("");
  };

  return (
    <div>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            トレーニングの
            <br />
            記録をシンプルに
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            理想の体を作るために、毎日のトレーニングと食事を記録しよう
          </p>
        </div>
      </section>

      <section id="plan" className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-sky-300 font-semibold">
              トレーニング
            </p>
            <h2 className="text-5xl font-bold mt-2">今週のプラン</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, idx) => (
              <article
                key={plan.title}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-sky-400/50 transition-all duration-300"
              >
                <div className="absolute top-6 left-6 text-6xl font-bold text-white/10 group-hover:text-sky-400/20 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-slate-400">{plan.desc}</p>
                  <ul className="space-y-3 pt-4">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="text-sky-400 font-bold mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="meals"
        className="py-20 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"
      >
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-sky-300 font-semibold">
              栄養管理
            </p>
            <h2 className="text-5xl font-bold mt-2">今日の食事</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {meals.map((meal, idx) => (
              <article
                key={meal.time}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-sky-400/50 transition-all duration-300"
              >
                <div className="absolute top-6 left-6 text-6xl font-bold text-white/10 group-hover:text-sky-400/20 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-white">{meal.time}</h3>
                  <p className="text-sm text-slate-400">{meal.desc}</p>
                  <ul className="space-y-3 pt-4">
                    {meal.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="text-sky-400 font-bold mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="log" className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-sky-300 font-semibold">
              ログ
            </p>
            <h2 className="text-5xl font-bold mt-2">トレーニング記録</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 space-y-6">
              <h3 className="text-2xl font-bold">今日のトレーニング</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    鍛えた部位を選択
                  </label>
                  <select
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur px-4 py-3 text-white outline-none transition focus:border-sky-400/50"
                    value={selectedMuscle}
                    onChange={(event) => setSelectedMuscle(event.target.value)}
                  >
                    {muscleOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-slate-950 text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    トレーニング内容
                  </label>
                  <textarea
                    rows="5"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur px-4 py-3 text-white outline-none transition focus:border-sky-400/50"
                    placeholder="セット数、重量、感覚など"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                  />
                </div>

                <button
                  type="button"
                  onClick={addLog}
                  className="w-full rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-4 font-bold text-slate-950 transition hover:shadow-lg hover:shadow-sky-400/50"
                >
                  記録を追加
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
                <p className="text-sm uppercase tracking-[0.15em] text-slate-400 font-semibold">
                  本日の日付
                </p>
                <p className="text-4xl font-bold text-sky-300 mt-3">{today}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
                <p className="text-sm uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">
                  鍛えた部位一覧
                </p>
                <div className="flex flex-wrap gap-2">
                  {["胸", "背中", "脚", "肩", "腕", "腹筋"].map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-sky-400/10 border border-sky-400/30 px-3 py-1 text-sm text-sky-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {doneAreas.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">最近の記録</h3>
              <div className="space-y-3">
                {doneAreas.map((log, index) => (
                  <div
                    key={`${log.area}-${index}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-sm text-slate-400">{log.date}</span>
                      <span className="inline-block rounded-full bg-sky-400/20 border border-sky-400/50 px-3 py-1 text-sm font-semibold text-sky-300">
                        {log.area}
                      </span>
                    </div>
                    <p className="text-slate-200 whitespace-pre-wrap">
                      {log.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
