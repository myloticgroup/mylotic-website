import { motion } from "framer-motion";
import { technologies } from "./HeroData";

export default function Tech() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-sky-50
        via-white
        to-sky-50

        py-16
        sm:py-20
        lg:py-24
        xl:py-28
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/4
            top-10

            h-56
            w-56

            sm:h-72
            sm:w-72

            lg:h-80
            lg:w-80

            rounded-full
            bg-sky-300/20
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-1/4
            bottom-10

            h-56
            w-56

            sm:h-72
            sm:w-72

            lg:h-80
            lg:w-80

            rounded-full
            bg-cyan-300/20
            blur-[150px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          max-w-7xl

          px-5
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center px-2"
        >
          <h2 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
            Our Technology Stack
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We leverage cutting-edge technologies to build scalable, secure,
            and high-performance digital solutions.
          </p>
        </motion.div>

        {/* Slider */}

        <div
          className="
            relative
            mt-12
            sm:mt-16
            lg:mt-20
            overflow-hidden
          "
        >
          {/* Left Fade */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full

              w-12
              sm:w-20
              lg:w-32

              bg-gradient-to-r
              from-sky-50
              via-sky-50/90
              to-transparent
            "
          />

          {/* Right Fade */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full

              w-12
              sm:w-20
              lg:w-32

              bg-gradient-to-l
              from-sky-50
              via-sky-50/90
              to-transparent
            "
          />

          <motion.div
            className="
              flex
              w-max

              gap-4
              sm:gap-6
              lg:gap-8
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="
                  group
                  relative
                  flex
                  shrink-0
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden

                  h-36
                  w-36

                  sm:h-40
                  sm:w-40

                  md:h-44
                  md:w-44

                  lg:h-44
                  lg:w-48

                  rounded-[28px]

                  border
                  border-slate-300

                  bg-white/70
                  backdrop-blur-xl

                  shadow-lg

                  transition-all
                  duration-500

                  hover:border-sky-400
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.20)]
                "
              >
                {/* Hover Glow */}

                <div
                  className="
                    absolute
                    -top-16

                    h-32
                    w-32

                    rounded-full

                    bg-sky-300/30

                    blur-3xl

                    opacity-0

                    transition-all
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* Logo */}

                <img
                  src={tech.logo}
                  alt={tech.name}
                  draggable={false}
                  className="
                    relative
                    z-10

                    h-10
                    sm:h-12
                    lg:h-14

                    w-auto
                    object-contain

                    transition-all
                    duration-300

                    group-hover:scale-110
                  "
                />

                {/* Name */}

                <h3 className="relative z-10 mt-6 text-sm font-semibold tracking-wide text-slate-800 text-center px-2">
                  {tech.name}
                </h3>

                {/* Bottom Accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-1
                    w-full

                    scale-x-0

                    bg-gradient-to-r
                    from-sky-500
                    to-cyan-400

                    transition-transform
                    duration-300

                    group-hover:scale-x-100
                  "
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}