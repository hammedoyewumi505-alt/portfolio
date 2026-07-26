import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');

  useEffect(() => {
    // After logo animates in → hold briefly → fade out
    const holdTimer = setTimeout(() => setPhase('hold'), 900);
    const outTimer  = setTimeout(() => setPhase('out'),  1600);
    const doneTimer = setTimeout(() => onDone(),          2300);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(outTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== 'out' ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.72 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-end select-none"
          >
            {/* H */}
            <motion.span
              initial={{ x: -18, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold leading-none text-primary"
              style={{ fontSize: 'clamp(4rem, 14vw, 9rem)' }}
            >
              H
            </motion.span>

            {/* D */}
            <motion.span
              initial={{ x: 18, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold leading-none text-white"
              style={{ fontSize: 'clamp(4rem, 14vw, 9rem)' }}
            >
              D
            </motion.span>

            {/* Dot */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45, type: 'spring', stiffness: 300, damping: 18 }}
              className="rounded-full bg-primary mb-2 ml-2 self-end"
              style={{
                width: 'clamp(0.6rem, 2vw, 1.25rem)',
                height: 'clamp(0.6rem, 2vw, 1.25rem)',
              }}
            />
          </motion.div>

          {/* Subtle glow behind logo */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <div className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-primary/10 blur-[100px]" />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
