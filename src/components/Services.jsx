import { ArrowUpRight, Flame, Paintbrush, ShieldCheck, Wind, Wrench } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';

const services = [
  { number: '01', title: 'HVAC design', description: 'Comfort you can feel. Systems sized and specified for healthy air, quiet rooms, and sensible energy use.', icon: Wind, tags: ['Load calculations', 'Ventilation', 'Controls'] },
  { number: '02', title: 'Fire fighting', description: 'Thoughtful protection planned into the building from day one, with compliance at every step.', icon: Flame, tags: ['Hydrant systems', 'Sprinklers', 'Fire alarm'] },
  { number: '03', title: 'Plumbing', description: 'Reliable water and drainage layouts that work beautifully behind the walls and over the long term.', icon: Wrench, tags: ['Water supply', 'Drainage', 'STP coordination'] },
  { number: '04', title: 'Interior design', description: 'Practical, inviting interiors where the details, materials, lighting, and building systems feel in tune.', icon: Paintbrush, tags: ['Space planning', 'Materials', 'Lighting'] },
];

function ServiceCard({ service, index }) {
  const [ref, visible] = useReveal();
  const Icon = service.icon;
  return (
    <article ref={ref} className={`service-card reveal ${visible ? 'is-visible' : ''}`} style={{ '--reveal-delay': `${index * 90}ms` }}>
      <div className="service-card-head"><span>{service.number} / SERVICE</span><span className="service-icon"><Icon size={20} strokeWidth={1.6} /></span></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <a className="service-arrow" href="#contact" aria-label={`Enquire about ${service.title}`}><ArrowUpRight size={18} /></a>
    </article>
  );
}

export default function Services() {
  return (
    <section className="services-section section-shell" id="services">
      <div className="section-intro">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> What we do</div>
          <h2>The thinking behind<br /><em>everyday comfort.</em></h2>
        </div>
        <div className="section-intro-side">
          <p>One considered team for the systems, safety, and spaces that bring a building to life.</p>
          <a className="text-link" href="#contact">Let’s talk through your project <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="services-grid">{services.map((service, index) => <ServiceCard key={service.number} service={service} index={index} />)}</div>
      <div className="service-note"><ShieldCheck size={17} /><span>Design. Quotation. Inspection. Execution.</span><span className="service-note-spacer" /><span>From a single system to the whole building.</span></div>
    </section>
  );
}
