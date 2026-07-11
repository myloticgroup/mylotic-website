import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
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
        delay: index * 0.08,
        duration: 0.6,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-white/60
        bg-white/70
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-sky-300
        hover:shadow-[0_30px_80px_rgba(14,165,233,.20)]
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-gradient-to-br
          from-sky-300/20
          to-cyan-300/20
          blur-3xl
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -bottom-20
          -left-20
          h-36
          w-36
          rounded-full
          bg-sky-400/10
          blur-3xl
        "
      />

      {/* Reflection */}

      <div
        className="
          absolute
          -left-full
          top-0
          h-full
          w-1/2
          skew-x-12
          bg-white/20
          blur-xl
          transition-all
          duration-1000
          group-hover:left-[130%]
        "
      />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col">

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.12,
          }}
          className="
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-sky-500
            to-cyan-400
            shadow-xl
          "
        >
          <Icon className="h-10 w-10 text-white" />

          <Sparkles
            className="
              absolute
              -right-2
              -top-2
              h-5
              w-5
              rounded-full
              bg-white
              p-1
              text-sky-500
              shadow-lg
            "
          />
        </motion.div>

        {/* Title */}

        <h3
          className="
            mt-8
            text-2xl
            font-bold
            text-slate-900
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4
            flex-1
            text-base
            leading-7
            text-slate-600
          "
        >
          {description}
        </p>

        {/* Learn More */}

        <motion.div
          whileHover={{
            x: 5,
          }}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            font-semibold
            text-sky-600
          "
        >
       

     
        </motion.div>

      </div>
    </motion.div>
  );
}