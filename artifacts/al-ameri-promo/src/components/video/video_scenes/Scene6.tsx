import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene6() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 3900),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center z-10 bg-[var(--color-bg-light)]"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-1/2 px-16 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-[var(--color-accent)] tracking-[0.15em] uppercase text-sm mb-4 font-sans">
            ليست السياحة فقط
          </div>
          <h2 className="text-5xl md:text-6xl font-display text-[var(--color-text-primary)] mb-6 leading-tight">
            خدمات السفارات
          </h2>
        </motion.div>

        <motion.div
          className="inline-flex items-center gap-3 self-start bg-[var(--color-primary)] text-[var(--color-text-inverse)] px-6 py-3 rounded-full mb-8"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
        >
          <span className="text-2xl leading-none">★</span>
          <span className="text-2xl font-semibold">متخصصون في السفارة الصينية</span>
        </motion.div>

        <ul className="space-y-5 text-2xl text-[var(--color-text-secondary)]">
          {[
            'تأشيرات السفارة الصينية',
            'حجز المواعيد وتجهيز الملفات',
            'تصديق ومتابعة المستندات',
          ].map((text, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: phase >= 3 ? i * 0.15 : 0 }}
            >
              <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] shrink-0" />
              {text}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="w-1/2 h-full relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[var(--color-bg-dark)] z-20"
          initial={{ x: '0%' }}
          animate={phase >= 1 ? { x: '100%' } : { x: '0%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <img
          src={`${import.meta.env.BASE_URL}images/embassy-china.png`}
          alt="Embassy services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-light)] via-transparent to-transparent opacity-40" />
      </div>
    </motion.div>
  );
}
