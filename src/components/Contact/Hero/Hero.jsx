import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import CommunicationHub from "./CommunicationHub";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50 pt-36 pb-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Left Blob */}

        <motion.div
          animate={{
            x: [-70, 60, -70],
            y: [-20, 50, -20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-[140px]"
        />

        {/* Right Blob */}

        <motion.div
          animate={{
            x: [60, -60, 60],
            y: [20, -30, 20],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-120px] top-0 h-[560px] w-[560px] rounded-full bg-cyan-300/20 blur-[150px]"
        />

        {/* Center Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/20 blur-[140px]"
        />

      </div>

      {/* ================= Main ================= */}

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-20 px-6 lg:flex-row">

        {/* Left */}

        <div className="flex-1">
          <HeroContent />
        </div>

        {/* Right */}

      {/* Right */}

<motion.div
  initial={{
    opacity: 0,
    x: 60,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: .8,
  }}
  animate={{
    y: [-8, 8, -8],
    rotate: [-1, 1, -1],
  }}
  className="
    flex
    flex-1
    items-center
    justify-center

    py-8

    lg:py-0
  "
>
  <CommunicationHub />
</motion.div>
      </div>

    </section>
  );
}