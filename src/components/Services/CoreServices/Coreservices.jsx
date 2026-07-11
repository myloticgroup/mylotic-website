import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./serviceData";

export default function CoreServices() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

<div className="absolute inset-0 overflow-hidden">
    <motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 80,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
      absolute
      left-1/2
      top-1/2
      h-[900px]
      w-[900px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-sky-100
"
/>

<motion.div
  animate={{
    rotate: -360,
  }}
  transition={{
    duration: 120,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
      absolute
      left-1/2
      top-1/2
      h-[650px]
      w-[650px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-cyan-100
"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-white" />

        <motion.div
          animate={{
            x: [-80, 80, -80],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-300/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[140px]"
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-sky-200 bg-white/70 px-5 py-2 text-sm font-semibold text-sky-600 shadow backdrop-blur-xl">

            WHAT WE OFFER

          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">

            Our Core

            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

              {" "}Services

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            We provide end-to-end technology solutions that empower
            businesses to innovate faster, improve efficiency,
            and achieve sustainable digital growth.

          </p>

        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (

            <ServiceCard
              key={service.id}
              {...service}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>
  );
}