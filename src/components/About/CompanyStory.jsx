import { motion } from "framer-motion";
import {
  Sparkles,
  Lightbulb,
  Globe2,
  Cpu,
  ShieldCheck,
} from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 xl:py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-180px] top-20 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full bg-sky-300/20 blur-[130px]" />

        <div className="absolute right-[-180px] bottom-0 h-[360px] w-[360px] sm:h-[500px] sm:w-[500px] rounded-full bg-cyan-300/20 blur-[150px]" />

      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm sm:px-5 sm:text-sm">

            <Sparkles size={16} />

            Our Journey

          </span>

          <h2 className="mt-6 text-3xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">

            Our Story

          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

            Building intelligent technology solutions that help
            businesses innovate, grow, and lead in a digital-first world.

          </p>

        </motion.div>

        {/* Main Layout */}

        <div className="mt-16 grid items-center gap-14 lg:mt-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 relative flex justify-center lg:order-1"
          >

            {/* Animated Glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                h-[260px]
                w-[260px]
                rounded-full
                bg-sky-300/20
                blur-[110px]
                sm:h-[340px]
                sm:w-[340px]
                lg:h-[430px]
                lg:w-[430px]
              "
            />

            {/* Main Circle */}

            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                flex
                aspect-square
                w-[260px]
                items-center
                justify-center
                rounded-full
                border
                border-sky-200
                bg-white/70
                backdrop-blur-xl
                shadow-[0_25px_70px_rgba(14,165,233,.15)]
                sm:w-[330px]
                md:w-[380px]
                lg:w-[420px]
              "
            >

              <div className="px-6 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 sm:h-20 sm:w-20 lg:h-24 lg:w-24">

                  <Globe2 className="h-7 w-7 text-white sm:h-9 sm:w-9 lg:h-11 lg:w-11" />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900 sm:text-2xl lg:text-3xl">

                  MYLOTIC GROUP

                </h3>

                <p className="mt-4 text-sm text-slate-500 sm:text-base">

                  Technology.
                  <br />
                  Innovation.
                  <br />
                  Growth.

                </p>

              </div>

            </motion.div>

            {/* Floating Card 1 */}

            <motion.div
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                left-0
                top-6
                rounded-2xl
                border
                border-sky-200
                bg-white
                px-3
                py-2
                text-xs
                shadow-xl
                sm:left-[-20px]
                sm:px-4
                sm:py-3
                sm:text-sm
                lg:left-[-40px]
              "
            >

              <div className="flex items-center gap-3">

                <Lightbulb className="h-5 w-5 text-yellow-500" />

                <div>

                  <h4 className="font-semibold">

                    Innovation

                  </h4>

                  <p className="text-slate-500">

                    Future Ready

                  </p>

                </div>

              </div>

            </motion.div>
                        {/* Floating Card 2 */}

            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-8
                right-0
                rounded-2xl
                border
                border-sky-200
                bg-white
                px-3
                py-2
                text-xs
                shadow-xl
                sm:right-[-20px]
                sm:px-4
                sm:py-3
                sm:text-sm
                lg:right-[-40px]
              "
            >

              <div className="flex items-center gap-3">

                <Cpu className="h-5 w-5 text-sky-500" />

                <div>

                  <h4 className="font-semibold">

                    Smart Technology

                  </h4>

                  <p className="text-slate-500">

                    AI Powered

                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold text-sky-700 sm:text-sm">

              <ShieldCheck size={16} />

              Building Technology That Matters

            </span>

            <h3 className="mt-6 text-3xl font-light leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">

              From Vision to

              <span className="mt-2 block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text font-semibold text-transparent">

                Digital Excellence

              </span>

            </h3>

            <p className="mt-8 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

              Mylotic Group was founded with a clear purpose—to help
              businesses embrace technology with confidence. We believe
              every organization deserves innovative, scalable, and secure
              digital solutions that accelerate growth while creating
              lasting business value.

            </p>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

              From startups to global enterprises, we collaborate closely
              with our clients to transform ideas into intelligent digital
              products. Through innovation, transparency, and technical
              excellence, we build long-term partnerships that empower
              organizations to thrive in an ever-evolving digital world.

            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {[
                "Innovation First",
                "Customer-Centric Approach",
                "Scalable Digital Solutions",
                "Long-Term Partnership",
              ].map((item, index) => (

                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-sky-100
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 font-semibold text-white">

                    ✓

                  </div>

                  <span className="font-medium text-slate-700">

                    {item}

                  </span>

                </motion.div>

              ))}

            </div>

          </motion.div>
                  </div>

      </div>

    </section>
  );
}