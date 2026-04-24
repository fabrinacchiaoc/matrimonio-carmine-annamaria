import { useState } from 'react';

function EnvelopeIntro({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // quando la busta finisce di scomparire, avvisa il parent
    window.setTimeout(() => onOpen?.(), 2000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${
        opening ? 'envelope-overlay-hide' : ''
      }`}
    >
      {/* Busta */}
      <div className="relative" style={{ width: 300, height: 210 }}>
        {/* Corpo della busta (bianco con ombra morbida) */}
        <div
          className="absolute inset-0 rounded-[4px] bg-white"
          style={{
            boxShadow:
              '0 18px 40px rgba(80,60,50,0.12), 0 2px 6px rgba(80,60,50,0.06)',
          }}
        />

        {/* Lettera che esce dall'interno al tap */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 ${
            opening ? 'envelope-letter-out' : ''
          }`}
          style={{
            width: 220,
            height: 150,
            transform: 'translate(-50%, -50%) scale(0.72)',
            opacity: 0,
          }}
        >
          <div
            className="flex h-full w-full flex-col items-center justify-center rounded-[4px] bg-white"
            style={{
              boxShadow: '0 12px 32px rgba(80,60,50,0.15)',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            <img
              src="/monogramma.png"
              alt="Monogramma CA"
              className="h-auto w-[110px] select-none"
              draggable={false}
            />
            <p
              className="mt-1 text-[0.62rem] uppercase tracking-[0.3em] text-[#8a9b85]"
              style={{ fontWeight: 300 }}
            >
              Save the date
            </p>
          </div>
        </div>

        {/* Triangoli laterali e inferiore (pieghe della busta) */}
        <svg
          viewBox="0 0 300 210"
          className="absolute inset-0 h-full w-full"
          style={{ overflow: 'visible' }}
        >
          {/* triangolo di sinistra */}
          <polygon
            points="0,0 150,95 0,210"
            fill="#ffffff"
            stroke="#e4dcd4"
            strokeWidth="0.8"
          />
          {/* triangolo di destra */}
          <polygon
            points="300,0 150,95 300,210"
            fill="#ffffff"
            stroke="#e4dcd4"
            strokeWidth="0.8"
          />
          {/* triangolo inferiore */}
          <polygon
            points="0,210 150,95 300,210"
            fill="#fcfaf7"
            stroke="#e4dcd4"
            strokeWidth="0.8"
          />
        </svg>

        {/* Flap superiore: quando la busta si apre, ruota all'indietro */}
        <div
          className={`absolute left-0 right-0 top-0 ${
            opening ? 'envelope-flap-open' : ''
          }`}
          style={{ height: '50%' }}
        >
          <svg
            viewBox="0 0 300 105"
            className="h-full w-full"
            style={{ display: 'block' }}
          >
            <polygon
              points="0,0 300,0 150,95"
              fill="#ffffff"
              stroke="#d9cfc6"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Ceralacca (wax seal) con "CA" in script */}
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Apri l'invito"
          className={`absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus:outline-none ${
            opening ? 'envelope-seal-break' : 'envelope-seal-idle'
          }`}
          style={{
            background:
              'radial-gradient(circle at 32% 30%, #a6b89e 0%, #8a9b85 45%, #6d7c66 100%)',
            boxShadow:
              '0 8px 22px rgba(95,120,85,0.35), inset 0 6px 10px rgba(0,0,0,0.25), inset 0 -4px 8px rgba(255,255,255,0.12)',
            border: '1px solid rgba(77,92,72,0.55)',
          }}
        >
          <span
            style={{
              fontFamily: "'Allura', cursive",
              fontSize: '2.3rem',
              lineHeight: 1,
              color: '#3f4c3a',
              textShadow: '0 1px 0 rgba(255,255,255,0.18)',
              letterSpacing: '-0.04em',
            }}
          >
            CA
          </span>
        </button>
      </div>

      {/* Hint "tocca per aprire" */}
      {!opening && (
        <p
          className="absolute bottom-20 text-center text-[0.72rem] uppercase tracking-[0.32em] text-[#8a9b85]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          tocca per aprire
        </p>
      )}
    </div>
  );
}

export default function WeddingSite() {
  const [opened, setOpened] = useState(false);

  const timeline = [
    { time: '15:30', title: 'Cerimonia' },
    { time: '17:00', title: 'Fine rito' },
    { time: '17:30', title: 'Trasferimento in location' },
    { time: '18:00', title: 'Aperitivo' },
    { time: '20:00', title: 'Inizio ricevimento' },
    { time: '00:00', title: 'Taglio torta' },
    { time: 'dopo le 00:30', title: 'After party' },
  ];

  return (
    <>
      {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}
    <div
      className={`min-h-screen bg-white text-[#4d413c] ${opened ? 'site-reveal' : ''}`}
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="mx-auto min-h-screen max-w-[430px] bg-white shadow-[0_12px_50px_rgba(80,60,50,0.08)]">
        <section className="relative overflow-hidden px-7 pb-10 pt-8 text-center">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute -left-12 top-16 h-44 w-44 rounded-full bg-[#ebe0da] blur-3xl" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto flex items-center justify-center">
            <img
              src="/monogramma.png"
              alt="Monogramma CA"
              className="h-auto w-[220px] select-none"
              draggable={false}
            />
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
            <p
              className="text-[1.55rem] uppercase leading-[1.6] tracking-[0.22em] text-[#8a9b85]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Carmine Nacchia
              <br />
              <span className="text-[#a7b5a2]">e</span>
              <br />
              Annamaria Stefanelli
            </p>
            <p
              className="mt-6 text-[0.95rem] tracking-[0.08em] text-[#8a9b85]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              Annunciano con gioia
              <br />
              il loro matrimonio
            </p>
          </div>
        </section>

        <section className="relative px-7 pb-10 text-center">
          <div className="absolute right-0 top-6 h-24 w-24 rounded-full border border-[#d9cdc6] opacity-70" />

          <div className="absolute right-2 top-8 flex items-center justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#6d7c66] shadow-[inset_0_6px_10px_rgba(0,0,0,0.22),0_6px_12px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-[6px] rounded-full border border-[#7f8d78] opacity-70" />
              <div className="absolute inset-[12px] rounded-full border border-[#5f6d59] opacity-45" />
              <div className="absolute inset-0 rounded-full opacity-20 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.28),transparent_55%)]" />
              <span
                className="relative text-[#ece3db]"
                style={{
                  fontFamily: "'Allura', cursive",
                  fontSize: '42px',
                  lineHeight: 1,
                }}
              >
                CA
              </span>
            </div>
          </div>

          <div className="absolute right-2 top-5 text-[70px] leading-none text-[#d9cdc6]">﹏</div>

          <div
            className="mb-7 flex items-end justify-center gap-4 text-[#8a9b85]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.22em]">Lunedì</p>
            </div>
            <div className="border-x border-[#b8c4b2] px-5">
              <div className="text-[3rem] leading-none">24</div>
              <div className="text-sm uppercase tracking-[0.18em]">Agosto</div>
            </div>
            <div className="pb-2 text-lg tracking-[0.1em]">2026</div>
          </div>

          <p
            className="text-sm uppercase tracking-[0.25em] text-[#8a9b85]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Ore 18:00
          </p>
          <p
            className="mt-6 text-sm italic text-[#8a9b85]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            presso
          </p>

          <div className="mt-4 space-y-5 text-left">
            <a
              href="https://maps.app.goo.gl/H3sEpER35S64XD9y6"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[#e2d6cf] bg-white/75 p-3 shadow-[0_8px_24px_rgba(80,60,50,0.05)] transition hover:-translate-y-0.5"
            >
              <img src="/chiesa.jpg" alt="Chiesa" className="h-16 w-16 shrink-0 rounded-xl object-cover shadow-sm" />
              <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p className="text-[0.8rem] uppercase tracking-[0.18em] text-[#8a9b85]">Cerimonia</p>
                <p className="text-[1.2rem] leading-tight text-[#4d413c]" style={{ fontWeight: 400 }}>Chiesa Corpo di Cristo</p>
                <p className="mt-1 text-xs italic text-[#8a9b85]">tocca per aprire la mappa</p>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/dJaZpEufGdopggfv5"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[#e2d6cf] bg-white/75 p-3 shadow-[0_8px_24px_rgba(80,60,50,0.05)] transition hover:-translate-y-0.5"
            >
              <img src="/locale.jpg" alt="Tenuta San Domenico" className="h-16 w-16 shrink-0 rounded-xl object-cover shadow-sm" />
              <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p className="text-[0.8rem] uppercase tracking-[0.18em] text-[#8a9b85]">Ricevimento</p>
                <p className="text-[1.2rem] leading-tight text-[#4d413c]" style={{ fontWeight: 400 }}>Tenuta San Domenico</p>
                <p className="mt-1 text-xs italic text-[#8a9b85]">tocca per aprire la mappa</p>
              </div>
            </a>
          </div>
        </section>

        <section className="relative overflow-hidden px-7 pb-10 pt-3">
          <div className="absolute left-0 top-14 h-32 w-20 opacity-40">
            <div className="h-full w-full rounded-r-full bg-[radial-gradient(circle_at_top_left,_#e7dbd4,_transparent_68%)]" />
          </div>

          <h2
            className="mb-8 text-center text-[1.55rem] uppercase tracking-[0.22em] text-[#8a9b85]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Wedding Timeline
          </h2>

          <div className="relative mx-auto max-w-[280px]">
            <div className="absolute left-[28px] top-0 h-full w-px bg-[#bfb0a8]" />

            <div className="space-y-7">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center gap-5">
                  <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#cbbdb5] bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#a9968d]" />
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[#8a9b85]">{item.time}</p>
                    <p className="mt-0.5 text-[1.15rem] leading-tight text-[#4d413c]" style={{ fontWeight: 400 }}>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-7 pb-10">
          <div
            className="rounded-[1.6rem] border border-[#e2d6cf] bg-white/85 p-6 text-center shadow-[0_12px_30px_rgba(80,60,50,0.05)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <p
              className="text-[1.45rem] uppercase tracking-[0.18em] text-[#8a9b85]"
              style={{ fontWeight: 300 }}
            >
              Lista nozze
            </p>
            <p className="mx-auto mt-3 max-w-[280px] text-[0.95rem] leading-6 text-[#6f625c]">
              La vostra presenza sarà per noi il dono più bello. Qui potremo aggiungere più avanti il testo per il regalo,
              l’eventuale IBAN oppure il link alla lista nozze.
            </p>
            <div className="mt-4 rounded-xl bg-[#f6efea] px-4 py-3 text-xs leading-6 text-[#7d6e66]">
              Testo provvisorio — da completare quando avrai le informazioni definitive.
            </div>
          </div>
        </section>

        <section
          className="px-7 pb-14 text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <p className="mx-auto max-w-[290px] text-[0.95rem] leading-6 text-[#6f625c]">
            Vi chiediamo di confermare la vostra presenza appena possibile.
          </p>
          <button
            className="mt-5 rounded-full bg-[#8a9b85] px-8 py-3 text-sm uppercase tracking-[0.22em] text-white shadow-[0_10px_24px_rgba(138,155,133,0.30)] transition hover:opacity-90"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            Conferma presenza
          </button>
          <p
            className="mt-8 text-xs uppercase tracking-[0.32em] text-[#a7b5a2]"
            style={{ fontWeight: 300 }}
          >
            invito digitale
          </p>
        </section>
      </div>
    </div>
    </>
  );
}