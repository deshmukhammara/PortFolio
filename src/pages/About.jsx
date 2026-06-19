import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { education, experiences } from '../data.js';

export default function About() {
  return (
    <section className="section">
      <SectionHeader eyebrow="About Me" title="A committed IT professional, developer, and mentor">
        I am Ammara Hidayat Deshmukh, an Information Technology professional with strong academic knowledge and practical industry experience. I have completed Bachelor of Science in Information Technology and Master of Science in Information Technology.
      </SectionHeader>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-3xl p-4 sm:p-6">
          <p className="leading-8 text-slate-600 dark:text-slate-300">
            I possess expertise in Java Development, Spring Boot, Web Development, Database Management, and Software Engineering principles. Along with software development, I am passionate about teaching and mentoring students in Information Technology.
          </p>
          <h2 className="mt-8 text-2xl font-black text-slate-950 dark:text-white">Education Timeline</h2>
          <div className="mt-6 space-y-5">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex gap-3 rounded-2xl bg-white/70 p-4 dark:bg-white/5 sm:gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-500 text-white"><Icon /></span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-teal-700 dark:text-teal-200">Degree</p>
                    <h3 className="font-black text-slate-950 dark:text-white">{item.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">Professional Experience</h2>
          <ExperienceTimeline items={experiences} />
        </div>
      </div>
    </section>
  );
}
