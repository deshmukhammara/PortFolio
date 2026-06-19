import { motion } from 'framer-motion';

function ProgressRing({ value }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-16 w-16 shrink-0">
      <svg className="-rotate-90" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={radius} className="fill-none stroke-slate-200 dark:stroke-white/10" strokeWidth="8" />
        <motion.circle cx="36" cy="36" r={radius} className="fill-none stroke-teal-500" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} whileInView={{ strokeDashoffset: offset }} viewport={{ once: true }} transition={{ duration: 1 }} />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-xs font-black">{value}%</span>
    </div>
  );
}

export default function SkillsCard({ group, index = 0 }) {
  const Icon = group.icon;
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="glass rounded-3xl p-4 transition hover:-translate-y-1 hover:shadow-glow sm:p-6">
      <div className="mb-6 flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-500 text-xl text-white"><Icon /></span>
        <h2 className="text-xl font-black text-slate-950 dark:text-white">{group.title}</h2>
      </div>
      <div className="grid gap-4">
        {group.skills.map(([skill, value]) => (
          <div key={skill} className="flex items-center justify-between gap-3 rounded-2xl bg-white/60 p-3 dark:bg-white/5 sm:gap-4">
            <span className="min-w-0 text-sm font-bold text-slate-700 dark:text-slate-200">{skill}</span>
            <ProgressRing value={value} />
          </div>
        ))}
      </div>
    </motion.article>
  );
}
