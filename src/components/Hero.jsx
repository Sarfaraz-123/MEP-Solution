import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';

function BuildingIllustration() {
  return (
    <svg className="building-art" viewBox="0 0 600 520" fill="none" role="img" aria-label="Isometric illustration of building service systems">
      <defs>
        <linearGradient id="wall" x1="177" y1="93" x2="414" y2="407" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34495A" /><stop offset="1" stopColor="#1A2A37" />
        </linearGradient>
        <linearGradient id="roof" x1="220" y1="49" x2="417" y2="172" gradientUnits="userSpaceOnUse">
          <stop stopColor="#75918C" /><stop offset="1" stopColor="#415F5D" />
        </linearGradient>
        <filter id="softShadow" x="49" y="35" width="502" height="468" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>
      <ellipse cx="303" cy="421" rx="196" ry="34" fill="#081521" opacity=".52" filter="url(#softShadow)" />
      <path d="m103 177 198-111 193 111-198 113-193-113Z" fill="url(#roof)" stroke="#B4C9BD" strokeOpacity=".65" />
      <path d="m103 177 193 112v166L103 341V177Z" fill="url(#wall)" stroke="#9BB0AD" strokeOpacity=".48" />
      <path d="m296 289 198-112v164L296 455V289Z" fill="#203342" stroke="#9BB0AD" strokeOpacity=".48" />
      <path d="m135 187 167-95 159 92-166 95-160-92Z" fill="#182A34" stroke="#AFC3B8" strokeOpacity=".4" />
      <path d="m162 185 139-79 130 75-138 79-131-75Z" stroke="#70918B" strokeOpacity=".55" />
      <path d="M301 110v149m-66-112 131 75M367 148l-133 76m193-46-126-73" stroke="#75968D" strokeOpacity=".42" />
      <path d="M127 222v105l151 87V310l-151-88Z" fill="#152B38" stroke="#80A69D" strokeOpacity=".55" />
      <path d="M147 238v83m21-71v82m21-70v82m21-70v82m21-70v82m21-70v82" stroke="#607A7C" strokeOpacity=".55" />
      <path d="m296 311 180-102v80L296 390v-79Z" fill="#162A36" stroke="#86A79D" strokeOpacity=".48" />
      <path d="m319 314 131-74m-131 100 131-74m-131 100 131-74" stroke="#587172" strokeOpacity=".45" />
      <path d="m185 173 58-33v40l-58 33v-40Z" fill="#E7B36B" fillOpacity=".9" />
      <path d="m212 234 59 34v86l-59-34v-86Z" fill="#C99051" fillOpacity=".8" />
      <path d="m333 183 34-19v46l-34 19v-46Z" fill="#E4AF65" />
      <path d="m399 220 36-21v47l-36 21v-47Z" fill="#E4AF65" fillOpacity=".78" />
      <path d="m333 183 34-19m-34 65 34-19m32 11 36-21m-36 68 36-21" stroke="#F7D4A0" strokeOpacity=".8" />
      <path d="m118 161 190-107 187 108M111 354l184 107 207-118" stroke="#C5D9CC" strokeOpacity=".32" strokeDasharray="4 6" />
      <path d="m248 127 36-21m-6 23 35-20m30 13 34-19" stroke="#E69C5F" strokeWidth="2" strokeLinecap="round" />
      <circle cx="248" cy="127" r="3" fill="#E8AA68" />
      <circle cx="313" cy="129" r="3" fill="#E8AA68" />
      <circle cx="377" cy="103" r="3" fill="#E8AA68" />
      <path d="M91 178h25m-13-13v26m389-12h25m-12-13v26M284 34h24m-12-12v24" stroke="#BED0C5" strokeOpacity=".65" strokeWidth="1.4" />
      <path d="m136 376-16 9m352-33 17 10" stroke="#8BA39A" strokeOpacity=".8" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> Building services, considered</div>
        <h1>Better buildings<br />start <em>behind</em><br />the walls.</h1>
        <p className="hero-lede">We design the systems that make spaces work — comfortable, safe, and built to last.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">Talk to our team <ArrowUpRight size={17} /></a>
          <a className="text-link" href="#services">Explore our services <ArrowDown size={15} /></a>
        </div>
        <div className="hero-footnote"><span className="status-dot" /> Independent MEP consultancy <span className="footnote-divider">/</span> Since 2012</div>
      </div>

      <div className="hero-visual-wrap" aria-hidden="true">
        <div className="hero-visual">
          <div className="visual-topline"><span>COORDINATED BY DESIGN</span><span>01 — 04</span></div>
          <div className="visual-grid" />
          <div className="visual-label visual-label-top"><span className="label-point" /> HVAC <small>CLIMATE</small></div>
          <div className="visual-label visual-label-right"><span className="label-point label-point-orange" /> FIRE <small>SAFETY</small></div>
          <BuildingIllustration />
          <div className="visual-caption"><span>DESIGNING WHAT<br />YOU DON'T SEE.</span><MoveUpRight size={17} /></div>
        </div>
        <div className="floating-note note-one"><span className="note-icon">↗</span><span><small>ONE TEAM</small>From concept<br />to commissioning</span></div>
        <div className="floating-note note-two"><span className="note-kicker">SYSTEMS IN SYNC</span><span className="sync-bars"><i /><i /><i /><i /><i /><i /><i /><i /></span><span className="note-stat">100<span>%</span></span></div>
        <div className="hero-orbit" />
      </div>
      <div className="hero-ribbon" aria-label="Four connected services, one coordinated team, from concept through site delivery">
        <div className="ribbon-item"><span className="ribbon-symbol ribbon-symbol-teal">04</span><span><b>Connected disciplines</b><small>MEP + interiors</small></span></div>
        <span className="ribbon-divider" />
        <div className="ribbon-item"><span className="ribbon-symbol ribbon-symbol-coral">↗</span><span><b>One coordinated team</b><small>Designs that work together</small></span></div>
        <span className="ribbon-divider" />
        <div className="ribbon-item"><span className="ribbon-symbol ribbon-symbol-gold">01—04</span><span><b>Concept through site</b><small>Plan · inspect · deliver</small></span></div>
      </div>
      <a href="#services" className="scroll-cue"><span>Scroll to explore</span><span className="scroll-track"><i /></span></a>
    </section>
  );
}
