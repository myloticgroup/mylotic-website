import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import {
  ArrowRight,
  PhoneCall,
  Sparkles,
  BrainCircuit,
  Globe,
  Cloud,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function CTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const spotlight = useMotionTemplate`
    radial-gradient(
      450px circle at ${mouseX}px ${mouseY}px,
      rgba(56,189,248,.18),
      transparent 70%
    )
  `;

  return (
    <section className="relative overflow-hidden py-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-sky-50" />

        {/* Left Glow */}

        <motion.div
          animate={{
            x: [-80, 60, -80],
            y: [-20, 40, -20],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[120px]"
        />

        {/* Right Glow */}

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 70, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[150px]"
        />

        {/* Center Glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/20 blur-[140px]"
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          onMouseMove={handleMouseMove}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[42px]
            border
            border-white/60
            bg-white/65
            px-8
            py-20
            shadow-[0_30px_90px_rgba(14,165,233,.12)]
            backdrop-blur-3xl
            md:px-16
          "
        >

          {/* Mouse Spotlight */}

          <motion.div
            style={{
              background: spotlight,
            }}
            className="absolute inset-0"
          />

          {/* Glass Reflection */}

          <div
            className="
              absolute
              -left-full
              top-0
              h-full
              w-40
              skew-x-[-20deg]
              bg-white/40
              blur-xl
              transition-all
              duration-[1800ms]
              group-hover:left-[130%]
            "
          />

          {/* Rotating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              -right-44
              -top-44
              h-96
              w-96
              rounded-full
              border
              border-sky-200/70
            "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              -left-44
              -bottom-44
              h-80
              w-80
              rounded-full
              border
              border-cyan-200/70
            "
          />

          {/* Floating Icons */}

          <motion.div
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              absolute
              left-14
              top-12
              rounded-2xl
              border
              border-white/60
              bg-white/70
              p-4
              shadow-xl
              backdrop-blur-xl
            "
          >
            <BrainCircuit className="h-8 w-8 text-sky-500" />
          </motion.div>

          <motion.div
            animate={{
              y: [10, -10, 10],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="
              absolute
              right-14
              top-20
              rounded-2xl
              border
              border-white/60
              bg-white/70
              p-4
              shadow-xl
              backdrop-blur-xl
            "
          >
            <Cloud className="h-8 w-8 text-sky-500" />
          </motion.div>

          <motion.div
            animate={{
              y: [-10, 15, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-12
              left-20
              rounded-2xl
              border
              border-white/60
              bg-white/70
              p-4
              shadow-xl
              backdrop-blur-xl
            "
          >
            <Globe className="h-8 w-8 text-sky-500" />
          </motion.div>

          {/* ================= Content ================= */}

          <div className="relative mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-5 py-2 text-sm font-semibold text-sky-600 shadow">

              <Sparkles className="h-4 w-4" />

              START YOUR DIGITAL JOURNEY

            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 md:text-6xl">

              Let's Build the

              <span className="block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">

                Future Together

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

              Whether you're launching a startup, modernizing enterprise
              systems, implementing AI, or scaling digital infrastructure,
              our experts are ready to transform your ideas into successful,
              future-ready solutions.

            </p>

            {/* PART 2 STARTS HERE */}
                        {/* CTA Buttons */}

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              {/* Primary */}

              <NavLink
                to="/contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-sky-500
                  via-cyan-500
                  to-sky-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(14,165,233,.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-105
                "
              >
                {/* Shine */}

                <span
                  className="
                    absolute
                    -left-24
                    top-0
                    h-full
                    w-20
                    rotate-12
                    bg-white/30
                    blur-lg
                    transition-all
                    duration-700
                    group-hover:left-[130%]
                  "
                />

                <Sparkles className="relative h-5 w-5" />

                <span className="relative">
                  Start Your Project
                </span>

                <ArrowRight
                  className="
                    relative
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </NavLink>

              {/* Secondary */}

              <NavLink
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-sky-200
                  bg-white/70
                  px-8
                  py-4
                  font-semibold
                  text-slate-700
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-400
                  hover:bg-white
                  hover:text-sky-600
                  hover:shadow-xl
                "
              >
                <PhoneCall className="h-5 w-5" />

                Talk to Our Experts
              </NavLink>

            </div>

          </div>

          {/* Floating Particles */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {[...Array(18)].map((_, i) => (

              <motion.span
                key={i}
                animate={{
                  y: [20, -80],
                  opacity: [0, .8, 0],
                  scale: [0.4, 1, .4],
                }}
                transition={{
                  duration: 6 + (i % 5),
                  repeat: Infinity,
                  delay: i * .4,
                  ease: "easeInOut",
                }}
                className="absolute h-2 w-2 rounded-full bg-sky-300/70"
                style={{
                  left: `${5 + i * 5}%`,
                  bottom: "-20px",
                }}
              />

            ))}

          </div>

          {/* Decorative Bottom Line */}

          <motion.div
            animate={{
              opacity: [.4, 1, .4],
              scaleX: [.95, 1, .95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-0
              left-1/2
              h-[2px]
              w-72
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-sky-400
              to-transparent
            "
          />

        </motion.div>

      </div>

    </section>

  );
}