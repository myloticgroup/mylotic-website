import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "SJ",
    review:
      "Mylotic Group transformed our business with a stunning website and exceptional support throughout the project.",
  },
  {
    name: "David Miller",
    avatar: "DM",
    review:
      "Their team delivered beyond expectations. The application is fast, scalable, and beautifully designed.",
  },
  {
    name: "Emily Carter",
    avatar: "EC",
    review:
      "Professional communication, timely delivery, and excellent attention to every detail. Highly recommended.",
  },
  {
    name: "Michael Brown",
    avatar: "MB",
    review:
      "Working with Mylotic Group was effortless. They truly understand business requirements.",
  },
  {
    name: "Sophia Wilson",
    avatar: "SW",
    review:
      "Their UI/UX design and technical expertise helped us improve customer engagement significantly.",
  },
  {
    name: "James Anderson",
    avatar: "JA",
    review:
      "From planning to deployment, everything was handled professionally with outstanding technical skills.",
  },
  {
    name: "Aarav Sharma",
    avatar: "AS",
    review:
      "Mylotic Group transformed our business with a modern website and exceptional support throughout the entire project. Their professionalism exceeded our expectations.",
  },
  {
    name: "Priya Verma",
    avatar: "PV",
    review:
      "The team at Mylotic Group delivered beyond expectations. Our application is now faster, more secure, and provides an outstanding user experience.",
  },
  {
    name: "Rohan Mehta",
    avatar: "RM",
    review:
      "Professional communication, timely delivery, and excellent attention to detail. Mylotic Group is a reliable technology partner that truly understands client needs.",
  },
];

export default function Client() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#05070D]
        py-16
        sm:py-20
        lg:py-24
        xl:py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-120px]
            top-0

            h-[260px]
            w-[260px]

            sm:h-[340px]
            sm:w-[340px]

            lg:h-[450px]
            lg:w-[450px]

            rounded-full
            bg-sky-500/15
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            bottom-0

            h-[280px]
            w-[280px]

            sm:h-[400px]
            sm:w-[400px]

            lg:h-[500px]
            lg:w-[500px]

            rounded-full
            bg-blue-600/15
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[220px]
            w-[220px]

            sm:h-[300px]
            sm:w-[300px]

            lg:h-[350px]
            lg:w-[350px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full
            bg-cyan-500/10
            blur-[180px]
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-2"
        >
          <h2 className="mt-6 text-4xl font-light text-white sm:text-5xl lg:text-7xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Trusted by startups, enterprises, and growing businesses for
            delivering innovative digital solutions with measurable results.
          </p>
        </motion.div>

        {/* Marquee */}

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
              sm:w-24
              lg:w-36
              bg-gradient-to-r
              from-[#05070D]
              via-[#05070D]
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
              sm:w-24
              lg:w-36
              bg-gradient-to-l
              from-[#05070D]
              via-[#05070D]
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
              duration: 55,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
  key={index}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  transition={{ duration: 0.3 }}
  className="
    group
    relative

    w-[280px]
    sm:w-[320px]
    md:w-[350px]
    lg:w-[380px]
    xl:w-[390px]

    shrink-0
    overflow-hidden

    rounded-[30px]

    border
    border-sky-500/20

    bg-white/[0.04]
    backdrop-blur-xl

    p-6
    sm:p-7
    lg:p-8

    shadow-[0_0_30px_rgba(14,165,233,0.08)]

    transition-all
    duration-500

    hover:border-sky-400
    hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]
  "
>
  {/* Hover Glow */}

  <div
    className="
      absolute
      inset-0
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100

      bg-gradient-to-br
      from-sky-500/10
      via-transparent
      to-cyan-500/10
    "
  />

  {/* Stars */}

  <div className="relative z-10 flex items-center justify-end">
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className="fill-sky-400 text-sky-400"
        />
      ))}
    </div>
  </div>

  {/* Review */}

  <p className="relative z-10 mt-6 sm:mt-8 text-base leading-8 text-slate-300">
    "{item.review}"
  </p>

  {/* Divider */}

  <div className="relative z-10 my-6 sm:my-8 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

  {/* Client */}

  <div className="relative z-10 flex items-center gap-4">
    <div
      className="
        flex
        h-14
        w-14
        sm:h-16
        sm:w-16
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-sky-500
        to-cyan-400
        text-lg
        font-bold
        text-white
        shrink-0
      "
    >
      {item.avatar}
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="truncate text-lg font-semibold text-white">
        {item.name}
      </h3>

      {item.role && (
        <p className="truncate text-sm text-slate-400">
          {item.role}
        </p>
      )}

      {item.company && (
        <span className="block truncate text-sm font-medium text-sky-400">
          {item.company}
        </span>
      )}
    </div>
  </div>

  {/* Bottom Border */}

  <div
    className="
      absolute
      bottom-0
      left-0
      h-[3px]
      w-full
      scale-x-0
      bg-gradient-to-r
      from-sky-500
      via-cyan-400
      to-blue-500
      transition-transform
      duration-500
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