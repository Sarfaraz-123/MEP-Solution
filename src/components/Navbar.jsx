import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['Services', '#services'],
  ['Our approach', '#approach'],
  ['Projects', '#projects'],
  ['About us', '#about'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Northline MEP home" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
        <span className="brand-name">northline<span>mep</span></span>
      </a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}
