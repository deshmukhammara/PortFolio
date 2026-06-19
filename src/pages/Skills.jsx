import SectionHeader from '../components/SectionHeader.jsx';
import SkillsCard from '../components/SkillsCard.jsx';
import { skillGroups, toolIcons } from '../data.js';

export default function Skills() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Technical Skills" title="Tools and technologies for robust IT solutions" centered>
        Animated skill cards with progress indicators across frontend, backend, database, tooling, and mentoring strengths.
      </SectionHeader>
      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
        {toolIcons.map((Icon, index) => (
          <span key={index} className="grid h-12 w-12 place-items-center rounded-2xl border border-white/60 bg-white/70 text-xl text-teal-700 shadow-lg backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:text-teal-200 sm:h-14 sm:w-14 sm:text-2xl">
            <Icon />
          </span>
        ))}
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => <SkillsCard key={group.title} group={group} index={index} />)}
      </div>
    </section>
  );
}
