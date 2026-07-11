import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 xl:pt-40 xl:pb-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-10 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-sky-300/20 blur-[120px]" />

        <div className="absolute right-[-160px] bottom-0 h-[380px] w-[380px] sm:h-[500px] sm:w-[500px] rounded-full bg-cyan-300/20 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/20 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-4 py-2 text-xs font-semibold text-sky-700 shadow-sm sm:px-5 sm:text-sm">
              <Sparkles size={16} />
              About Mylotic Group
            </span>

            <h1 className="mt-6 text-4xl font-light leading-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Empowering Businesses Through

              <span className="mt-2 block bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 bg-clip-text font-semibold text-transparent">
                Innovation & Technology
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Mylotic Group is a technology-driven company helping
              startups, SMEs, and enterprises build scalable digital
              solutions through AI, Cloud, Software Development,
              Staff Augmentation, and Digital Transformation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                to="/services"
                className="rounded-full bg-sky-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-sky-700"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600"
              >
                Contact Us

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative flex items-center justify-center">

              {/* Glow */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  h-[260px]
                  w-[260px]
                  sm:h-[340px]
                  sm:w-[340px]
                  lg:h-[420px]
                  lg:w-[420px]
                  rounded-full
                  bg-sky-300/20
                  blur-[100px]
                "
              />

              {/* Circle */}
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
                  sm:w-[330px]
                  md:w-[380px]
                  lg:w-[430px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-sky-200
                  bg-white/70
                  backdrop-blur-xl
                  shadow-[0_30px_80px_rgba(14,165,233,.15)]
                "
              >
                <div className="px-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-3xl font-bold text-white sm:h-24 sm:w-24 sm:text-4xl lg:h-28 lg:w-28 lg:text-5xl">
                    M
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900 sm:text-2xl lg:text-3xl">
                    MYLOTIC GROUP
                  </h3>

                  <p className="mt-3 text-sm text-slate-500 sm:text-base">
                    Innovating Today.
                    <br />
                    Transforming Tomorrow.
                  </p>
                </div>
              </motion.div>

              {/* Badge 1 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="
                  absolute
                  left-0
                  top-8
                  rounded-xl
                  bg-white
                  px-3
                  py-2
                  text-xs
                  font-medium
                  shadow-xl
                  sm:left-[-20px]
                  sm:px-4
                  sm:py-3
                  sm:text-sm
                  lg:left-[-40px]
                "
              >
                🚀 AI Solutions
              </motion.div>

              {/* Badge 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="
                  absolute
                  bottom-8
                  right-0
                  rounded-xl
                  bg-white
                  px-3
                  py-2
                  text-xs
                  font-medium
                  shadow-xl
                  sm:right-[-20px]
                  sm:px-4
                  sm:py-3
                  sm:text-sm
                  lg:right-[-40px]
                "
              >
                ☁️ Cloud Services
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}