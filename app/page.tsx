"use client";

import { useState } from "react";

const ICON_SECTIONS = [
  {
    id: "about",
    label: "About",
    marker: "A",
    title: "About",
    description:
      "这里代表 About 区块，可以放艺术家的整体介绍、创作背景与理念。",
  },
  {
    id: "works",
    label: "Works",
    marker: "W",
    title: "Works",
    description:
      "这里代表 Works 区块，用来承载作品列表、系列入口或单件作品的链接。",
  },
  {
    id: "events",
    label: "Events",
    marker: "E",
    title: "Events",
    description:
      "这里代表 Events 区块，记录展览、放映、演出或工作坊等时间线事件。",
  },
  {
    id: "shop",
    label: "Shop",
    marker: "S",
    title: "Shop",
    description:
      "这里代表 Shop 区块，可以链接到电商平台、印刷品或限量作品的购买入口。",
  },
  {
    id: "contact",
    label: "Contact",
    marker: "C",
    title: "Contact",
    description:
      "这里代表 Contact 区块，用来放邮箱、社交账号以及合作联系的方式说明。",
  },
];

export default function HomePage() {
  const [activeId, setActiveId] = useState<string>(ICON_SECTIONS[0].id);
  const active = ICON_SECTIONS.find((item) => item.id === activeId)!;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl space-y-10">
        <section className="grid gap-10 md:grid-cols-[1.3fr,1.7fr] items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Dirty Monkey
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              用一组抽象的可动节点，
              <br className="hidden md:block" />
              把 About / Works / Events / Shop / Contact 藏在这里。
            </h1>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-xl">
              每一个节点都是一个抽象入口，目前只定义区块名称和动效关系，
              之后可以再为它们设计更具体的 icon 和视觉语言。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {ICON_SECTIONS.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="group relative flex flex-col items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-5 shadow-[0_0_25px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-zinc-500/70 hover:bg-zinc-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/70"
                >
                  <span
                    className={`icon-float flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-base font-semibold tracking-widest shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                      isActive ? "scale-110" : "opacity-90"
                    }`}
                  >
                    {item.marker}
                  </span>
                  <span
                    className={`text-xs md:text-sm font-medium tracking-wide text-zinc-200 transition-colors ${
                      isActive ? "text-rose-300" : "text-zinc-300"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-rose-500/0 via-rose-500/0 to-rose-500/0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 px-5 py-6 md:px-7 md:py-7">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">
            {active.label}
          </p>
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
            {active.title}
          </h2>
          <p className="text-sm md:text-base text-zinc-200 leading-relaxed max-w-3xl">
            {active.description}
          </p>
        </section>
      </div>
    </main>
  );
}
