import { motion } from "framer-motion";

export default function IndustryCard({
  icon: Icon,
  title,
  description,
  index,
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
        delay: index * 0.08,
        duration: 0.6,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/60
        bg-white/70
        p-7
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-500
        hover:border-sky-300
        hover:shadow-[0_25px_60px_rgba(14,165,233,.18)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-sky-100/20
          via-cyan-100/30
          to-white
        "
      />

      {/* Top Border */}

      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-gradient-to-r
          from-sky-500
          to-cyan-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.12,
        }}
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-sky-500
          to-cyan-400
          shadow-xl
        "
      >
        <Icon className="h-8 w-8 text-white" />
      </motion.div>

      {/* Title */}

      <h3 className="relative mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}

      <p className="relative mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}