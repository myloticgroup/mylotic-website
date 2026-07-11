import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ArrowUpRight,
} from "lucide-react";

export default function TestimonialCard({
  image,
  name,
  role,
  company,
  review,
  delay = 0,
}) {
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
        duration: 0.7,
        delay,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      className="group flex-shrink-0"
    >
      <div
        className="
        relative
        w-[360px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/70
        bg-white/70
        p-8
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(14,165,233,.12)]
        transition-all
        duration-500

        hover:border-sky-300
        hover:shadow-[0_35px_80px_rgba(14,165,233,.22)]
      "
      >
        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/50 to-cyan-100/40" />

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
            x: [-220, 420],
          }}
          transition={{
            duration: 6,
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
          {/* Quote */}

          <div className="flex justify-between items-start">
            <div
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
              <Quote size={28} />
            </div>

            <ArrowUpRight
              size={20}
              className="
                text-sky-400
                transition
                duration-300
                group-hover:rotate-45
              "
            />
          </div>

          {/* Stars */}

          <div className="mt-6 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Review */}

          <p
            className="
            mt-6
            leading-8
            text-slate-600
          "
          >
            "{review}"
          </p>

          {/* Divider */}

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

          {/* User */}

          <div className="flex items-center gap-4">

            <img
              src={image}
              alt={name}
              className="
                h-16
                w-16
                rounded-full
                object-cover
                border-4
                border-white
                shadow-lg
              "
            />

            <div>

              <h4 className="font-black text-slate-900">
                {name}
              </h4>

              <p className="text-sm text-slate-500">
                {role}
              </p>

            </div>

          </div>

          {/* Company */}

          <div className="mt-6">

            <span
              className="
              rounded-full
              bg-sky-100
              px-4
              py-2
              text-sm
              font-semibold
              text-sky-700
            "
            >
              {company}
            </span>

          </div>
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