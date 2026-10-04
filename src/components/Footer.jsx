import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="brand footer-brand" href="#top" aria-label="Northline MEP home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-name">northline<span>mep</span></span></a>
      <span className="footer-note">Thoughtful systems. Better places.</span>
      <div className="footer-links"><a href="#services">Services</a><a href="#projects">Selected work</a><a href="#contact">Get in touch <ArrowUpRight size={13} /></a></div>
      <span className="copyright">© 2025 Northline MEP Consultants</span>
      <a className="back-top" href="#top">Back to top ↑</a>
    </footer>
  );
}
