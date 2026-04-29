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

        {/* Ceralacca (wax seal) con monogramma */}
        <button
          type="button"
          onClick={onTap}
          aria-label="Apri l'invito"
          disabled={opening}
          className={`absolute left-1/2 top-1/2 flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full focus:outline-none ${
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
          <img
            src="/monogramma.png"
            alt="Monogramma"
            draggable={false}
            className="h-[54px] w-[54px] select-none object-contain"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(22%) sepia(14%) saturate(700%) hue-rotate(60deg) brightness(95%) contrast(90%) drop-shadow(0 1px 0 rgba(255,255,255,0.18))',
            }}
          />
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
    { type: 'day', label: 'Domenica 23 Agosto' },
    {
      time: '21:00',
      title: 'Serenata',
      map: {
        href: 'https://maps.app.goo.gl/nXw9XugM59bAAoru6',
        icon: 'house',
        subtitle: 'Casa della sposa',
      },
    },
    { type: 'day', label: 'Lunedì 24 Agosto' },
    {
      time: '15:30',
      title: 'Cerimonia',
      map: {
        href: 'https://maps.app.goo.gl/H3sEpER35S64XD9y6',
        img: '/chiesa.jpg',
        alt: 'Chiesa',
        subtitle: 'Chiesa Corpo di Cristo',
      },
    },
    { time: '17:00', title: 'Fine rito' },
    {
      time: '17:30',
      title: 'Trasferimento in location',
      map: {
        href: 'https://maps.app.goo.gl/dJaZpEufGdopggfv5',
        img: '/locale.jpg',
        alt: 'Tenuta San Domenico',
        subtitle: 'Tenuta San Domenico',
      },
    },
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

          <div className="relative z-10 mt-10 -mx-7">
            <img
              src="/tenuta.jpeg"
              alt="Tenuta"
              className="block w-full select-none"
              draggable={false}
            />
          </div>

          <div className="relative z-10 mt-6">
            <p
              className="text-[1.35rem] uppercase leading-[1.7] tracking-[0.22em] text-[#8a9b85]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              <span className="block whitespace-nowrap">CARMINE NACCHIA</span>
              <span className="block text-[#a7b5a2]">E</span>
              <span className="block whitespace-nowrap">ANNAMARIA STEFANELLI</span>
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
              {timeline.map((item, index) => {
                if (item.type === 'day') {
                  return (
                    <div key={index} className="relative flex items-center gap-3 pl-[14px]">
                      <span className="h-px flex-1 bg-[#cdd6c8]" />
                      <p
                        className="text-[0.7rem] uppercase tracking-[0.28em] text-[#8a9b85]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                      >
                        {item.label}
                      </p>
                      <span className="h-px flex-1 bg-[#cdd6c8]" />
                    </div>
                  );
                }
                return (
                  <div key={index} className="relative flex items-start gap-5">
                    <div className="relative z-10 mt-1 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#8a9b85] bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#8a9b85]" />
                    </div>
                    <div className="flex-1 pt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[#8a9b85]">{item.time}</p>
                      <p className="mt-0.5 text-[1.15rem] leading-tight text-[#4d413c]" style={{ fontWeight: 400 }}>{item.title}</p>
                      {item.map && (
                        <a
                          href={item.map.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 flex items-center gap-3 rounded-xl border border-[#e2d6cf] bg-white/80 p-2 shadow-[0_4px_14px_rgba(80,60,50,0.05)] transition hover:-translate-y-0.5"
                        >
                          {item.map.icon === 'house' ? (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f3ece6] text-[#8a9b85]">
                              <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                {/* tetto */}
                                <path d="M8 32 L32 12 L56 32" />
                                {/* comignolo */}
                                <path d="M46 19 V25" />
                                {/* corpo della casa */}
                                <path d="M14 30 V54 H50 V30" />
                                {/* porta */}
                                <path d="M28 54 V40 H36 V54" />
                                {/* finestra */}
                                <rect x="19" y="36" width="6" height="6" />
                                {/* nota musicale */}
                                <circle cx="44" cy="45" r="1.6" fill="currentColor" stroke="none" />
                                <path d="M45.6 45 V38 L49 37" />
                              </svg>
                            </div>
                          ) : (
                            <img
                              src={item.map.img}
                              alt={item.map.alt}
                              className="h-12 w-12 shrink-0 rounded-lg object-cover"
                            />
                          )}
                          <div className="min-w-0">
                            <p className="text-[0.95rem] leading-tight text-[#4d413c]" style={{ fontWeight: 400 }}>
                              {item.map.subtitle}
                            </p>
                            <p className="mt-0.5 text-[0.65rem] italic text-[#8a9b85]">tocca per aprire la mappa</p>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
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
              Conferma la tua presenza
            </p>
            <p className="mx-auto mt-4 max-w-[300px] text-[0.98rem] leading-7 text-[#6f625c]">
              La vostra presenza al nostro matrimonio sarà il dono più bello.
              Vi chiediamo gentilmente di confermare la partecipazione tramite
              il modulo qui sotto.
            </p>

            <a
              href="https://forms.gle/t1xSAtQAUEjsHP7E8"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#8a9b85] bg-[#8a9b85] px-6 py-3 text-[0.78rem] uppercase tracking-[0.28em] text-white shadow-[0_8px_22px_rgba(95,120,85,0.25)] transition hover:-translate-y-0.5 hover:bg-[#7c8d77]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7l9 6 9-6" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
              </svg>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                Compila il modulo
              </span>
            </a>
          </div>
        </section>

        <section className="relative px-7 pb-12 text-center">
          <p
            className="mb-6 text-[1.45rem] uppercase tracking-[0.18em] text-[#8a9b85]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Pernottamento
          </p>

          <div className="space-y-5 text-left">
            <a
              href="https://maps.app.goo.gl/K1AmzkQefskw3FL56"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[#e2d6cf] bg-white/75 p-3 shadow-[0_8px_24px_rgba(80,60,50,0.05)] transition hover:-translate-y-0.5"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f3ece6] text-[#8a9b85] shadow-sm">
                <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* testata del letto */}
                  <path d="M8 44 V24" />
                  {/* piedi del letto */}
                  <path d="M56 44 V32" />
                  {/* base / materasso */}
                  <path d="M8 38 H56" />
                  {/* coperta */}
                  <path d="M8 44 H56 V50 H8 Z" />
                  {/* cuscino */}
                  <path d="M14 32 H26 V38 H14 Z" />
                </svg>
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p className="text-[0.8rem] uppercase tracking-[0.18em] text-[#8a9b85]">Hotel</p>
                <p className="text-[1.2rem] leading-tight text-[#4d413c]" style={{ fontWeight: 400 }}>Tenuta Re Ferdinando</p>
                <p className="mt-1 text-xs italic text-[#8a9b85]">tocca per aprire la mappa</p>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/u9s439PR6Qa8VVBT7"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[#e2d6cf] bg-white/75 p-3 shadow-[0_8px_24px_rgba(80,60,50,0.05)] transition hover:-translate-y-0.5"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f3ece6] text-[#8a9b85] shadow-sm">
                <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* testata del letto */}
                  <path d="M8 44 V24" />
                  {/* piedi del letto */}
                  <path d="M56 44 V32" />
                  {/* base / materasso */}
                  <path d="M8 38 H56" />
                  {/* coperta */}
                  <path d="M8 44 H56 V50 H8 Z" />
                  {/* cuscino */}
                  <path d="M14 32 H26 V38 H14 Z" />
                </svg>
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p className="text-[0.8rem] uppercase tracking-[0.18em] text-[#8a9b85]">Hotel</p>
                <p className="text-[1.2rem] leading-tight text-[#4d413c]" style={{ fontWeight: 400 }}>Medea Resort Hotel &amp; Ricevimenti</p>
                <p className="mt-1 text-xs italic text-[#8a9b85]">tocca per aprire la mappa</p>
              </div>
            </a>
          </div>

          <p
            className="mt-5 text-xs italic text-[#8a9b85]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            per maggiori info contattare la sposa
          </p>
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

        <footer className="px-7 pb-8 pt-2 text-center">
          <div className="mx-auto mb-3 h-px w-16 bg-[#cdd6c8]" />
          <p
            className="text-[0.62rem] uppercase tracking-[0.32em] text-[#b8a99c]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            sito realizzato da
          </p>
          <p
            className="mt-1 text-[1.5rem] leading-none text-[#8a9b85]"
            style={{ fontFamily: "'Allura', cursive", letterSpacing: '0.01em' }}
          >
            Fabrizio Nacchia
          </p>
        </footer>

      </div>
    </div>
    </>
  );
}