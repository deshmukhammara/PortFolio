import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }} className="glass group flex h-full flex-col rounded-3xl p-4 transition hover:-translate-y-2 hover:shadow-glow sm:p-6">
      <div className="mb-6 min-h-36 rounded-2xl bg-[linear-gradient(135deg,rgba(20,184,166,.85),rgba(14,165,233,.65),rgba(251,113,133,.7))] p-5 text-white">
        <div className="flex h-full flex-col justify-between">
          <span className="w-max rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">Featured Project</span>
          <h2 className="text-xl font-black sm:text-2xl">{project.title}</h2>
        </div>
      </div>
      <p className="flex-1 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      <p className="mt-5 rounded-2xl bg-slate-950/5 px-4 py-3 text-sm font-bold text-teal-700 dark:bg-white/10 dark:text-teal-200">{project.technology}</p>
      <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
        <a href="#" className="btn-primary w-full sm:w-auto"><FaExternalLinkAlt /> Live Demo</a>
        <a href="#" className="btn-secondary w-full sm:w-auto"><FaGithub /> GitHub</a>
      </div>
    </motion.article>
  );
}
