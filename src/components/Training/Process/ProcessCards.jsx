import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProcessCard({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
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
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group relative"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/70
          bg-white/70
          p-8
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(14,165,233,.10)]
          transition-all
          duration-500

          hover:border-sky-300
          hover:shadow-[0_35px_70px_rgba(14,165,233,.20)]
        "
      >
        {/* Background */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white
            via-sky-50/60
            to-cyan-100/30
          "
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
            absolute
            -right-20
            -top-20
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
            x: [-100, 350],
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
            bg-white/35
            blur-md
          "
        />

        <div className="relative z-10">

          {/* Top */}

          <div className="flex items-start justify-between">

            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              className="
                flex
                h-16
                w-16
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
              <Icon size={30} />
            </motion.div>

            <div
              className="
                rounded-full
                bg-sky-100
                px-4
                py-2
                text-sm
                font-black
                text-sky-600
              "
            >
              {number}
            </div>

          </div>

          {/* Title */}

          <h3 className="mt-8 text-2xl font-black text-slate-900">
            {title}
          </h3>

          {/* Description */}

          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-emerald-500
                "
              />

              <span className="text-sm font-semibold text-slate-600">
                Step {number}
              </span>

            </div>

            <ArrowRight
              size={20}
              className="
                text-sky-500
                transition
                duration-300
                group-hover:translate-x-2
              "
            />

          </div>

        </div>

        {/* Bottom Border */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileHover={{
            width: "100%",
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