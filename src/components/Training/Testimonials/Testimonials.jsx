import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import testimonialData from "./testimonialData";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-cyan-50" />

        {/* Left Blob */}

        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-20, 30, -20],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-44
            top-10
            h-[450px]
            w-[450px]
            rounded-full
            bg-sky-300/20
            blur-[120px]
          "
        />

        {/* Right Blob */}

        <motion.div
          animate={{
            x: [40, -40, 40],
            y: [0, 50, 0],
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
            bottom-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-300/20
            blur-[130px]
          "
        />

        {/* Floating Particles */}

        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-sky-300"
            style={{
              width: 3 + Math.random() * 5,
              height: 3 + Math.random() * 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
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
          initial={{ opacity: 0, y: 25 }}
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
              backdrop-blur-xl
              shadow-lg
            "
          >
            <Sparkles
              size={18}
              className="text-sky-500"
            />

            <span className="font-semibold text-sky-600">
              Success Stories
            </span>
          </div>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .15,
            duration: .7,
          }}
          className="
            mx-auto
            mt-7
            max-w-4xl
            text-center
            text-4xl
            font-black
            text-slate-900

            md:text-5xl

            lg:text-6xl
          "
        >
          Hear From Our

          <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

            Successful Learners

          </span>

        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .3,
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
          Hear directly from our learners who transformed
          their careers through industry-focused training,
          hands-on projects and expert mentorship.
        </motion.p>

        {/* Marquee Container */}

        <div className="relative mt-24 overflow-hidden">

          {/* Left Fade */}

          <div className="absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-white to-transparent" />

          {/* Right Fade */}

          <div className="absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l from-white to-transparent" />

          {/* Cards Row */}
<div className="group overflow-hidden">
  <motion.div
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex w-max gap-8"
  >
    {[...testimonialData, ...testimonialData].map((item, index) => (
      <TestimonialCard
        key={`${item.id}-${index}`}
        {...item}
        delay={0}
      />
    ))}
  </motion.div>
</div>
       

        </div>

      </div>

    </section>
  );
}