import { motion } from "framer-motion";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock3,
  Globe,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: PhoneCall,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@mylotic.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Noida, Uttar Pradesh",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat • 9:00 AM - 6:00 PM",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.mylotic.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat With Us",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .7,
      }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/70
        bg-white/70
        p-8
        backdrop-blur-2xl
        shadow-[0_25px_70px_rgba(14,165,233,.12)]
      "
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [.2, .45, .2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-20
          -bottom-20
          h-60
          w-60
          rounded-full
          bg-cyan-300/20
          blur-[110px]
        "
      />

      <div className="relative z-10">

        <h3 className="text-3xl font-black text-slate-900">

          Contact Information

        </h3>

        <p className="mt-3 leading-7 text-slate-600">

          Reach us through any of the following channels.
          We're always happy to assist you.

        </p>

        <div className="mt-10 space-y-5">

          {contactInfo.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{
                  x: 8,
                }}
                transition={{
                  duration: .25,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-sky-100
                  bg-white/80
                  p-5
                  transition-all
                  duration-300

                  hover:border-sky-300
                  hover:shadow-lg
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
                    shadow-lg
                  "
                >
                  <Icon size={24} />
                </div>

                <div className="flex-1">

                  <h4 className="font-bold text-slate-900">

                    {item.title}

                  </h4>

                  <p className="mt-1 text-sm text-slate-600">

                    {item.value}

                  </p>

                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * .25,
                  }}
                  className="
                    h-3
                    w-3
                    rounded-full
                    bg-emerald-500
                  "
                />

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Card */}

        <div
          className="
            mt-8
            rounded-2xl
            bg-gradient-to-r
            from-sky-500
            to-cyan-500
            p-6
            text-white
          "
        >

          <h4 className="text-lg font-bold">

            Average Response Time

          </h4>

          <p className="mt-2 text-white/90">

            We usually reply within one hour during
            business hours.

          </p>

        </div>

      </div>

    </motion.div>
  );
}