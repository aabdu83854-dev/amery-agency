import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),  // Image reveal
      setTimeout(() => setPhase(2), 800),  // Text
      setTimeout(() => setPhase(3), 3700), // Exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center z-10"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-1/2 h-full relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[var(--color-bg-dark)]"
          initial={{ x: '0%' }}
          animate={phase >= 1 ? { x: '100%' } : { x: '0%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ zIndex: 20 }}
        />
        <img 
          src={`${import.meta.env.BASE_URL}images/malaysia-beach.jpg`} 
          alt="Beach" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="w-1/2 px-16 flex flex-col justify-center bg-[var(--color-bg-light)] h-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-[var(--color-primary)] text-7xl mb-6 font-display">20+</div>
          <h2 className="text-5xl font-display text-[var(--color-text-primary)] mb-4 leading-tight">
            وجهة سياحية<br />منتقاة بعناية
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-md">
            من شواطئ لانكاوي الساحرة إلى مرتفعات كاميرون الخضراء. اكتشف أجمل ما في ماليزيا.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}