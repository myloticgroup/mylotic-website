import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import LearningOrbit from "./LearningOrbit";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-sky-50
        via-white
        to-cyan-50
        pt-24
        pb-16
        sm:pt-28
        sm:pb-20
        lg:pt-36
        lg:pb-28
        xl:pt-40
        xl:pb-32
      "
    >

      {/* Background */}

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
            bg-sky-300/25
            blur-[110px]
            sm:h-[380px]
            sm:w-[380px]
            lg:h-[420px]
            lg:w-[420px]
          "
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
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
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-300/20
            blur-[120px]
            sm:h-[420px]
            sm:w-[420px]
            lg:h-[520px]
            lg:w-[520px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-sky-200/20
            blur-[110px]
            sm:h-[300px]
            sm:w-[300px]
            lg:h-[350px]
            lg:w-[350px]
          "
        />

      </div>

      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col-reverse
          items-center
          gap-14
          px-5
          sm:px-6
          lg:flex-row
          lg:gap-20
          lg:px-8
        "
      >

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
          }}
          className="flex-1 text-center lg:text-left"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl sm:px-5">

            <Sparkles className="h-4 w-4 text-sky-500" />

            <span className="text-sm font-semibold text-sky-600 sm:text-base">

              Learn • Build • Grow

            </span>

          </div>

          <h1 className="mt-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">

            Become

            <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

              Industry Ready

            </span>

            With Mylotic

          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">

            Learn directly from industry experts through live
            sessions, real-world projects, internships and
            placement-focused programs designed for your future.

          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <button className="group flex items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600">

              Explore Programs

              <ArrowRight className="transition group-hover:translate-x-1" />

            </button>

            <button className="rounded-full border border-sky-300 bg-white/70 px-8 py-4 font-semibold text-slate-700 backdrop-blur-xl transition hover:border-sky-500 hover:text-sky-600">

              Talk to Expert

            </button>

          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-3 lg:text-left">

            <div>

              <h3 className="text-3xl font-black text-sky-600">

                200+

              </h3>

              <p className="mt-1 text-slate-600">

                Training Programs

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-sky-600">

                1000+

              </h3>

              <p className="mt-1 text-slate-600">

                Learners

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-sky-600">

                24×7

              </h3>

              <p className="mt-1 text-slate-600">

                Mentor Support

              </p>

            </div>

          </div>

        </motion.div>

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
            duration: 0.8,
          }}
          className="
            flex
            flex-1
            justify-center
            lg:justify-end
          "
        >
          <LearningOrbit />
        </motion.div>

      </div>

    </section>
  );
}