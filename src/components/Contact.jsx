import { useState } from 'react';
import { ArrowUpRight, Check, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Project enquiry: ${formData.get('service')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Service: ${formData.get('service')}`,
      '',
      String(formData.get('message') || ''),
    ].join('\n');
    window.location.href = `mailto:hello@northlinemep.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-inner">
        <div className="contact-copy" id="about">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Let’s make it work</div>
          <h2>Have a building<br />in <em>mind?</em></h2>
          <p>Tell us a little about what you’re planning. We’ll get back to you to talk through what comes next.</p>
          <div className="contact-direct"><a href="mailto:hello@northlinemep.com"><Mail size={16} /> hello@northlinemep.com <ArrowUpRight size={14} /></a><a href="tel:+912040123456"><Phone size={16} /> +91 20 4012 3456 <ArrowUpRight size={14} /></a></div>
          <span className="contact-stamp">NORTHLINE / MEP<br />PUNE · INDIA<br />18°31' N / 73°51' E</span>
        </div>
        <div className="contact-form-wrap">
          <div className="form-heading"><span>PROJECT ENQUIRY</span><span>FORM NL—01</span></div>
          {sent ? (
            <div className="form-success"><span className="success-icon"><Check size={21} /></span><h3>Your email draft is ready.</h3><p>Send the draft from your email app to reach the Northline team.</p><button onClick={() => setSent(false)}>Send another enquiry</button></div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Your name<input required type="text" name="name" placeholder="e.g. Aditi Sharma" /></label>
              <label>Email address<input required type="email" name="email" placeholder="you@company.com" /></label>
              <label>What are you planning?<select defaultValue="" required name="service"><option value="" disabled>Select a service</option><option>HVAC design</option><option>Fire fighting</option><option>Plumbing</option><option>Interior design</option><option>Multiple services / full project</option></select></label>
              <label>A little about the project<textarea name="message" rows="3" placeholder="Location, project type, timeline…" /></label>
              <button className="button button-submit" type="submit">Send enquiry <ArrowUpRight size={17} /></button>
              <p className="form-privacy">We’ll only use your details to respond to your enquiry.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
