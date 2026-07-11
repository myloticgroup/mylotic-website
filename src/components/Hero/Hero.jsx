import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[-180px] top-16 h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[120px]" />

        <div className="absolute right-[-180px] bottom-0 h-[480px] w-[480px] rounded-full bg-cyan-300/20 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/20 blur-[160px]" />
      </div>

      {/* Floating Background Logo */}
      <motion.div
        className="pointer-events-none absolute left-6 top-28 hidden lg:block -z-10"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 1.5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/logo.png"
          alt="Manya Global Solutions"
          draggable={false}
          className="
            w-[650px]
            xl:w-[720px]
            2xl:w-[780px]
            select-none
            opacity-95
            drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]
          "
        />
      </motion.div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 2xl:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <HeroContent />
          <HeroCards />
        </div>
      </div>
    </section>
  );
}