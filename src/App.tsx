import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';
import { useRef } from 'react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#0a0505] text-rose-50 selection:bg-rose-900/50">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-rose-900/10 blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-rose-950/20 blur-[120px] mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <motion.div 
        style={{ opacity: opacity1, scale: scale1 }}
        className="fixed inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-rose-300/60 tracking-[0.3em] text-xs uppercase font-medium">A message for</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-glow">
            Nabail.
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3 text-rose-200/40"
        >
          <span className="text-xs uppercase tracking-widest font-light">Scroll gently</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* The Apology */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="fixed inset-0 flex items-center justify-center px-6 pointer-events-none"
      >
        <div className="max-w-2xl mx-auto text-center space-y-8 glass-panel p-10 md:p-16 rounded-[2rem]">
          <h2 className="font-serif text-4xl md:text-6xl font-light italic text-rose-100">
            I am so sorry.
          </h2>
          <p className="text-rose-200/70 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
            I never meant to hurt you or make you feel anything less than the most important person in my world. My actions didn't reflect my heart, and for that, I am deeply sorry.
          </p>
        </div>
      </motion.div>

      {/* The Love */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="fixed inset-0 flex items-center justify-center px-6 pointer-events-none"
      >
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-12 h-12 text-rose-500/80 fill-rose-500/20" strokeWidth={1} />
            </motion.div>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-glow">
            I love you.
          </h2>
          <p className="text-rose-200/80 text-lg md:text-2xl font-light leading-relaxed max-w-xl mx-auto">
            More than words can express. You are my peace, my joy, and my everything. I promise to be better, for you and for us.
          </p>
        </div>
      </motion.div>

      {/* The Promise */}
      <motion.div 
        style={{ opacity: opacity4, y: y4 }}
        className="fixed inset-0 flex items-center justify-center px-6 pointer-events-none"
      >
        <div className="max-w-3xl mx-auto w-full">
          <div className="glass-panel p-8 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />
            
            <Sparkles className="w-6 h-6 text-rose-400/60 mx-auto mb-8" strokeWidth={1.5} />
            
            <h3 className="font-serif text-3xl md:text-5xl font-light mb-8 text-rose-50">
              Please forgive me.
            </h3>
            
            <p className="text-rose-200/70 font-light text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Let me make it right. Let me show you every single day how much you mean to me. You are irreplaceable, Nabail.
            </p>

            <div className="pt-8 border-t border-rose-900/30">
              <p className="font-serif italic text-xl md:text-2xl text-rose-300/90">
                Forever yours.
              </p>
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
