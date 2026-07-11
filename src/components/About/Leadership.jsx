import { motion } from "framer-motion";
import {
  Sparkles,
  Lightbulb,
  ShieldCheck,
  Star,
  Handshake,
  Globe2,
} from "lucide-react";

const principles = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore new ideas and technologies to create future-ready digital solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Trust, transparency, and accountability guide every decision and partnership.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Every project is delivered with exceptional quality, precision, and attention to detail.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We believe long-term relationships create long-term success for every client.",
  },
];

export default function Leadership() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-sky-300 blur-[160px]"
        />

        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-300 blur-[180px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-semibold text-sky-700 shadow">
            <Sparkles size={16} />
            Leadership Principles
          </span>

          <h2 className="mt-6 text-4xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
            What Drives Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Mylotic Group, our leadership is built on innovation,
            integrity, excellence, and lasting partnerships that
            transform businesses through technology.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative mt-24 hidden min-h-[720px] items-center justify-center lg:flex">

          {/* Center Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute h-[340px] w-[340px] rounded-full bg-sky-300/20 blur-[120px]"
          />

          {/* Center Circle */}

          <motion.div
            animate={{
              rotate: [0, 5, 0, -5, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              relative
              z-20
              flex
              h-56
              w-56
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-sky-200
              bg-white/90
              backdrop-blur-xl
              shadow-[0_25px_80px_rgba(14,165,233,.12)]
            "
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500">
              <Globe2 size={44} className="text-white" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              MYLOTIC
            </h3>

            <p className="mt-2 text-sm tracking-[0.3em] text-slate-500 uppercase">
              Leadership
            </p>
          </motion.div>

          {/* Desktop Floating Cards */}
          {/* Innovation */}

<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  animate={{ y: [0, -12, 0] }}
  className="
    absolute
    left-0
    top-10
    w-72
    rounded-[30px]
    border
    border-sky-200
    bg-white/80
    p-6
    backdrop-blur-xl
    shadow-[0_20px_60px_rgba(14,165,233,.10)]
  "
>
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white">
    <Lightbulb size={28} />
  </div>

  <h4 className="mt-5 text-2xl font-semibold text-slate-900">
    Innovation
  </h4>

  <p className="mt-3 leading-7 text-slate-600">
    We embrace creativity and emerging technologies to
    build intelligent digital experiences for modern
    businesses.
  </p>
</motion.div>

{/* Integrity */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.15 }}
  animate={{ y: [0, 12, 0] }}
  className="
    absolute
    right-0
    top-14
    w-72
    rounded-[30px]
    border
    border-cyan-200
    bg-white/80
    p-6
    backdrop-blur-xl
    shadow-[0_20px_60px_rgba(6,182,212,.10)]
  "
>
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
    <ShieldCheck size={28} />
  </div>

  <h4 className="mt-5 text-2xl font-semibold text-slate-900">
    Integrity
  </h4>

  <p className="mt-3 leading-7 text-slate-600">
    Transparency, trust and accountability guide every
    relationship we build with our clients.
  </p>
</motion.div>

{/* Excellence */}

<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.3 }}
  animate={{ y: [0, 14, 0] }}
  className="
    absolute
    bottom-10
    left-10
    w-72
    rounded-[30px]
    border
    border-sky-200
    bg-white/80
    p-6
    backdrop-blur-xl
    shadow-[0_20px_60px_rgba(245,158,11,.10)]
  "
>
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
    <Star size={28} />
  </div>

  <h4 className="mt-5 text-2xl font-semibold text-slate-900">
    Excellence
  </h4>

  <p className="mt-3 leading-7 text-slate-600">
    Every project is crafted with precision, quality,
    performance and attention to detail.
  </p>
</motion.div>

{/* Partnership */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.45 }}
  animate={{ y: [0, -14, 0] }}
  className="
    absolute
    bottom-6
    right-10
    w-72
    rounded-[30px]
    border
    border-cyan-200
    bg-white/80
    p-6
    backdrop-blur-xl
    shadow-[0_20px_60px_rgba(16,185,129,.10)]
  "
>
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
    <Handshake size={28} />
  </div>

  <h4 className="mt-5 text-2xl font-semibold text-slate-900">
    Partnership
  </h4>

  <p className="mt-3 leading-7 text-slate-600">
    Long-term collaboration creates sustainable growth,
    innovation and lasting business success.
  </p>
</motion.div>

</div>

{/* Mobile Cards */}
{/* Mobile Cards */}

<div className="mt-16 grid gap-6 lg:hidden">
  {principles.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.title}
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
          delay: index * 0.12,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
          rounded-[30px]
          border
          border-sky-200
          bg-white/80
          p-7
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(14,165,233,.10)]
        "
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg">
          <Icon size={30} />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          {item.description}
        </p>
      </motion.div>
    );
  })}
</div>

{/* Bottom Quote */}

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
    duration: 0.8,
    delay: 0.2,
  }}
  className="mx-auto mt-24 max-w-5xl"
>
  <div className="relative overflow-hidden rounded-[40px] border border-sky-200 bg-white p-10 shadow-[0_25px_80px_rgba(14,165,233,.08)]">

    <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/20 blur-[120px]" />

    <div className="relative text-center">

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-4xl text-white shadow-xl"
      >
        🚀
      </motion.div>

      <h3 className="text-3xl font-light leading-tight text-slate-900 lg:text-5xl">
        Leadership is not just about direction.

        <span className="mt-4 block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text font-semibold text-transparent">
          It's about inspiring innovation, trust and growth.
        </span>
      </h3>

    </div>

  </div>
</motion.div>

      </div>
    </section>
  );
}
          

          
          