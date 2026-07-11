import { motion } from "framer-motion";

import IndustryCard from "./IndustryCard";
import { industries } from "./IndustryData";

export default function Industries() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-white" />

        {/* Left Glow */}

        <motion.div
          animate={{
            x: [-70, 70, -70],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px]"
        />

        {/* Right Glow */}

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[140px]"
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-sky-200
              bg-white/70
              px-5
              py-2
              text-sm
              font-semibold
              text-sky-600
              backdrop-blur-xl
            "
          >
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">

            Technology Solutions

            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

              {" "}Across Industries

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            We partner with organizations from diverse industries,
            delivering scalable, secure and future-ready digital
            solutions tailored to their unique business challenges.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {industries.map((industry, index) => (

            <IndustryCard
              key={industry.id}
              {...industry}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>
  );
}