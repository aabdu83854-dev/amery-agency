import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 3700),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-10"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/malaysia-mosque.jpg`} 
          alt="Mosque" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-[var(--color-bg-dark)] opacity-60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-8">
        <motion.h2 
          className="text-6xl md:text-7xl font-display text-[var(--color-text-inverse)] mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          سياحة عائلية<br />
          <span className="text-[var(--color-accent)]">مناسبة للمسلمين</span>
        </motion.h2>

        <div className="flex justify-center gap-12 text-[var(--color-bg-light)]">
          {[
            { title: "مطاعم حلال", delay: 0 },
            { title: "مرافق صلاة", delay: 0.1 },
            { title: "أجواء عائلية", delay: 0.2 }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: phase >= 2 ? item.delay : 0 }}
            >
              <div className="w-16 h-16 rounded-full border-2 border-[var(--color-accent)] mb-4 flex items-center justify-center text-2xl">
                ✓
              </div>
              <span className="text-xl">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}