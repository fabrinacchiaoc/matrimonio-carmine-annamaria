import { useState } from 'react';

function EnvelopeIntro({ opening, onTap }) {
  return (
    <div
      className={`pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-white ${
        opening ? 'envelope-overlay-hide pointer-events-none' : ''
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
          onClick={onTap}
          aria-label="Apri l'invito"
          disabled={opening}
          className={`absolute left-1/2 top-1/2 flex h-[72px] w-[72px] items-center justify-center rounded-full focus:outline-none ${
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
  // 'closed' → busta intatta, sito invisibile
  // 'opening' → ceralacca spezzata, flap aperto, sito cresce da scala 0 a 1
  // 'open' → overlay busta rimosso, sito interattivo
  const [state, setState] = useState('closed');
  const [giftOpen, setGiftOpen] = useState(false);

  const handleTap = () => {
    if (state !== 'closed') return;
    setState('opening');
    // l'overlay resta visibile mentre il sito cresce, poi viene rimosso
    window.setTimeout(() => setState('open'), 1400);
  };

  const timeline = [
    { time: '15:30', title: 'Cerimonia' },
    { time: '17:00', title: 'Fine rito' },
    { time: '17:30', title: 'Trasferimento in location' },
    { time: '18:00', title: 'Aperitivo' },
    { time: '20:00', title: 'Inizio ricevimento' },
    { time: '00:00', title: 'Taglio torta' },
    { time: 'dopo  00:30', title: 'After party' },
  ];

  return (
    <>
      {state !== 'open' && (
        <EnvelopeIntro opening={state === 'opening'} onTap={handleTap} />
      )}
    <div
      className={`min-h-screen bg-white text-[#4d413c] site-emerge ${
        state !== 'closed' ? 'site-emerge--grown' : ''
      }`}
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
            <div className="absolute left-[28px] top-0 h-full w-px bg-[#8a9b85]" />

            <div className="space-y-7">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center gap-5">
                  <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#8a9b85] bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8a9b85]" />
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
            <p className="mx-auto mt-4 max-w-[300px] text-[0.98rem] leading-7 text-[#6f625c]">
              Insieme stiamo realizzando i nostri sogni più grandi e vi auguriamo
              di avere sempre una stella a cui esprimere un desiderio. La vostra
              presenza è il dono più prezioso. Se desiderate contribuire a
              realizzare il nostro prossimo sogno, questo è il nostro IBAN:
            </p>

            {/* Pacco regalo cliccabile — al tap rivela gli IBAN */}
            <div className="mt-5 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setGiftOpen((v) => !v)}
                aria-expanded={giftOpen}
                aria-label={giftOpen ? 'Nascondi coordinate bancarie' : 'Apri il regalo per scoprire le coordinate bancarie'}
                className="group relative flex h-20 w-20 items-center justify-center rounded-full transition-transform hover:scale-105 focus:outline-none"
              >
                <svg viewBox="0 0 64 64" className="h-16 w-16">
                  {/* Nastro verticale sotto (che scompare dietro il coperchio) */}
                  <rect x="29" y="26" width="6" height="30" fill="#8a9b85" />
                  {/* Corpo del pacco */}
                  <rect
                    x="8" y="26" width="48" height="30" rx="2"
                    fill="#ffffff" stroke="#8a9b85" strokeWidth="1.5"
                  />
                  {/* Coperchio */}
                  <g
                    style={{
                      transformOrigin: '32px 22px',
                      transform: giftOpen ? 'translateY(-10px) rotate(-10deg)' : 'none',
                      transition: 'transform 500ms cubic-bezier(0.22, 0.8, 0.28, 1)',
                    }}
                  >
                    <rect
                      x="4" y="18" width="56" height="10" rx="1.5"
                      fill="#8a9b85"
                    />
                    {/* Nastro verticale sul coperchio */}
                    <rect x="29" y="18" width="6" height="10" fill="#6d7c66" />
                  </g>
                  {/* Nastro verticale sul corpo */}
                  <rect x="29" y="28" width="6" height="28" fill="#8a9b85" />
                  {/* Fiocco in cima */}
                  <g
                    style={{
                      transformOrigin: '32px 18px',
                      transform: giftOpen ? 'translateY(-16px) rotate(8deg)' : 'none',
                      transition: 'transform 500ms cubic-bezier(0.22, 0.8, 0.28, 1)',
                    }}
                  >
                    <path
                      d="M 32 18 C 22 8, 18 18, 30 18 Z"
                      fill="#8a9b85"
                    />
                    <path
                      d="M 32 18 C 42 8, 46 18, 34 18 Z"
                      fill="#8a9b85"
                    />
                    <circle cx="32" cy="17" r="2.4" fill="#6d7c66" />
                  </g>
                </svg>
              </button>
              <p
                className="mt-2 text-[0.7rem] uppercase tracking-[0.28em] text-[#8a9b85]"
                style={{ fontWeight: 300 }}
              >
                {giftOpen ? 'chiudi' : 'apri il regalo'}
              </p>
            </div>

            {/* Coordinate bancarie: nascoste finché il pacco non viene aperto */}
            <div
              style={{
                maxHeight: giftOpen ? 320 : 0,
                opacity: giftOpen ? 1 : 0,
                overflow: 'hidden',
                transition:
                  'max-height 600ms cubic-bezier(0.22, 0.8, 0.28, 1), opacity 400ms ease-out',
              }}
            >
              <div className="mt-5 space-y-3 text-left">
                <div className="rounded-xl border border-[#e4dcd4] bg-white px-4 py-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#8a9b85]">
                    Carmine Nacchia
                  </p>
                  <p
                    className="mt-1 break-all text-[0.92rem] text-[#4d413c]"
                    style={{ fontWeight: 400, letterSpacing: '0.02em' }}
                  >
                    IT80O0306909484100000013575
                  </p>
                </div>
                <div className="rounded-xl border border-[#e4dcd4] bg-white px-4 py-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#8a9b85]">
                    Annamaria Stefanelli
                  </p>
                  <p
                    className="mt-1 break-all text-[0.92rem] text-[#4d413c]"
                    style={{ fontWeight: 400, letterSpacing: '0.02em' }}
                  >
                    IT19B0200876312000430008265
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
    </>
  );
}