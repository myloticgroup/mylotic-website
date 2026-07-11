import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TechnologyHub from "./TechnologyHub";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 xl:pt-40 xl:pb-32">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [-80, 60, -80],
            y: [-20, 40, -20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-10
            h-[300px]
            w-[300px]
            rounded-full
            bg-sky-300/30
            blur-[110px]
            sm:h-[420px]
            sm:w-[420px]
          "
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 70, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            top-0
            h-[340px]
            w-[340px]
            rounded-full
            bg-cyan-300/30
            blur-[130px]
            sm:h-[500px]
            sm:w-[500px]
          "
        />

      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-5 sm:px-6 lg:flex-row lg:gap-20 lg:px-8">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl sm:px-5">

            <Sparkles className="h-4 w-4 text-sky-500" />

            <span className="text-sm font-medium text-sky-700 sm:text-base">
              Smart Digital Transformation
            </span>

          </div>

          <h1 className="mt-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">

            Innovative

            <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

              Technology

            </span>

            Solutions

          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">

            We engineer intelligent software, AI-powered solutions,
            secure cloud infrastructure and scalable digital
            platforms that accelerate business growth.

          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

          </div>

        </motion.div>

        {/* Right */}

        <div className="flex-1">

          <TechnologyHub />

        </div>

      </div>

    </section>
  );
}