import { motion } from 'framer-motion';
import { FaAward, FaDownload } from 'react-icons/fa';

export default function CertificateCard({ title, index = 0 }) {
  return (
    <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass rounded-3xl p-6 transition hover:-translate-y-2 hover:shadow-glow">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-rose-400 text-2xl text-white">
        <FaAward />
      </div>
      <h2 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">Verified learning credential supporting professional development and practical IT expertise.</p>
      <a href="#" className="btn-secondary mt-6"><FaDownload /> Download Certificate</a>
    </motion.article>
  );
}
