import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

import FAQItem from "./FAQItem";
import faqData from "./faqData";

export default function FAQ() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-cyan-50" />

        {/* Left Glow */}

        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-20, 30, -20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-52
            top-10
            h-[520px]
            w-[520px]
            rounded-full
            bg-sky-300/20
            blur-[150px]
          "
        />

        {/* Right Glow */}

        <motion.div
          animate={{
            x: [40, -40, 40],
            y: [20, -20, 20],
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
            h-[540px]
            w-[540px]
            rounded-full
            bg-cyan-300/20
            blur-[160px]
          "
        />

      </div>

      <div className="mx-auto max-w-5xl px-6">

        {/* Badge */}

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
            <HelpCircle
              size={18}
              className="text-sky-500"
            />

            <span className="font-semibold text-sky-600">

              Frequently Asked Questions

            </span>

          </div>
        </motion.div>

        {/* Heading */}

        <motion.h2
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
            delay: .15,
          }}
          className="
            mt-8
            text-center
            text-4xl
            font-black
            text-slate-900

            md:text-5xl

            lg:text-6xl
          "
        >

          Have Questions?

          <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

            We've Got Answers

          </span>

        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
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

          Find quick answers to the most common questions
          about our services, training programs, and support.

        </motion.p>

        {/* FAQ List */}

        <div className="mt-16 space-y-6">

          {faqData.map((item, index) => (

            <FAQItem
              key={item.id}
              {...item}
              delay={index * .08}
            />

          ))}

        </div>

      </div>

    </section>
  );
}