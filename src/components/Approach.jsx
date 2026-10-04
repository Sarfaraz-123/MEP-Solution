import { ArrowUpRight, ClipboardCheck, Compass, DraftingCompass, HardHat } from 'lucide-react';

const steps = [
  { num: '01', title: 'Listen & understand', copy: 'We learn how the building needs to work, what matters most, and where the constraints sit.', icon: Compass },
  { num: '02', title: 'Design & coordinate', copy: 'Clear drawings, joined-up systems, and practical choices that make sense for your project.', icon: DraftingCompass },
  { num: '03', title: 'Price & plan', copy: 'Straightforward quotations and a considered path from design approval to site work.', icon: ClipboardCheck },
  { num: '04', title: 'Inspect & deliver', copy: 'Hands-on site inspections and execution support through to a confident handover.', icon: HardHat },
];

export default function Approach() {
  return (
    <section className="approach-section" id="approach">
      <div className="section-shell approach-inner">
        <div className="approach-heading">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> How we work</div>
          <h2>Good work is<br />a <em>connected</em><br />process.</h2>
          <p>Less friction between the drawing board and the job site. More care at every handoff.</p>
          <a href="#contact" className="button button-light">See how we can help <ArrowUpRight size={17} /></a>
        </div>
        <div className="process-list">
          {steps.map(({ num, title, copy, icon: Icon }) => (
            <div className="process-step" key={num}>
              <div className="process-step-icon"><Icon size={19} strokeWidth={1.5} /></div>
              <div className="process-step-copy"><span className="process-num">{num} — THE PROCESS</span><h3>{title}</h3><p>{copy}</p></div>
              <ArrowUpRight className="process-arrow" size={18} />
            </div>
          ))}
          <div className="process-baseline"><span>ONE TEAM. EVERY STEP.</span><span>NL—12</span></div>
        </div>
      </div>
      <div className="approach-watermark" aria-hidden="true">N</div>
    </section>
  );
}
