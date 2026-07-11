import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

import ProcessCard from "./ProcessCards";
import processData from "./processData";

export default function Process() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-cyan-50" />

        {/* Left Glow */}

        <motion.div
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-48
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-sky-300/20
            blur-[150px]
          "
        />

        {/* Right Glow */}

        <motion.div
          animate={{
            x: [50, -50, 50],
            y: [20, -20, 20],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            bottom-0
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-300/20
            blur-[160px]
          "
        />

        {/* Floating Particles */}

        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-sky-300"
            style={{
              width: 3 + Math.random() * 3,
              height: 3 + Math.random() * 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
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
            <Workflow
              size={18}
              className="text-sky-500"
            />

            <span className="font-semibold text-sky-600">

              Learning Journey

            </span>

          </div>

        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .7,
            delay: .15,
          }}
          className="
            mx-auto
            mt-8
            max-w-4xl
            text-center
            text-4xl
            font-black
            text-slate-900

            md:text-5xl

            lg:text-6xl
          "
        >

          Your Journey To

          <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

            Becoming Industry Ready

          </span>

        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .7,
            delay: .3,
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
          Our structured learning process ensures that every learner
          gains practical skills, hands-on experience, and career
          guidance to confidently step into the industry.
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

          {processData.map((item, index) => (
            <ProcessCard
              key={item.id}
              {...item}
              delay={index * 0.12}
            />
          ))}

        </div>

      </div>

    </section>
  );
}