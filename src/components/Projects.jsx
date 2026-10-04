import { ArrowUpRight } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';

const projects = [
  { type: 'RESIDENTIAL · MEP DESIGN', name: 'The Courtyard House', location: 'Pune, Maharashtra', className: 'project-art-house' },
  { type: 'COMMERCIAL · HVAC + FIRE', name: 'Fieldwork Studios', location: 'Bengaluru, Karnataka', className: 'project-art-studio' },
  { type: 'INTERIOR · BUILDING SERVICES', name: 'A quieter kind of office', location: 'Mumbai, Maharashtra', className: 'project-art-office' },
];

function ProjectArtwork({ className }) {
  return (
    <div className={`project-art ${className}`} aria-hidden="true">
      <div className="art-sun" /><div className="art-ground" />
      <div className="art-building">
        <div className="art-roof" /><div className="art-floor floor-a"><i /><i /><i /></div><div className="art-floor floor-b"><i /><i /><i /></div><div className="art-floor floor-c"><i /><i /></div>
      </div>
      <div className="art-tree tree-a"><i /><i /><i /></div><div className="art-tree tree-b"><i /><i /><i /></div>
      <span className="art-coordinate">18°31' N / 73°51' E</span>
      <span className="art-plan-line line-a" /><span className="art-plan-line line-b" />
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();
  return (
    <a ref={ref} className={`project-card reveal ${visible ? 'is-visible' : ''}`} style={{ '--reveal-delay': `${index * 100}ms` }} href="#contact">
      <ProjectArtwork className={project.className} />
      <div className="project-card-info"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.location}</p></div><span className="project-link"><ArrowUpRight size={17} /></span></div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="projects-section section-shell" id="projects">
      <div className="section-intro projects-intro">
        <div><div className="eyebrow"><span className="eyebrow-line" /> Selected work</div><h2>Made for the way<br />people <em>actually live.</em></h2></div>
        <div className="section-intro-side"><p>Every project asks a different question. We bring the same care to finding its answer.</p></div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}
      </div>
      <div className="projects-caption"><span>01 — 03</span><span>PLACES, MADE MORE THOUGHTFULLY.</span></div>
    </section>
  );
}
