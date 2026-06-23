import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { elementAnimations } from '@/lib/video/animations';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),  // Subtitle
      setTimeout(() => setPhase(2), 1200), // Main text
      setTimeout(() => setPhase(3), 3200), // Exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/klcc.jpg`} 
          alt="KLCC" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-[var(--color-accent)] tracking-[0.2em] uppercase text-sm mb-6 font-sans"
        >
          Al-Ameri Travel Agency
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-[var(--color-text-inverse)] leading-tight">
          {'ماليزيا'.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 40, rotateX: -40 }}
              animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: phase >= 2 ? i * 0.05 : 0 }}
            >
              {char}
            </motion.span>
          ))}
          <br />
          <motion.span
            className="inline-block text-[var(--color-primary)] mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            أسهل للعرب
          </motion.span>
        </h1>
        
        <motion.div
          className="w-24 h-[2px] bg-[var(--color-accent)] mt-12"
          initial={{ width: 0 }}
          animate={phase >= 2 ? { width: 96 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </motion.div>
  );
}