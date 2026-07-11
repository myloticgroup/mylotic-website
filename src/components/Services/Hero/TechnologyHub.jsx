import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Code2,
  Smartphone,
  Database,
  Globe,
  BriefcaseBusiness,
} from "lucide-react";

const orbitItems = [
  {
    icon: Code2,
    label: "Web",
    radius: {
      mobile: 110,
      tablet: 145,
      desktop: 210,
    },
    angle: 0,
  },
  {
    icon: BrainCircuit,
    label: "AI",
    radius: {
      mobile: 110,
      tablet: 145,
      desktop: 210,
    },
    angle: 60,
  },
  {
    icon: Cloud,
    label: "Cloud",
    radius: {
      mobile: 110,
      tablet: 145,
      desktop: 210,
    },
    angle: 120,
  },
  {
    icon: Smartphone,
    label: "Mobile",
    radius: {
      mobile: 110,
      tablet: 145,
      desktop: 210,
    },
    angle: 180,
  },
  {
    icon: ShieldCheck,
    label: "Security",
    radius: {
      mobile: 110,
      tablet: 145,
      desktop: 210,
    },
    angle: 240,
  },
  {
    icon: Globe,
    label: "Marketing",
    radius: {
      mobile: 110,
      tablet: 145,
      desktop: 210,
    },
    angle: 300,
  },
  {
    icon: Database,
    label: "Database",
    radius: {
      mobile: 78,
      tablet: 105,
      desktop: 150,
    },
    angle: 45,
  },
  {
    icon: BriefcaseBusiness,
    label: "Consulting",
    radius: {
      mobile: 78,
      tablet: 105,
      desktop: 150,
    },
    angle: 225,
  },
];

export default function TechnologyHub() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        aspect-square
        w-[300px]
        items-center
        justify-center
        sm:w-[380px]
        md:w-[460px]
        lg:w-[520px]
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          h-[230px]
          w-[230px]
          rounded-full
          bg-sky-400/20
          blur-[90px]
          sm:h-[300px]
          sm:w-[300px]
          md:h-[360px]
          md:w-[360px]
          lg:h-[420px]
          lg:w-[420px]
        "
      />

      {/* Outer Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[220px]
          w-[220px]
          rounded-full
          border
          border-sky-200/60
          sm:h-[300px]
          sm:w-[300px]
          md:h-[380px]
          md:w-[380px]
          lg:h-[420px]
          lg:w-[420px]
        "
      />

      {/* Middle Ring */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[160px]
          w-[160px]
          rounded-full
          border
          border-cyan-200/60
          sm:h-[220px]
          sm:w-[220px]
          md:h-[270px]
          md:w-[270px]
          lg:h-[300px]
          lg:w-[300px]
        "
      />

      {/* Inner Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[100px]
          w-[100px]
          rounded-full
          border
          border-sky-300/60
          sm:h-[130px]
          sm:w-[130px]
          md:h-[160px]
          md:w-[160px]
          lg:h-[180px]
          lg:w-[180px]
        "
      />

      {/* Orbit Items */}

            {orbitItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: item.radius.desktop === 210 ? 30 : 18,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute h-full w-full"
          >
            {/* Mobile */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute sm:hidden"
              style={{
                left: "50%",
                top: "50%",
                transform: `
                  rotate(${item.angle}deg)
                  translate(${item.radius.mobile}px)
                  rotate(-${item.angle}deg)
                `,
              }}
            >
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  group
                  flex
                  h-14
                  w-14
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/60
                  bg-white/70
                  shadow-lg
                  backdrop-blur-xl
                "
              >
                <Icon className="h-5 w-5 text-sky-500 transition group-hover:scale-110" />

                <span className="mt-1 text-[9px] font-semibold text-slate-700">
                  {item.label}
                </span>
              </motion.div>
            </motion.div>

            {/* Tablet */}
            <motion.div
              whileHover={{ scale: 1.12 }}
              className="absolute hidden sm:block lg:hidden"
              style={{
                left: "50%",
                top: "50%",
                transform: `
                  rotate(${item.angle}deg)
                  translate(${item.radius.tablet}px)
                  rotate(-${item.angle}deg)
                `,
              }}
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  group
                  flex
                  h-16
                  w-16
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/60
                  bg-white/70
                  shadow-xl
                  backdrop-blur-2xl
                "
              >
                <Icon className="h-6 w-6 text-sky-500 transition group-hover:scale-110" />

                <span className="mt-1 text-[10px] font-semibold text-slate-700">
                  {item.label}
                </span>
              </motion.div>
            </motion.div>

            {/* Desktop */}
            <motion.div
              whileHover={{ scale: 1.12 }}
              className="absolute hidden lg:block"
              style={{
                left: "50%",
                top: "50%",
                transform: `
                  rotate(${item.angle}deg)
                  translate(${item.radius.desktop}px)
                  rotate(-${item.angle}deg)
                `,
              }}
            >
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  group
                  flex
                  h-20
                  w-20
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-white/60
                  bg-white/70
                  shadow-xl
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:shadow-sky-300/50
                "
              >
                <Icon className="h-8 w-8 text-sky-500 transition group-hover:scale-110" />

                <span className="mt-2 text-[11px] font-semibold text-slate-700">
                  {item.label}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center Sphere */}

            <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          flex
          aspect-square
          w-28
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-white/60
          bg-white/60
          shadow-2xl
          backdrop-blur-3xl
          sm:w-36
          md:w-40
          lg:w-44
        "
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-300/20 to-cyan-300/20" />

        <img
          src="/logo.png"
          alt="logo"
          className="relative h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
        />

        <h2 className="relative mt-2 text-sm font-bold text-slate-800 sm:text-base md:text-lg lg:mt-3 lg:text-xl">
          MYLOTIC
        </h2>
      </motion.div>

    </div>
  );
}