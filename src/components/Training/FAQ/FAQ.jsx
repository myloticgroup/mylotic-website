import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";
import { Link } from "react-router-dom";


export default function FAQ() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-sky-50" />

        {/* Blob */}

        <motion.div
          animate={{
            x: [-60, 50, -60],
            y: [-20, 30, -20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-10 h-[500px] w-[500px] rounded-full bg-sky-300/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [40, -50, 40],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-180px] bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[130px]"
        />

      </div>

      <div className="mx-auto max-w-5xl px-6">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-xl">

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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
          className="mx-auto mt-7 text-center text-4xl font-black text-slate-900 md:text-5xl"
        >

          Everything You Need

          <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

            Before You Start

          </span>

        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600"
        >

          Find answers to the most commonly asked
          questions about our training programs,
          mentorship and placement support.

        </motion.p>

        {/* FAQ Items */}
<div className="mt-20 space-y-6">

  {faqData.map((item, index) => (

    <FAQItem
      key={item.id}
      {...item}
      delay={index * 0.08}
    />

  ))}

</div>
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
    duration: 0.7,
    delay: 0.3,
  }}
  className="
    relative
    mt-20
    overflow-hidden
    rounded-[36px]
    border
    border-white/60
    bg-white/70
    p-10
    text-center
    backdrop-blur-2xl
    shadow-[0_25px_60px_rgba(14,165,233,.12)]
  "
>
  {/* Background Glow */}

  <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/50 to-cyan-100/40" />

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="
      absolute
      -right-20
      -top-20
      h-64
      w-64
      rounded-full
      bg-sky-300/20
      blur-[120px]
    "
  />

  <div className="relative z-10">

    <h3 className="text-3xl font-black text-slate-900">

      Still Have Questions?

    </h3>

    <p className="mx-auto mt-4 max-w-2xl text-slate-600 leading-8">

      Our training advisors are happy to guide you in choosing
      the right learning path for your career goals.

    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-5">

    <Link
  to="/contact"
  className="
    inline-flex
    items-center
    justify-center
    rounded-full
    bg-sky-500
    px-8
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-sky-600
  "
>
  Talk to Counselor
</Link>


    </div>

  </div>

</motion.div>
     
      </div>

    </section>
  );
}