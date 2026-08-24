const featured = [
  { kicker: "ESSENTIALS", title: <>Change Your<br />World View</>, app: "Microsoft Word", sub: "Create & Recreate...", tone: "from-cyan-500 via-sky-500 to-blue-900", art: "word" },
  { kicker: "OUR FAVORITES", title: <>A New Way to Play<br />Classic Games</>, app: "Apple Arcade", sub: "Game Room · Play Classic Clas...", tone: "from-fuchsia-500 via-pink-500 to-purple-900", art: "arcade" },
  { kicker: "TRY NOW", title: <>Get Behind the<br />Wheel of an F1 Car</>, app: "JigSpace", sub: "Unforgettable 3D...", tone: "from-red-600 via-rose-700 to-zinc-950", art: "f1" },
  { kicker: "INCREDIBLE INDIE", title: <>Search for Clues<br />Blackbox</>, app: "Blackbox", sub: "Think outside the...", tone: "from-violet-600 via-fuchsia-700 to-slate-950", art: "blackbox" },
];

const favorites = [
  { name: "Rec Room", desc: "Play & Create Games with Friends", icon: "bg-gradient-to-br from-amber-300 via-orange-500 to-red-600", mark: "R" },
  { name: "Complete HeartX", desc: "Hands-on medical learning", icon: "bg-gradient-to-br from-sky-400 to-blue-700", mark: "♥" },
  { name: "Simply Piano", desc: "Learn Songs F...", icon: "bg-gradient-to-br from-fuchsia-400 via-pink-500 to-indigo-700", mark: "♫" },
];

function Art({ kind }) {
  if (kind === "word") return <><div className="absolute -right-8 top-10 h-52 w-44 rotate-[-14deg] rounded-[28px] bg-white/90 shadow-2xl" /><div className="absolute right-12 top-20 text-8xl font-black text-blue-600">W</div><div className="absolute left-4 top-24 h-24 w-24 rounded-full border-[16px] border-white/70" /></>;
  if (kind === "arcade") return <><div className="absolute -right-6 top-10 h-40 w-52 rotate-[-15deg] rounded-[50%] border-[18px] border-white/70" /><div className="absolute right-20 top-[84px] h-12 w-12 rounded-full bg-indigo-700 shadow-lg" /><div className="absolute left-6 top-28 text-7xl text-white/80">♜</div></>;
  if (kind === "f1") return <><div className="absolute -right-8 top-24 h-24 w-72 -rotate-[15deg] rounded-full bg-red-500 shadow-2xl" /><div className="absolute right-20 top-36 h-16 w-16 rounded-full border-[12px] border-zinc-800 bg-zinc-300" /><div className="absolute right-2 top-24 h-16 w-16 rounded-full border-[11px] border-zinc-800 bg-zinc-300" /><div className="absolute left-5 top-16 text-6xl font-black italic text-white/80">F1</div></>;
  return <><div className="absolute right-4 top-10 grid grid-cols-3 gap-2 opacity-90">{Array.from({ length: 9 }).map((_, i) => <span key={i} className="h-9 w-9 rounded-xl bg-white/80 shadow-lg" />)}</div><div className="absolute left-8 top-24 h-24 w-24 rounded-full border-[15px] border-white/80" /></>;
}

function GetButton() { return <button className="rounded-full bg-white/90 px-3.5 py-1 text-[10px] font-bold tracking-wide text-blue-600">GET</button>; }

export default function Home() {
  return <main className="scene-background relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16 text-white">
    <aside className="absolute left-[calc(50%-40vw)] top-[47%] z-10 hidden -translate-y-1/2 flex-col gap-1.5 rounded-full border border-white/20 bg-slate-700/50 p-1.5 shadow-lg md:flex xl:left-[calc(50%-38.5rem)]">
      <button className="grid h-9 w-9 place-items-center rounded-full bg-blue-500 text-base font-bold">A</button>
      <button className="grid h-9 w-9 place-items-center rounded-full bg-white/12 text-base">✦</button>
      <button className="grid h-9 w-9 place-items-center rounded-full bg-white/12 text-base">⌕</button>
    </aside>

    <section className="relative w-full max-w-[1240px] -translate-y-[3vh] rounded-[30px] border border-white/20 bg-[#9a9189]/[.92] px-5 pb-6 pt-4 shadow-2xl md:w-[78vw] md:px-7 md:pb-6">
      <div className="absolute left-1/2 top-4 flex -translate-x-1/2 gap-1">{[0,1,2,3,4].map((dot) => <span key={dot} className={`h-1.5 w-1.5 rounded-full ${dot === 1 ? "bg-white" : "bg-white/40"}`} />)}</div>
      <div className="absolute right-5 top-3.5 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-orange-200 to-rose-500 text-[10px] font-bold shadow-md md:right-7">JD</div>

      <div className="mt-10 flex items-center gap-1.5"><h1 className="text-[22px] font-semibold tracking-tight md:text-[25px]">Get Started</h1><span className="text-lg">›</span></div>
      <div className="mt-3.5 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-4">
        {featured.map((card) => <article key={card.app} className={`featured-card relative isolate overflow-hidden rounded-[19px] bg-gradient-to-br ${card.tone} p-3.5 shadow-lg`}>
          <Art kind={card.art} />
          <div className="relative z-10"><p className="text-[9px] font-bold tracking-[.12em] text-white/80">{card.kicker}</p><h2 className="mt-1 text-[19px] font-bold leading-[1.07] tracking-tight">{card.title}</h2></div>
          <div className="absolute bottom-0 left-0 right-0 z-10 flex h-[92px] items-center gap-2 border-t border-white/10 bg-[#17191d]/90 p-3"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-white/90 text-[11px] font-black text-slate-800">{card.app[0]}</div><div className="min-w-0 flex-1"><p className="truncate text-[11px] font-bold">{card.app}</p><p className="truncate text-[9px] text-white/75">{card.sub}</p></div><GetButton /></div>
        </article>)}
      </div>

      <div className="mt-4 flex items-center gap-1.5"><h2 className="text-[19px] font-semibold tracking-tight md:text-[21px]">Apps and Games We Love</h2><span className="text-lg">›</span></div>
      <div className="mt-2.5 flex flex-col gap-2.5 lg:flex-row">
        {favorites.map((item) => <article key={item.name} className="flex h-[62px] min-w-0 flex-1 items-center gap-2.5 rounded-[14px] bg-[#5b5149]/95 px-3 py-2 shadow-md"><div className={`grid h-11 w-11 shrink-0 place-items-center rounded-[10px] ${item.icon} text-lg font-bold text-white shadow-md`}>{item.mark}</div><div className="min-w-0 flex-1"><h3 className="truncate text-[11px] font-bold">{item.name}</h3><p className="truncate text-[10px] text-white/75">{item.desc}</p></div><GetButton /></article>)}
      </div>
    </section>
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/90" /><span className="h-1.5 w-9 rounded-full bg-white/70" /></div>
  </main>;
}
