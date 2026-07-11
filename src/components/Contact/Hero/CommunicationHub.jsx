import { motion } from "framer-motion";

import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Globe,
  Headphones,
  Briefcase,
} from "lucide-react";

const nodes = [
  {
    icon: Phone,
    title: "Call",
    top: "8%",
    left: "50%",
  },

  {
    icon: Mail,
    title: "Email",
    top: "23%",
    right: "6%",
  },

  {
    icon: CalendarDays,
    title: "Meeting",
    top: "50%",
    right: "2%",
  },

  {
    icon: Briefcase,
    title: "Business",
    bottom: "18%",
    right: "8%",
  },

  {
    icon: Globe,
    title: "Website",
    bottom: "8%",
    left: "50%",
  },

  {
    icon: Headphones,
    title: "Support",
    bottom: "18%",
    left: "8%",
  },

  {
    icon: MapPin,
    title: "Office",
    top: "50%",
    left: "2%",
  },

  {
    icon: MessageCircle,
    title: "Chat",
    top: "23%",
    left: "6%",
  },
];

export default function CommunicationHub() {
  return (
<div
  className="
    relative
    mx-auto

    -translate-y-16
    sm:-translate-y-20
    md:-translate-y-24
    lg:-translate-y-28
    xl:-translate-y-32

    flex

    h-[280px]
    w-[280px]

    sm:h-[360px]
    sm:w-[360px]

    md:h-[450px]
    md:w-[450px]

    lg:h-[520px]
    lg:w-[520px]

    xl:h-[570px]
    xl:w-[570px]

    items-center
    justify-center
  "
>
      {/* ===================== Background Glow ===================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.75, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          bg-sky-400/20
          blur-[130px]
        "
      />

      {/* ===================== Outer Ring ===================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[470px]
          w-[470px]
          rounded-full
          border
          border-sky-200/60
        "
      />

      {/* ===================== Middle Ring ===================== */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[330px]
          w-[330px]
          rounded-full
          border
          border-cyan-200/70
        "
      />

      {/* ===================== Inner Ring ===================== */}

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
          h-[190px]
          w-[190px]
          rounded-full
          border
          border-sky-300/70
        "
      />

      {/* ===================== Decorative Circles ===================== */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-dashed
          border-sky-200/40
        "
      />

      {/* ===================== Floating Dots ===================== */}

      <div className="absolute inset-0">

        <span className="absolute left-10 top-14 h-3 w-3 rounded-full bg-sky-300" />

        <span className="absolute right-14 top-24 h-2 w-2 rounded-full bg-cyan-300" />

        <span className="absolute bottom-16 left-12 h-2 w-2 rounded-full bg-sky-400" />

        <span className="absolute bottom-12 right-16 h-3 w-3 rounded-full bg-cyan-400" />

      </div>

      {/* ===================== Center Card ===================== */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          relative
          z-20
          flex
          h-44
          w-44
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-white/70
          bg-white/70
          shadow-[0_20px_60px_rgba(14,165,233,.20)]
          backdrop-blur-3xl
h-32
w-32

sm:h-40
sm:w-40

lg:h-48
lg:w-48
        "
      >
        {/* Glass Gradient */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-br
            from-sky-300/20
            to-cyan-300/20
          "
        />

        {/* Pulse */}

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.35, 0, 0.35],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            absolute
            h-32
            w-32
            rounded-full
            bg-sky-300/20
            blur-3xl
          "
        />

        {/* Icon */}

        <MessageCircle className="relative h-14 w-14 text-sky-500" />

        <h2 className="relative mt-4 text-2xl font-black text-slate-800">
          CONNECT
        </h2>

        <p className="relative text-sm text-slate-500">
          With Mylotic
        </p>

      </motion.div>

      {/* ===================== Communication Nodes ===================== */}
      {/* ================= Communication Nodes ================= */}

{nodes.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={item.title}
      animate={{
        y: [-10, 10, -10],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        ...item,
        transform:
          item.left === "50%"
            ? "translateX(-50%)"
            : undefined,
      }}
      className="absolute z-20"
    >
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.1,
        }}
        className="
          group
          relative
          flex
          h-14
w-14

sm:h-16
sm:w-16

lg:h-20
lg:w-20
      
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-white/70
          bg-white/75
          shadow-xl
          backdrop-blur-2xl
          transition-all
          duration-300

          hover:border-sky-300
          hover:shadow-[0_20px_50px_rgba(14,165,233,.25)]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-br
            from-sky-300/0
            to-cyan-300/30
            opacity-0
            transition
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Pulse */}

        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.35, 0, 0.35],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className="
            absolute
            h-full
            w-full
            rounded-3xl
            border
            border-sky-300/40
          "
        />

        {/* Reflection */}

        <motion.div
          animate={{
            x: [-50, 120],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.4,
          }}
          className="
            absolute
            left-0
            top-0
            h-full
            w-5
            -skew-x-12
            bg-white/40
            blur-sm
          "
        />

        <Icon className="relative h-8 w-8 text-sky-500" />

        <span className="relative mt-1 text-[11px] font-semibold text-slate-700">
          {item.title}
        </span>

        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
      </motion.div>
    </motion.div>
  );
})}

      {/* Part 3 */}

    </div>
  );
}