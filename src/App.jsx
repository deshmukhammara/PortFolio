import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950 text-white"
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 via-sky-400 to-rose-400 text-2xl font-black text-slate-950 shadow-glow">
              AD
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-teal-200">Portfolio Loading</p>
          </motion.div>
        </motion.div>
      ) : (
        <AppRoutes />
      )}
    </AnimatePresence>
  );
}
