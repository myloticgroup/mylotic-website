import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Landmark,
  Sparkles,
} from "lucide-react";

export default function Certificate() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-cyan-50" />

        {/* Left Glow */}

        <motion.div
          animate={{
            x: [-60, 60, -60],
            y: [-20, 40, -20],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-52
            top-10
            h-[520px]
            w-[520px]
            rounded-full
            bg-sky-300/20
            blur-[150px]
          "
        />

        {/* Right Glow */}

        <motion.div
          animate={{
            x: [40, -60, 40],
            y: [20, -20, 20],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            bottom-0
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-300/20
            blur-[170px]
          "
        />

        {/* Floating Particles */}

        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-sky-300"
            style={{
              width: 4,
              height: 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

      </div>

      {/* ================= Container ================= */}

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-sky-200
                bg-white/70
                px-6
                py-3
                shadow-lg
                backdrop-blur-xl
              "
            >
              <Landmark
                size={18}
                className="text-sky-500"
              />

              <span className="font-semibold text-sky-600">
                Government Recognition
              </span>

            </div>

            {/* Heading */}

            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                text-slate-900

                md:text-5xl

                xl:text-6xl
              "
            >
              Proud to be a

              <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

                DPIIT Recognized

              </span>

            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              MYLOTIC GROUP Private Limited is officially
              recognized by the Department for Promotion
              of Industry and Internal Trade (DPIIT),
              Government of India under the Startup India initiative.
            </p>

            {/* Recognition Cards */}

            <div className="mt-10 space-y-6">

              <motion.div
                whileHover={{ x: 8 }}
                className="
                  flex
                  items-start
                  gap-5
                  rounded-2xl
                  border
                  border-white/60
                  bg-white/70
                  p-5
                  shadow-lg
                  backdrop-blur-xl
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-emerald-500
                    to-green-400
                    text-white
                  "
                >
                  <BadgeCheck size={24} />
                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900">
                    DPIIT Recognized
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Officially recognized by the Department for Promotion
                    of Industry and Internal Trade under the Startup India initiative.
                  </p>

                </div>

              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="
                  flex
                  items-start
                  gap-5
                  rounded-2xl
                  border
                  border-white/60
                  bg-white/70
                  p-5
                  shadow-lg
                  backdrop-blur-xl
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-sky-500
                    to-cyan-500
                    text-white
                  "
                >
                  <Building2 size={24} />
                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900">
                    Private Limited Company
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Incorporated under the Companies Act, 2013 with a strong
                    commitment to innovation, technology, and business excellence.
                  </p>

                </div>

              </motion.div>

            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}
          {/* ================= RIGHT ================= */}

<motion.div
  initial={{
    opacity: 0,
    x: 60,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
  }}
  className="relative flex items-center justify-center"
>

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.25, 0.45, 0.25],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
    }}
    className="
      absolute
      h-[520px]
      w-[520px]
      rounded-full
      bg-sky-300/20
      blur-[140px]
    "
  />

  {/* Floating Card */}

  <motion.div
    animate={{
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.03,
    }}
    className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-white/70
      bg-white/70
      p-5
      shadow-[0_30px_80px_rgba(14,165,233,.15)]
      backdrop-blur-2xl
    "
  >

    {/* Reflection */}

 

    {/* Verified Badge */}


  </motion.div>

</motion.div>

{/* Bottom Content */}

<div className="relative z-10 mt-6">

  {/* Recognition Tags */}

  <div className="flex flex-wrap gap-3">

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
      Startup India
    </span>

    <span
      className="
        rounded-full
        bg-emerald-100
        px-4
        py-2
        text-sm
        font-semibold
        text-emerald-700
      "
    >
      Government of India
    </span>

    <span
      className="
        rounded-full
        bg-cyan-100
        px-4
        py-2
        text-sm
        font-semibold
        text-cyan-700
      "
    >
      DPIIT Certified
    </span>

  </div>

  {/* Buttons */}

  {/* Bottom Stats */}

  <div
    className="
      mt-8
      grid
      grid-cols-3
      gap-4
      border-t
      border-sky-100
      pt-6
      text-center
    "
  >

    <div>

      <h4 className="text-2xl font-black text-sky-600">
        DPIIT
      </h4>

      <p className="mt-1 text-sm text-slate-600">
        Recognized
      </p>

    </div>

    <div>

      <h4 className="text-2xl font-black text-sky-600">
        Pvt Ltd
      </h4>

      <p className="mt-1 text-sm text-slate-600">
        Registered
      </p>

    </div>

    <div>

      <h4 className="text-2xl font-black text-sky-600">
        2025
      </h4>

      <p className="mt-1 text-sm text-slate-600">
        Startup India
      </p>

    </div>

  </div>

</div>

          {/* Part 2 starts here */}

          <div className="relative flex items-center justify-center min-h-[600px]">

          </div>

        </div>

      </div>

    </section>
  );
}