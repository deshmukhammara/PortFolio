import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20' : 'text-slate-700 hover:bg-white/80 hover:text-teal-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-teal-200'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950 sm:h-11 sm:w-11">AD</span>
          <span className="hidden text-sm font-black uppercase tracking-[0.22em] text-slate-900 dark:text-white sm:inline">Ammara</span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, path]) => (
            <NavLink key={path} to={path} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Toggle theme" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white sm:h-11 sm:w-11" onClick={() => setDark((value) => !value)}>
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button aria-label="Toggle navigation" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-800 dark:border-white/10 dark:bg-white/10 dark:text-white sm:h-11 sm:w-11 lg:hidden" onClick={() => setOpen((value) => !value)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
            <div className="mx-3 mb-4 grid max-h-[calc(100svh-5rem)] gap-2 overflow-y-auto rounded-3xl border border-white/60 bg-white/95 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/95 sm:mx-4">
              {navLinks.map(([label, path]) => (
                <NavLink key={path} to={path} className={linkClass} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
