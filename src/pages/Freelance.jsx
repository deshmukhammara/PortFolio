import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHandshake, FaWhatsapp } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader.jsx';
import { freelanceServices } from '../data.js';

export default function Freelance() {
  return (
    <section className="section">
      <div className="overflow-hidden rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-glow dark:bg-white dark:text-slate-950 sm:rounded-[2rem] sm:p-8 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-300 dark:text-teal-700 sm:text-sm sm:tracking-[0.28em]">Open To Freelance & Collaboration</p>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Let's build reliable software and stronger technical teams.</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 dark:text-slate-700 sm:text-lg">
              I am available for Java projects, Spring Boot development, web applications, API development, software consulting, teaching, technical training, and project collaboration.
            </p>
          </div>
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <Link to="/contact" className="btn-primary w-full bg-teal-400 text-slate-950 hover:bg-teal-300 sm:w-auto"><FaHandshake /> Hire Me</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary w-full border-white/20 bg-white/10 text-white dark:border-slate-300 dark:bg-slate-950 dark:text-white sm:w-auto" target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SectionHeader eyebrow="Services" title="Collaboration areas" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freelanceServices.map((service) => (
            <div key={service} className="glass flex items-center gap-3 rounded-2xl p-4 font-bold text-slate-800 dark:text-slate-100 sm:p-5">
              <FaCheckCircle className="shrink-0 text-teal-500" /> {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
