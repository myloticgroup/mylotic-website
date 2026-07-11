import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
        duration: 0.6,
        delay,
      }}
      className="group"
    >
      <div
        className={`
          relative
          overflow-hidden
          rounded-[28px]
          border
          backdrop-blur-2xl
          transition-all
          duration-500

          ${
            open
              ? "border-sky-300 bg-white/80 shadow-[0_25px_60px_rgba(14,165,233,.18)]"
              : "border-white/60 bg-white/70 shadow-[0_15px_40px_rgba(14,165,233,.10)]"
          }
        `}
      >
        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/60 to-cyan-100/30" />

        {/* Animated Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sky-300/20 blur-[100px]"
        />

        {/* Reflection */}

        <motion.div
          animate={{
            x: [-180, 450],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 top-0 h-full w-10 -skew-x-12 bg-white/40 blur-lg"
        />

        {/* Header */}

        <button
          onClick={() => setOpen(!open)}
          className="relative z-10 flex w-full items-center justify-between px-8 py-7 text-left"
        >
          <h3 className="pr-6 text-lg font-bold text-slate-900 md:text-xl">
            {question}
          </h3>

          <motion.div
            animate={{
              rotate: open ? 180 : 0,
              scale: open ? 1.05 : 1,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-sky-500
              to-cyan-500
              text-white
              shadow-lg
            "
          >
            {open ? <Minus size={22} /> : <Plus size={22} />}
          </motion.div>
        </button>

        {/* Answer */}

        <AnimatePresence initial={false}>
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
                duration: 0.45,
              }}
              className="overflow-hidden"
            >
              <div className="relative z-10 px-8 pb-8">

                <div className="mb-6 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

                <p className="leading-8 text-slate-600">
                  {answer}
                </p>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Border */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: open ? "100%" : "0%",
          }}
          transition={{
            duration: 0.4,
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
      </div>
    </motion.div>
  );
}