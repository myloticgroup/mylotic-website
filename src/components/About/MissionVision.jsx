     import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const missionPoints = [
  "Innovation Driven",
  "Customer Success",
  "Quality Engineering",
  "Continuous Improvement",
];

const visionPoints = [
  "Global Impact",
  "Future Ready Solutions",
  "Technology Leadership",
  "Long-Term Partnerships",
];

export default function Mission() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-sky-300 blur-[150px]"
        />

        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-300 blur-[170px]"
        />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-semibold text-sky-700 shadow">

            <Sparkles size={16} />

            Our Purpose

          </span>

          <h2 className="mt-6 text-4xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">

            Mission & Vision

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            We empower businesses through innovation,
            technology and strategic partnerships,
            creating long-term value in a rapidly evolving
            digital world.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2">
            {/* Mission Card */}

<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-[38px]
    border
    border-sky-200
    bg-white/80
    p-10
    backdrop-blur-xl
    shadow-[0_25px_70px_rgba(14,165,233,.08)]
  "
>

  {/* Hover Glow */}

  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="relative">

    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg">

      <Target size={40} />

    </div>

    <h3 className="mt-8 text-5xl font-bold text-slate-900">

      Our Mission

    </h3>

    <p className="mt-8 text-lg leading-9 text-slate-600">

      To empower startups, SMEs, and enterprises with
      innovative, scalable, and secure digital solutions
      that accelerate growth, improve operational
      efficiency, and create lasting business value.

    </p>

    <div className="mt-10 space-y-5">

      {missionPoints.map((item, index) => (

        <motion.div
          key={item}
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.12,
          }}
          className="flex items-center gap-4"
        >

          <CheckCircle2
            size={22}
            className="text-sky-500"
          />

          <span className="text-lg font-medium text-slate-700">

            {item}

          </span>

        </motion.div>

      ))}

    </div>

  </div>

</motion.div>

{/* Vision Card */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: 0.2,
  }}
  whileHover={{
    y: -10,
    scale: 1.02,
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-[38px]
    border
    border-cyan-200
    bg-white/80
    p-10
    backdrop-blur-xl
    shadow-[0_25px_70px_rgba(6,182,212,.08)]
  "
>

  {/* Hover Glow */}

  <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="relative">

    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">

      <Rocket size={40} />

    </div>

    <h3 className="mt-8 text-5xl font-bold text-slate-900">

      Our Vision

    </h3>

    <p className="mt-8 text-lg leading-9 text-slate-600">

      To become one of the world's most trusted
      technology partners, recognized for AI-powered
      innovation, digital transformation, and helping
      businesses achieve sustainable growth.

    </p>

    <div className="mt-10 space-y-5">

      {visionPoints.map((item, index) => (

        <motion.div
          key={item}
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.12,
          }}
          className="flex items-center gap-4"
        >

          <CheckCircle2
            size={22}
            className="text-cyan-500"
          />

          <span className="text-lg font-medium text-slate-700">

            {item}

          </span>

        </motion.div>

      ))}

    </div>

  </div>

</motion.div>
        </div>

        {/* Quote Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mx-auto mt-28 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-sky-200 bg-white/80 p-10 backdrop-blur-xl shadow-[0_25px_80px_rgba(14,165,233,.08)]">

            {/* Background Glow */}

            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/20 blur-[130px]" />

            <div className="relative text-center">

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 6, 0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 text-4xl text-white shadow-xl"
              >
                ✨
              </motion.div>

              <h3 className="text-3xl font-light leading-tight text-slate-900 lg:text-5xl">
                Innovation is not just what we build,

                <span className="mt-4 block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text font-bold text-transparent">
                  it's how we create lasting value.
                </span>
              </h3>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                Every solution we create is designed to help businesses
                innovate faster, operate smarter, and grow with confidence
                in an ever-changing digital world.
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}