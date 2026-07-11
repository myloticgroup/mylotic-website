import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQItem({
  question,
  answer,
  delay = 0,
}) {
  const [open, setOpen] = useState(false);

  return (
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
        duration: .6,
        delay,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/70
        bg-white/70
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(14,165,233,.08)]
        transition-all
        duration-500

        hover:border-sky-300
        hover:shadow-[0_30px_70px_rgba(14,165,233,.15)]
      "
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [.15, .35, .15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-sky-300/20
          blur-[90px]
        "
      />

      {/* Reflection */}

      <motion.div
        animate={{
          x: [-100, 500],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-0
          top-0
          h-full
          w-8
          -skew-x-12
          bg-white/30
          blur-md
        "
      />

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-between
          px-8
          py-7
          text-left
        "
      >
        <h3
          className="
            text-lg
            font-bold
            text-slate-900

            md:text-xl
          "
        >
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: open ? 45 : 0,
          }}
          transition={{
            duration: .3,
          }}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-sky-500
            to-cyan-500
            text-white
            shadow-lg
            shrink-0
            ml-6
          "
        >
          <Plus size={22} />
        </motion.div>

      </button>

      {/* Answer */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: .35,
            }}
            className="overflow-hidden"
          >
            <div className="relative z-10 px-8 pb-8">

              <div className="mb-6 h-px bg-gradient-to-r from-sky-200 via-cyan-300 to-transparent" />

              <p
                className="
                  leading-8
                  text-slate-600
                "
              >
                {answer}
              </p>

            </div>
          </motion.div>

        )}

      </AnimatePresence>

      {/* Bottom Border */}

      <motion.div
        animate={{
          width: open ? "100%" : "0%",
        }}
        transition={{
          duration: .35,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-1
          bg-gradient-to-r
          from-sky-500
          via-cyan-400
          to-sky-500
        "
      />

    </motion.div>
  );
}