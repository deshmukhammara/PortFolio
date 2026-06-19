import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative mt-10 space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-teal-300/70 dark:before:bg-teal-500/40 sm:before:left-5">
      {items.map((item, index) => (
        <motion.article key={item.role} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative pl-11 sm:pl-14">
          <span className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full bg-teal-500 text-sm font-black text-white shadow-lg shadow-teal-500/30 sm:h-10 sm:w-10">{index + 1}</span>
          <div className="glass rounded-3xl p-4 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-950 dark:text-white">{item.role}</h2>
                <p className="mt-1 font-bold text-teal-700 dark:text-teal-200">{item.company}</p>
                {item.location && <p className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-300"><FaMapMarkerAlt /> {item.location}</p>}
              </div>
              <span className="w-full rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200 sm:w-max">{item.duration}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.responsibilities.map((responsibility) => (
                <span key={responsibility} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800 dark:bg-teal-400/10 dark:text-teal-200">{responsibility}</span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
