import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Layers3,
  CheckCircle2,
} from "lucide-react";

export default function ProgramCard({
  title,
  subtitle,
  icon: Icon,
  duration,
  level,
  features,
  color,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileHover={{
        y: -12,
      }}
      className="group"
    >
      <div
        className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/60
        bg-white/70
        p-8
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(14,165,233,.12)]
        transition-all
        duration-500

        hover:border-sky-300
        hover:shadow-[0_35px_90px_rgba(14,165,233,.22)]
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
          to-cyan-100/40
        "
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [.25, .5, .25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
          absolute
          -right-16
          -top-16
          h-52
          w-52
          rounded-full
          bg-sky-300/20
          blur-[90px]
        "
        />

        {/* Reflection */}

        <motion.div
          animate={{
            x: [-200, 320],
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
          w-12
          -skew-x-12
          bg-white/40
          blur-lg
        "
        />

        <div className="relative z-10">
          {/* Icon */}

          <motion.div
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className={`
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              ${color}
              text-white
              shadow-xl
            `}
          >
            <Icon size={36} />
          </motion.div>

          {/* Title */}

          <h3 className="mt-7 text-2xl font-black text-slate-900">
            {title}
          </h3>

          {/* Subtitle */}

          <p className="mt-3 leading-7 text-slate-600">
            {subtitle}
          </p>

          {/* Chips */}

          <div className="mt-7 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2">

              <Clock3 size={16} className="text-sky-600" />

              <span className="text-sm font-semibold">
                {duration}
              </span>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2">

              <Layers3 size={16} className="text-cyan-600" />

              <span className="text-sm font-semibold">
                {level}
              </span>

            </div>

          </div>

          {/* Divider */}

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

          {/* Features */}

          <div className="space-y-4">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-sky-500"
                />

                <span className="text-slate-600">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* CTA */}

        

        </div>

        {/* Bottom Glow */}

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
          rounded-full
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