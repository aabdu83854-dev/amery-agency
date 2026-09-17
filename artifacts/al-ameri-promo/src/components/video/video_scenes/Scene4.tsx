import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 3200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 bg-[var(--color-bg-light)] flex z-10"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-1/2 px-16 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-display text-[var(--color-text-primary)] mb-8 leading-tight">
            دعم متكامل<br />في كل خطوة
          </h2>
          
          <ul className="space-y-6 text-2xl text-[var(--color-text-secondary)]">
            {[
              "استخراج التأشيرات",
              "تخطيط الرحلات",
              "دعم على مدار الساعة",
            ].map((text, i) => (
              <motion.li 
                key={i}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: phase >= 2 ? i * 0.15 : 0 }}
              >
                <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="w-1/2 h-full relative overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}images/family.jpg`} 
          alt="Family" 
          className="w-full h-full object-cover" 
        />
      </div>
    </motion.div>
  );
}