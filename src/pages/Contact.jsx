import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { contactItems } from '../data.js';

export default function Contact() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Contact Me" title="Let's discuss your project, class, or collaboration" centered>
        Send a message through the validated contact form or use the direct contact links below.
      </SectionHeader>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <ContactForm />

        <aside className="grid gap-5">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="glass group flex gap-3 rounded-[1.75rem] p-4 transition hover:-translate-y-1 hover:shadow-glow sm:gap-4 sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-teal-500 dark:bg-white dark:text-slate-950 sm:h-12 sm:w-12">
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-300">{item.label}</p>
                  <p className="mt-1 break-words font-black text-slate-950 dark:text-white">{item.value}</p>
                </div>
              </div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}

          <div className="glass min-h-64 rounded-[1.75rem] p-4 sm:p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-teal-700 dark:text-teal-200">Google Map</p>
            <div className="mt-4 grid h-52 place-items-center overflow-hidden rounded-2xl bg-slate-950 text-center text-sm font-bold text-white dark:bg-white dark:text-slate-950">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,184,166,.45),rgba(14,165,233,.22),rgba(251,113,133,.32))]" />
                <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="mx-4 rounded-full bg-white/90 px-5 py-3 text-slate-950 shadow-xl">Mahad, Raigad, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
