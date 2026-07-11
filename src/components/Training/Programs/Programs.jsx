import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";
import programData from "./programData";
import { Sparkles } from "lucide-react";

export default function Programs() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-sky-50" />

        {/* Left Blob */}

        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-30, 30, -30],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-52
            top-0
            h-[520px]
            w-[520px]
            rounded-full
            bg-sky-300/20
            blur-[120px]
          "
        />

        {/* Right Blob */}

        <motion.div
          animate={{
            x: [40, -40, 40],
            y: [20, -20, 20],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            top-24
            h-[480px]
            w-[480px]
            rounded-full
            bg-cyan-300/20
            blur-[130px]
          "
        />

        {/* Decorative Ring */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-20
            top-48
            h-32
            w-32
            rounded-full
            border
            border-sky-200/60
          "
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            bottom-32
            right-20
            h-24
            w-24
            rounded-full
            border
            border-cyan-200/60
            border-dashed
          "
        />

        {/* Floating Particles */}

        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-sky-300"
            style={{
              width: 4 + Math.random() * 5,
              height: 4 + Math.random() * 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

      </div>

      {/* ================= Content ================= */}

      <div className="mx-auto max-w-7xl px-6">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="flex justify-center"
        >

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-sky-200
              bg-white/70
              px-6
              py-3
              shadow-lg
              backdrop-blur-xl
            "
          >

            <Sparkles
              size={18}
              className="text-sky-500"
            />

            <span className="font-semibold text-sky-600">
              Industry Focused Learning
            </span>

          </div>

        </motion.div>

        {/* Heading */}

        <motion.h2
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
            delay: .2,
            duration: .7,
          }}
          className="
            mx-auto
            mt-7
            max-w-4xl
            text-center
            text-4xl
            font-black
            leading-tight
            text-slate-900

            md:text-5xl

            lg:text-6xl
          "
        >
          Choose Your{" "}

          <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

            Learning Path

          </span>

        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: .35,
            duration: .7,
          }}
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-slate-600
          "
        >
          Explore career-focused programs designed by industry
          professionals with live mentorship, hands-on projects,
          internship opportunities and placement support.
        </motion.p>

        {/* Cards */}

        <div
          className="
            mt-20
            grid
            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >

          {programData.map((program, index) => (

            <ProgramCard
              key={program.id}
              {...program}
              delay={index * 0.12}
            />

          ))}

        </div>

      </div>

    </section>
  );
}