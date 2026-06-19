import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { owner } from '../data.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/60 py-10 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm text-slate-600 dark:text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-black text-slate-950 dark:text-white">{owner.name}</p>
          <p className="mt-1">{owner.title}</p>
        </div>
        <p>© {new Date().getFullYear()} Ammara Portfolio. All rights reserved.</p>
        <div className="flex gap-3">
          {[
            [FaLinkedin, owner.linkedin],
            [FaGithub, owner.github],
            [FaWhatsapp, 'https://wa.me/919876543210']
          ].map(([Icon, href]) => (
            <a key={href} href={href} className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white transition hover:bg-teal-600 dark:bg-white dark:text-slate-950" target="_blank" rel="noreferrer">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
