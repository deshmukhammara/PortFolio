import { motion } from 'framer-motion';
import { FaCheckCircle, FaDownload, FaEnvelope, FaLaptopCode, FaRocket, FaServer } from 'react-icons/fa';
import { owner, stats, techIcons } from '../data.js';

function TypewriterTitle() {
  return (
    <span className="inline-flex flex-wrap gap-x-2">
      {owner.title.split('|').map((part, index) => (
        <motion.span key={part} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.18 }}>
          {part.trim()}{index < 2 ? ' |' : ''}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const codeLines = [
    'class Portfolio {',
    '  build() {',
    '    return ["Java", "Spring Boot", "React"];',
    '  }',
    '}'
  ];

  return (
    <section className="section grid min-h-[calc(100svh-5rem)] items-center gap-10 overflow-hidden sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-2 text-xs font-black text-teal-700 shadow-sm backdrop-blur dark:border-teal-300/20 dark:bg-white/10 dark:text-teal-200 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_0_6px_rgba(20,184,166,.16)]" />
          Professional IT Portfolio
        </div>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.35rem,13vw,4rem)] font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
          {owner.name}
        </h1>
        <p className="mt-5 text-lg font-bold text-teal-700 dark:text-teal-200 sm:text-2xl">
          <TypewriterTitle />
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{owner.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {['Java Specialist', 'Spring Boot APIs', 'IT Teaching'].map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-bold text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
          <a href="/projects" className="btn-primary w-full sm:w-auto"><FaRocket /> View Projects</a>
          <a href="/Ammara-Hidayat-Deshmukh-Resume.pdf" className="btn-secondary w-full sm:w-auto" download><FaDownload /> Download Resume</a>
          <a href="/contact" className="btn-secondary w-full sm:w-auto"><FaEnvelope /> Contact Me</a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map(([value, label], index) => (
            <motion.div key={label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.08 }} className="glass rounded-2xl p-3 sm:p-4">
              <p className="text-xl font-black text-slate-950 dark:text-white sm:text-2xl">{value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-lg pt-4 sm:pt-0">
        {techIcons.map(({ Icon, label }, index) => (
          <motion.div
            key={label}
            className="absolute z-10 hidden h-12 w-12 place-items-center rounded-2xl border border-white/70 bg-white/80 text-xl text-teal-700 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/80 dark:text-teal-200 sm:grid lg:h-14 lg:w-14 lg:text-2xl"
            style={{
              top: `${[4, 20, 51, 75, 62, 32][index]}%`,
              left: `${[5, 82, -2, 72, 12, 92][index]}%`
            }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            title={label}
          >
            <Icon />
          </motion.div>
        ))}
        <div className="glass relative overflow-hidden rounded-[1.5rem] p-3 shadow-glow sm:rounded-[2rem] sm:p-5">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,184,166,.20),rgba(14,165,233,.14),rgba(251,113,133,.16))]" />
          <div className="relative rounded-[1.25rem] border border-white/60 bg-slate-950 p-4 text-white shadow-2xl dark:border-white/10 sm:rounded-[1.5rem] sm:p-5">
            <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-4 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-teal-300" />
              </div>
              <span className="w-max rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-teal-100">developer.workspace</span>
            </div>

            <div className="grid gap-2 font-mono text-[0.72rem] leading-6 text-slate-300 min-[380px]:text-xs sm:gap-3 sm:text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + index * 0.12 }}
                  className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-3"
                >
                  <span className="select-none text-slate-600">{String(index + 1).padStart(2, '0')}</span>
                  <span className={index === 2 ? 'break-words text-teal-200' : 'break-words'}>{line}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-teal-300 via-sky-300 to-rose-300"
                initial={{ width: '18%' }}
                animate={{ width: ['18%', '82%', '58%', '92%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <div className="mt-6 grid gap-3 min-[420px]:grid-cols-2">
              {[
                ['API Ready', FaServer],
                ['Clean Code', FaLaptopCode],
                ['Mentoring', FaCheckCircle],
                ['Freelance', FaRocket]
              ].map(([label, Icon]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-sm font-bold text-slate-100">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-400 text-slate-950"><Icon /></span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            {['Java', 'Spring', 'React'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/70 px-2 py-3 text-center text-xs font-black text-slate-800 dark:bg-white/10 dark:text-white sm:px-3 sm:py-4 sm:text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
