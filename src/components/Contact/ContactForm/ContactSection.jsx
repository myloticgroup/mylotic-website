import { motion } from "framer-motion";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock3,
  Globe,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: PhoneCall,
    title: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@mylotic.com",
    link: "mailto:hello@mylotic.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Noida, Uttar Pradesh",
    link: null,
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat • 9:00 AM - 6:00 PM",
    link: null,
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.mylotic.com",
    link: "https://www.mylotic.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat With Us",
    link: "https://wa.me/919876543210",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden

        rounded-[28px]
        sm:rounded-[32px]

        border
        border-white/70

        bg-white/70

        p-5
        sm:p-6
        lg:p-8

        backdrop-blur-2xl

        shadow-[0_25px_70px_rgba(14,165,233,.12)]
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute

          -left-20
          -bottom-20

          h-40
          w-40

          sm:h-56
          sm:w-56

          lg:h-64
          lg:w-64

          rounded-full
          bg-cyan-300/20
          blur-[100px]
        "
      />

      <div className="relative z-10">
        {/* Heading */}

        <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
          Contact Information
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          Reach us through any of the following channels.
          We're always happy to assist you.
        </p>

        {/* Contact Cards */}

        <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5 lg:mt-10">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            const Card = (
              <motion.div
                whileHover={{
                  x: 8,
                  y: -2,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group

                  flex
                  items-start

                  gap-3
                  sm:gap-4

                  rounded-2xl

                  border
                  border-sky-100

                  bg-white/80

                  p-4
                  sm:p-5

                  transition-all
                  duration-300

                  hover:border-sky-300
                  hover:shadow-xl
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex

                    h-12
                    w-12

                    sm:h-14
                    sm:w-14

                    flex-shrink-0

                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-sky-500
                    to-cyan-500

                    text-white

                    shadow-lg
                  "
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                {/* Content */}

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-slate-900 sm:text-base">
                    {item.title}
                  </h4>

                  <p className="mt-1 break-words text-xs text-slate-600 sm:text-sm">
                    {item.value}
                  </p>
                </div>

                {/* Status / Link */}

                {item.link ? (
                  <ArrowUpRight
                    className="
                      h-5
                      w-5
                      flex-shrink-0
                      text-sky-500
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                ) : (
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                    className="
                      mt-2

                      h-3
                      w-3

                      rounded-full

                      bg-emerald-500

                      flex-shrink-0
                    "
                  />
                )}
              </motion.div>
            );

            return item.link ? (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Card}
              </a>
            ) : (
              <div key={item.title}>{Card}</div>
            );
          })}
        </div>

        {/* Bottom Card */}

        <motion.div
          whileHover={{
            y: -4,
          }}
          className="
            mt-8

            rounded-2xl

            bg-gradient-to-r
            from-sky-500
            to-cyan-500

            p-5
            sm:p-6

            text-white

            shadow-xl
          "
        >
          <h4 className="text-base font-bold sm:text-lg">
            Average Response Time
          </h4>

          <p className="mt-2 text-sm leading-6 text-white/90 sm:text-base">
            We usually reply within one hour during business hours.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}