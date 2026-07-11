import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import ContactCard from "./ContactCard";
import contactData from "./contactData";


export default function QuickContact() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-cyan-50" />

        {/* Left Blob */}

        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-20, 30, -20],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-48
            top-0
            h-[460px]
            w-[460px]
            rounded-full
            bg-sky-300/20
            blur-[130px]
          "
        />

        {/* Right Blob */}

        <motion.div
          animate={{
            x: [40, -40, 40],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            bottom-0
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-300/20
            blur-[150px]
          "
        />

        {/* Floating Particles */}

        {Array.from({ length: 20 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-sky-300"
            style={{
              width: 3 + Math.random() * 4,
              height: 3 + Math.random() * 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -18, 0],
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

      {/* ================= Content ================= */}

      <div className="mx-auto max-w-7xl px-6">

        {/* Badge */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
          }}
          className="flex justify-center"
        >
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

            <PhoneCall
              className="text-sky-500"
              size={18}
            />

            <span className="font-semibold text-sky-600">

              Contact Options

            </span>

          </div>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: .15,
            duration: .7,
          }}
          className="
            mx-auto
            mt-7
            max-w-4xl
            text-center
            text-4xl
            font-black
            text-slate-900

            md:text-5xl

            lg:text-6xl
          "
        >

          Choose Your

          <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

            Preferred Way To Connect

          </span>

        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: .3,
            duration: .7,
          }}
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-slate-600
          "
        >
          Reach out through the channel that works best for you.
          Whether it's a quick call, an email, a visit to our office,
          or a live conversation, we're always happy to help.
        </motion.p>

        {/* Cards */}

     <div
  className="
    mt-20
    grid
    gap-8

    sm:grid-cols-2

    xl:grid-cols-4
  "
>
  {contactData.map((item, index) => (
    <ContactCard
      key={item.title}
      {...item}
      delay={index * 0.12}
    />
  ))}
</div>

      </div>

    </section>
  );
}