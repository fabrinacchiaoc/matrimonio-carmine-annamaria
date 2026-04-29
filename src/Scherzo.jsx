import { useState, useEffect } from 'react';

export default function Scherzo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // piccolo delay per l'animazione d'ingresso
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      {/* Coriandoli animati */}
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            '--x': `${Math.random() * 100}vw`,
            '--delay': `${Math.random() * 3}s`,
            '--size': `${6 + Math.random() * 10}px`,
            '--color': ['#e6b422', '#ff6b6b', '#48dbfb', '#ff9ff3', '#feca57', '#55efc4'][i % 6],
            '--duration': `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Contenuto principale */}
      <div
        className="relative z-10 mx-6 text-center"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(40px)',
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Icona cassaforte / soldi */}
        <div className="mb-6 flex justify-center">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="drop-shadow-2xl">
            {/* Cassaforte */}
            <rect x="15" y="25" width="90" height="75" rx="8" fill="#2d3436" stroke="#e6b422" strokeWidth="3"/>
            <rect x="20" y="30" width="80" height="65" rx="5" fill="#636e72"/>
            {/* Manopola */}
            <circle cx="60" cy="62" r="18" fill="#2d3436" stroke="#e6b422" strokeWidth="2.5"/>
            <circle cx="60" cy="62" r="12" fill="none" stroke="#e6b422" strokeWidth="1.5"/>
            {/* Tacche della manopola */}
            <line x1="60" y1="45" x2="60" y2="49" stroke="#e6b422" strokeWidth="2" strokeLinecap="round"/>
            <line x1="60" y1="75" x2="60" y2="79" stroke="#e6b422" strokeWidth="2" strokeLinecap="round"/>
            <line x1="43" y1="62" x2="47" y2="62" stroke="#e6b422" strokeWidth="2" strokeLinecap="round"/>
            <line x1="73" y1="62" x2="77" y2="62" stroke="#e6b422" strokeWidth="2" strokeLinecap="round"/>
            {/* Maniglia */}
            <rect x="82" y="52" width="10" height="20" rx="3" fill="#e6b422"/>
            {/* € dentro la manopola */}
            <text x="60" y="67" textAnchor="middle" fill="#e6b422" fontSize="16" fontWeight="bold">€</text>
            {/* Piedini */}
            <rect x="22" y="100" width="12" height="8" rx="2" fill="#2d3436"/>
            <rect x="86" y="100" width="12" height="8" rx="2" fill="#2d3436"/>
          </svg>
        </div>

        {/* Testo principale */}
        <h1
          className="mb-3 tracking-wide text-[#e6b422]"
          style={{
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
            fontWeight: 600,
            textShadow: '0 0 30px rgba(230,180,34,0.4)',
            letterSpacing: '0.08em',
          }}
        >
          ASPETTANDO<br />IL BONIFICO
        </h1>

        {/* Barra di caricamento finta */}
        <div className="mx-auto mt-6 mb-4 h-3 w-56 overflow-hidden rounded-full bg-[#2d3436]" style={{ border: '1px solid #e6b422' }}>
          <div className="loading-bar h-full rounded-full bg-gradient-to-r from-[#e6b422] to-[#feca57]" />
        </div>
        <p className="text-[0.75rem] uppercase tracking-[0.3em] text-[#b2bec3]">
          Caricamento bonifico in corso...
        </p>

        {/* Scritte divertenti che appaiono */}
        <div className="mt-8 space-y-2">
          <p className="fade-line text-[0.85rem] text-[#dfe6e9]" style={{ animationDelay: '1.5s' }}>
            🏦 La banca sta verificando...
          </p>
          <p className="fade-line text-[0.85rem] text-[#dfe6e9]" style={{ animationDelay: '3s' }}>
            💸 Controllando il saldo...
          </p>
          <p className="fade-line text-[0.85rem] text-[#dfe6e9]" style={{ animationDelay: '4.5s' }}>
            😅 Hmm, sembra un po' basso...
          </p>
          <p className="fade-line text-[0.85rem] text-[#ff6b6b] font-semibold" style={{ animationDelay: '6s' }}>
            ❌ ERRORE: FONDI INSUFFICIENTI
          </p>
          <p className="fade-line text-[1rem] text-[#55efc4]" style={{ animationDelay: '8s' }}>
            😂 Scherzo! Auguri sposo! 🥂
          </p>
        </div>
      </div>
    </div>
  );
}
