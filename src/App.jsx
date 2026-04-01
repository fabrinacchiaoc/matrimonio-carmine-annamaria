export default function WeddingSite() {
  const timeline = [
    { left: '17:30', leftTitle: 'Arrivo ospiti', right: '18:00', rightTitle: 'Cerimonia' },
    { left: '18:45', leftTitle: 'Fine rito', right: '19:15', rightTitle: 'Trasferimento in location' },
    { left: '19:45', leftTitle: 'Aperitivo', right: '20:30', rightTitle: 'Inizio ricevimento' },
    { left: '23:00', leftTitle: 'Taglio torta', right: 'Fino a tardi', rightTitle: 'Musica e festeggiamenti' },
  ];

  return (
    <div className="min-h-screen bg-[#f4ece8] text-[#4d413c]">
      <div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f0ec] shadow-[0_12px_50px_rgba(80,60,50,0.08)]">
        <section className="relative overflow-hidden px-7 pb-10 pt-8 text-center">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute -left-12 top-16 h-44 w-44 rounded-full bg-[#ebe0da] blur-3xl" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white blur-3xl" />
          </div>

          <div
            className="relative z-10 mx-auto inline-flex h-16 w-16 items-center justify-center border border-[#cdbfb7] text-[1.7rem] font-light tracking-wide text-[#6a5b54]"
            style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
          >
            CA
          </div>

          <div className="relative z-10 mt-10">
            <div className="mx-auto w-full max-w-[280px] text-[#8b8079]">
              <svg viewBox="0 0 300 180" className="w-full">
                <g fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M42 138 L42 62 L74 62 L74 138" />
                  <path d="M74 138 L74 36 L98 36 L98 138" />
                  <path d="M98 138 L258 138" />
                  <path d="M110 138 L110 90 L150 52 L192 90 L192 138" />
                  <path d="M104 90 L150 46 L198 90" />
                  <path d="M122 138 L122 100 L150 74 L178 100 L178 138" />
                  <path d="M120 100 L150 72 L180 100" />
                  <circle cx="150" cy="94" r="14" />
                  <circle cx="150" cy="94" r="6" />
                  <circle cx="150" cy="64" r="7" />
                  <path d="M56 72 L56 126" />
                  <path d="M62 72 L62 126" />
                  <path d="M68 72 L68 126" />
                  <path d="M86 50 L86 126" />
                  <path d="M92 50 L92 126" />
                  <path d="M134 138 L134 110 L150 96 L166 110 L166 138" />
                </g>
              </svg>
            </div>
          </div>

          <div className="relative z-10 mt-6">
            <p className="text-[3.25rem] leading-[0.92] tracking-tight text-[#423633]" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
              Carmine <span className="mx-1 text-[#8f817a]">&</span><br />
              Annamaria
            </p>
            <p className="mt-5 text-[0.92rem] tracking-[0.04em] text-[#6f625c]">
              vi invitano a celebrare il loro matrimonio
            </p>
          </div>
        </section>

        <section className="relative px-7 pb-10 text-center">
          <div className="absolute right-4 top-6 h-24 w-24 rounded-full border border-[#d9cdc6] opacity-70" />
          <div className="absolute right-8 top-10 h-16 w-16 rounded-full bg-[#6d7c66] opacity-85 shadow-inner" />
          <div className="absolute right-6 top-0 text-[70px] leading-none text-[#d9cdc6]">﹏</div>

          <div className="mb-7 flex items-end justify-center gap-4 text-[#403632]">
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.22em]">Lunedì</p>
            </div>
            <div className="border-x border-[#ccbfb7] px-5">
              <div className="text-[3rem] leading-none">24</div>
              <div className="text-sm uppercase tracking-[0.18em]">Agosto</div>
            </div>
            <div className="pb-2 text-lg tracking-[0.1em]">2026</div>
          </div>

          <p className="text-sm uppercase tracking-[0.25em] text-[#5d524d]">Ore 18:00</p>
          <p className="mt-6 text-sm italic text-[#7b6d66]">presso</p>

          <div className="mt-4 space-y-5 text-left">
            <a href="https://share.google/0QXaiHoXCIP8NKami" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-[#e2d6cf] bg-white/75 p-3 shadow-[0_8px_24px_rgba(80,60,50,0.05)] transition hover:-translate-y-0.5">
              <img src="/chiesa.jpg" alt="Chiesa" className="h-16 w-16 shrink-0 rounded-xl object-cover shadow-sm" />
              <div>
                <p className="text-[0.8rem] uppercase tracking-[0.18em] text-[#8f817a]">Cerimonia</p>
                <p className="font-serif text-[1.2rem] leading-tight">Chiesa del Santissimo Corpo di Cristo</p>
                <p className="mt-1 text-xs italic text-[#7f726a]">tocca per aprire la mappa</p>
              </div>
            </a>

            <a href="https://maps.app.goo.gl/dJaZpEufGdopggfv5" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-[#e2d6cf] bg-white/75 p-3 shadow-[0_8px_24px_rgba(80,60,50,0.05)] transition hover:-translate-y-0.5">
              <img src="/locale.jpg" alt="Chiesa" className="h-16 w-16 shrink-0 rounded-xl object-cover shadow-sm" />
              <div>
                <p className="text-[0.8rem] uppercase tracking-[0.18em] text-[#8f817a]">Ricevimento</p>
                <p className="font-serif text-[1.2rem] leading-tight">Tenuta San Domenico</p>
                <p className="mt-1 text-xs italic text-[#7f726a]">tocca per aprire la mappa</p>
              </div>
            </a>
          </div>
        </section>

        <section className="relative overflow-hidden px-7 pb-10 pt-3">
          <div className="absolute left-0 top-14 h-32 w-20 opacity-40">
            <div className="h-full w-full rounded-r-full bg-[radial-gradient(circle_at_top_left,_#e7dbd4,_transparent_68%)]" />
          </div>

          <h2 className="mb-8 text-center font-serif text-[1.55rem] uppercase tracking-[0.08em] text-[#5a4d47]">
            Wedding Timeline
          </h2>

          <div className="relative mx-auto max-w-[320px]">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#bfb0a8]" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                  <div className="text-right">
                    <p className="text-[0.78rem] uppercase tracking-[0.08em] text-[#8a7d75]">{item.left}</p>
                    <p className="mt-1 font-serif text-[1.05rem] leading-tight">{item.leftTitle}</p>
                  </div>

                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#cbbdb5] bg-[#f7f0ec] text-[#8c7d75]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#a9968d]" />
                  </div>

                  <div className="text-left">
                    <p className="text-[0.78rem] uppercase tracking-[0.08em] text-[#8a7d75]">{item.right}</p>
                    <p className="mt-1 font-serif text-[1.05rem] leading-tight">{item.rightTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-7 pb-10">
          <div className="rounded-[1.6rem] border border-[#e2d6cf] bg-white/85 p-6 text-center shadow-[0_12px_30px_rgba(80,60,50,0.05)]">
            <p className="font-serif text-[1.45rem] text-[#4d413c]">Lista nozze</p>
            <p className="mx-auto mt-3 max-w-[280px] text-sm leading-6 text-[#6f625c]">
              La vostra presenza sarà per noi il dono più bello. Qui potremo aggiungere più avanti il testo per il regalo,
              l’eventuale IBAN oppure il link alla lista nozze.
            </p>
            <div className="mt-4 rounded-xl bg-[#f6efea] px-4 py-3 text-xs leading-6 text-[#7d6e66]">
              Testo provvisorio — da completare quando avrai le informazioni definitive.
            </div>
          </div>
        </section>

        <section className="px-7 pb-14 text-center">
          <p className="mx-auto max-w-[290px] text-sm leading-6 text-[#6f625c]">
            Vi chiediamo di confermare la vostra presenza appena possibile.
          </p>
          <button className="mt-5 rounded-full bg-[#5f7257] px-8 py-3 text-sm uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(95,114,87,0.25)] transition hover:opacity-90">
            Conferma presenza
          </button>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-[#a28f85]">invito digitale</p>
        </section>
      </div>
    </div>
  );
}
