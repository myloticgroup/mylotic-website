import { motion } from "framer-motion";

import {
  BookOpen,
  GraduationCap,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Database,
  Code2,
  Award,
  Cpu,
} from "lucide-react";

/* ==========================================================
   RESPONSIVE BREAKPOINT CONFIG
========================================================== */

const ORBIT = {
  mobile: {
    outer: 280,
    middle: 200,
    inner: 130,
    container: 320,
    cardLarge: 72,
    cardSmall: 64,
  },

  tablet: {
    outer: 420,
    middle: 310,
    inner: 200,
    container: 470,
    cardLarge: 86,
    cardSmall: 78,
  },

  desktop: {
    outer: 520,
    middle: 380,
    inner: 250,
    container: 570,
    cardLarge: 112,
    cardSmall: 96,
  },
};

/* ==========================================================
   TECHNOLOGY CARDS
========================================================== */

const techCards = [
  {
    id: 1,
    title: "React",
    icon: "⚛️",
    x: -185,
    y: -150,
    delay: 0,
    size: "lg",
  },

  {
    id: 2,
    title: "Artificial Intelligence",
    icon: "🧠",
    x: 175,
    y: -120,
    delay: 0.4,
    size: "md",
  },

  {
    id: 3,
    title: "Cloud",
    icon: "☁️",
    x: 210,
    y: 35,
    delay: 0.8,
    size: "lg",
  },

  {
    id: 4,
    title: "Node.js",
    icon: "🟢",
    x: 150,
    y: 185,
    delay: 1.2,
    size: "md",
  },

  {
    id: 5,
    title: "Python",
    icon: "🐍",
    x: -170,
    y: 175,
    delay: 1.6,
    size: "lg",
  },

  {
    id: 6,
    title: "Database",
    icon: "🛢️",
    x: -220,
    y: 25,
    delay: 2,
    size: "md",
  },

  {
    id: 7,
    title: "HR",
    icon: "👥",
    x: -30,
    y: -220,
    delay: 2.2,
    size: "md",
  },

  {
    id: 8,
    title: "Sales & Development",
    icon: "🎯",
    x: 40,
    y: 225,
    delay: 2.6,
    size: "lg",
  },
];

/* ==========================================================
   RESPONSIVE POSITION HELPERS
========================================================== */

const mobileScale = 0.58;
const tabletScale = 0.78;
const desktopScale = 1;

const getResponsivePosition = (value) => ({
  base: value * mobileScale,
  md: value * tabletScale,
  lg: value * desktopScale,
});

const CARD_CLASSES = {
  lg: `
    w-[72px] h-[72px]
    sm:w-[82px] sm:h-[82px]
    md:w-[92px] md:h-[92px]
    lg:w-[112px] lg:h-[112px]
  `,

  md: `
    w-[64px] h-[64px]
    sm:w-[72px] sm:h-[72px]
    md:w-[82px] md:h-[82px]
    lg:w-[96px] lg:h-[96px]
  `,
};

const ICON_CLASSES = `
  text-2xl
  sm:text-3xl
  md:text-4xl
`;

const TITLE_CLASSES = `
  mt-2
  text-[9px]
  sm:text-[10px]
  md:text-xs
  font-bold
  text-slate-700
  text-center
`;

/* ==========================================================
   ORBIT RING
========================================================== */

function OrbitRing({
  size,
  duration,
  reverse = false,
  opacity = 0.18,
}) {
  const radius = size / 2 - 4;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${size} ${size}`}
    >
      {/* Base Ring */}

      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={`rgba(56,189,248,${opacity})`}
        strokeWidth="1.6"
      />

      {/* Animated Ring */}

      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#orbitGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${circumference * 0.14} ${circumference}`}
        animate={{
          strokeDashoffset: reverse
            ? [0, circumference]
            : [circumference, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          filter:
            "drop-shadow(0 0 10px rgba(56,189,248,.8)) drop-shadow(0 0 30px rgba(56,189,248,.35))",
        }}
      />

      <defs>
        <linearGradient
          id="orbitGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="#ffffff00"
          />

          <stop
            offset="20%"
            stopColor="#dbeafe"
          />

          <stop
            offset="55%"
            stopColor="#38bdf8"
          />

          <stop
            offset="100%"
            stopColor="#ffffff00"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ==========================================================
   FLOATING PARTICLE
========================================================== */

function Particle({
  top,
  left,
  size,
  delay,
}) {
  return (
    <motion.span
      className="absolute rounded-full bg-white"

      style={{
        top,
        left,
        width: size,
        height: size,
        boxShadow:
          "0 0 18px rgba(56,189,248,.7)",
      }}

      animate={{
        scale: [1, 2, 1],
        opacity: [0.25, 1, 0.25],
      }}

      transition={{
        duration: 2.8,
        repeat: Infinity,
        delay,
      }}
    />
  );
}

/* ==========================================================
   NETWORK LINE
========================================================== */

function NetworkLine({
  x1,
  y1,
  x2,
  y2,
  duration = 5,
  delay = 0,
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  const angle =
    (Math.atan2(dy, dx) * 180) / Math.PI;

  const length = Math.sqrt(
    dx * dx + dy * dy
  );

  return (
    <div
      className="
        absolute
        z-10
        hidden
        lg:block
      "
      style={{
        left: `calc(50% + ${x1}px)`,
        top: `calc(50% + ${y1}px)`,
        width: length,
        height: 2,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "left center",
      }}
    >
      {/* Base Line */}

      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-sky-200/30
        "
      />

      {/* Moving Energy */}

      <motion.div
        className="
          absolute
          h-full
          w-24
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-sky-400
          to-transparent
          blur-[1px]
        "
        animate={{
          x: [-100, length + 100],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />

      {/* Glow */}

      <motion.div
        className="
          absolute
          h-full
          w-10
          rounded-full
          bg-cyan-300
          blur-md
        "
        animate={{
          x: [-60, length + 60],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />
    </div>
  );
}
/* ==========================================================
   LEARNING ORBIT
========================================================== */

export default function LearningOrbit() {
  return (
    <motion.section
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        py-16
        sm:py-20
        lg:py-28
      "
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* =====================================================
          MAIN ORBIT CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          items-center
          justify-center

          h-[320px]
          w-[320px]

          sm:h-[420px]
          sm:w-[420px]

          md:h-[520px]
          md:w-[520px]

          lg:h-[620px]
          lg:w-[620px]

          xl:h-[700px]
          xl:w-[700px]
        "
      >

        {/* =====================================================
            BACKGROUND GLOW
        ===================================================== */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            rounded-full
            bg-sky-400/20

            blur-[80px]

            h-[260px]
            w-[260px]

            sm:h-[360px]
            sm:w-[360px]

            md:h-[480px]
            md:w-[480px]

            lg:h-[620px]
            lg:w-[620px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            rounded-full
            bg-cyan-300/20

            blur-[90px]

            h-[180px]
            w-[180px]

            sm:h-[260px]
            sm:w-[260px]

            md:h-[340px]
            md:w-[340px]

            lg:h-[420px]
            lg:w-[420px]
          "
        />

        {/* =====================================================
            RADIAL GLOW
        ===================================================== */}

        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          style={{
            background:
              "radial-gradient(circle,#7dd3fc55 0%,transparent 72%)",
          }}
        />

        {/* =====================================================
            GLASS RINGS
        ===================================================== */}

        <div
          className="
            absolute
            rounded-full
            border
            border-white/40
            bg-white/10
            backdrop-blur-sm

            h-[280px]
            w-[280px]

            sm:h-[380px]
            sm:w-[380px]

            md:h-[500px]
            md:w-[500px]

            lg:h-[620px]
            lg:w-[620px]
          "
        />

        <div
          className="
            absolute
            rounded-full
            border
            border-white/40

            h-[200px]
            w-[200px]

            sm:h-[300px]
            sm:w-[300px]

            md:h-[380px]
            md:w-[380px]

            lg:h-[470px]
            lg:w-[470px]
          "
        />

        <div
          className="
            absolute
            rounded-full
            border
            border-sky-200/40

            h-[130px]
            w-[130px]

            sm:h-[200px]
            sm:w-[200px]

            md:h-[250px]
            md:w-[250px]

            lg:h-[310px]
            lg:w-[310px]
          "
        />

        {/* =====================================================
            ORBIT RINGS
        ===================================================== */}

        <div className="absolute inset-0 flex items-center justify-center">

          {/* OUTER */}

          <div className="absolute h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[500px] md:w-[500px] lg:h-[620px] lg:w-[620px]">
            <OrbitRing
              size={280}
              duration={18}
            />
          </div>

          {/* MIDDLE */}

          <div className="absolute hidden sm:block h-[380px] w-[380px] md:h-[500px] md:w-[500px] lg:h-[470px] lg:w-[470px]">
            <OrbitRing
              size={380}
              duration={12}
              reverse
            />
          </div>

          {/* INNER */}

          <div className="absolute hidden md:block h-[250px] w-[250px] lg:h-[310px] lg:w-[310px]">
            <OrbitRing
              size={250}
              duration={8}
            />
          </div>

        </div>

        {/* =====================================================
            CENTER SPHERE
            (Part 4 starts from here)
        ===================================================== */}

        {/* =====================================================
    CENTER SPHERE
===================================================== */}

<motion.div
  className="absolute z-30 flex items-center justify-center"
  animate={{
    scale: [1, 1.04, 1],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {/* OUTER ROTATING RING */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      rounded-full
      border
      border-sky-300/40

      h-[120px]
      w-[120px]

      sm:h-[150px]
      sm:w-[150px]

      md:h-[200px]
      md:w-[200px]

      lg:h-[240px]
      lg:w-[240px]
    "
  />

  {/* DASHED RING */}

  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      rounded-full
      border
      border-dashed
      border-cyan-300/40

      h-[100px]
      w-[100px]

      sm:h-[130px]
      sm:w-[130px]

      md:h-[175px]
      md:w-[175px]

      lg:h-[210px]
      lg:w-[210px]
    "
  />

  {/* PULSE */}

  <motion.div
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.4, 0, 0.4],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="
      absolute
      rounded-full
      border
      border-sky-300/40

      h-[90px]
      w-[90px]

      sm:h-[115px]
      sm:w-[115px]

      md:h-[150px]
      md:w-[150px]

      lg:h-[180px]
      lg:w-[180px]
    "
  />

  {/* GLASS SPHERE */}

  <div
    className="
      relative
      flex
      flex-col
      items-center
      justify-center
      overflow-hidden

      rounded-full

      border
      border-white/80

      bg-white/70
      backdrop-blur-3xl

      shadow-[0_25px_70px_rgba(14,165,233,.22)]

      h-[90px]
      w-[90px]

      sm:h-[120px]
      sm:w-[120px]

      md:h-[150px]
      md:w-[150px]

      lg:h-[180px]
      lg:w-[180px]
    "
  >

    {/* BACKGROUND */}

    <div
      className="
        absolute
        inset-0
        rounded-full
        bg-gradient-to-br
        from-sky-200/30
        via-white/40
        to-cyan-200/30
      "
    />

    {/* SHINE */}

    <motion.div
      animate={{
        x: [-150, 180],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        top-0
        h-full

        w-8
        sm:w-10
        md:w-12

        -rotate-12

        bg-white/40
        blur-xl
      "
    />

    {/* TOP HIGHLIGHT */}

    <div
      className="
        absolute

        top-2
        sm:top-3
        md:top-4

        h-4
        w-10

        sm:h-6
        sm:w-14

        md:h-8
        md:w-20

        rounded-full
        bg-white/70
        blur-lg
      "
    />

    {/* FLOATING ICON */}

    <motion.div
      animate={{
        y: [-3, 3, -3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    >
      <BookOpen
        className="
          text-sky-500

          h-7
          w-7

          sm:h-9
          sm:w-9

          md:h-11
          md:w-11

          lg:h-14
          lg:w-14
        "
      />
    </motion.div>

    {/* TITLE */}

    <h2
      className="
        mt-1
        sm:mt-2
        md:mt-3

        font-black
        text-slate-800

        text-[10px]
        sm:text-sm
        md:text-lg
        lg:text-xl
      "
    >
      Learn
    </h2>

    {/* SUBTITLE */}

    <p
      className="
        text-sky-600
        font-medium

        text-[8px]
        sm:text-[10px]
        md:text-xs
        lg:text-sm
      "
    >
      Build • Grow
    </p>

  </div>

</motion.div>

{/* =====================================================
    NETWORK LINES
    (Part 5 Starts Here)
===================================================== */}
{/* =====================================================
    NETWORK LINES
===================================================== */}

{/* Desktop */}
<div className="hidden lg:block">

  <NetworkLine
    x1={0}
    y1={0}
    x2={-185}
    y2={-150}
    duration={4}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={175}
    y2={-120}
    duration={4.5}
    delay={0.2}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={210}
    y2={35}
    duration={5}
    delay={0.5}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={150}
    y2={185}
    duration={4.2}
    delay={0.7}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={-170}
    y2={175}
    duration={4.8}
    delay={1}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={-220}
    y2={25}
    duration={4.6}
    delay={1.2}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={-30}
    y2={-220}
    duration={5.2}
    delay={1.4}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={40}
    y2={225}
    duration={5}
    delay={1.6}
  />

</div>

{/* Tablet */}

<div className="hidden md:block lg:hidden">

  <NetworkLine
    x1={0}
    y1={0}
    x2={-145}
    y2={-115}
    duration={4}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={135}
    y2={-95}
    duration={4.5}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={165}
    y2={30}
    duration={4.8}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={120}
    y2={140}
    duration={4.4}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={-125}
    y2={135}
    duration={4.6}
  />

  <NetworkLine
    x1={0}
    y1={0}
    x2={-165}
    y2={20}
    duration={4.2}
  />

</div>

{/* Mobile */}

<div className="absolute inset-0 md:hidden">

  {[0,45,90,135,180,225,270,315].map((angle,index)=>{

    const radius = 88;

    const x = Math.cos((angle*Math.PI)/180)*radius;

    const y = Math.sin((angle*Math.PI)/180)*radius;

    return(

      <motion.div
        key={index}
        className="absolute left-1/2 top-1/2 h-[2px] origin-left rounded-full bg-sky-300/30"
        style={{
          width: radius,
          transform:`translateY(-1px) rotate(${angle}deg)`,
        }}
      >
        <motion.div
          className="h-full w-10 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
          animate={{
            x:[-40,radius]
          }}
          transition={{
            duration:3.5,
            repeat:Infinity,
            delay:index*0.25,
            ease:"linear"
          }}
        />
      </motion.div>

    );

  })}

</div>

{/* =====================================================
    FLOATING TECHNOLOGY CARDS
    (Part 6 Starts Here)
===================================================== */}

{/* =====================================================
    FLOATING TECHNOLOGY CARDS
===================================================== */}

{techCards.map((card) => {

  const pos = getResponsivePosition(card.x);
  const posY = getResponsivePosition(card.y);

  return (

    <motion.div
      key={card.id}
      className="absolute z-20"

      style={{
        x: pos.base,
        y: posY.base,
      }}

      animate={{
        x: [
          pos.base,
          pos.base + 6,
          pos.base,
        ],

        y: [
          posY.base,
          posY.base - 10,
          posY.base,
        ],

        rotate: [-3, 3, -3],

        scale: [1, 1.05, 1],
      }}

      transition={{
        duration: 5,
        repeat: Infinity,
        delay: card.delay,
        ease: "easeInOut",
      }}

      whileHover={{
        scale: 1.12,
        rotate: 0,
        transition: {
          duration: .3
        }
      }}

    >

      <div

        className={`
          group
          relative
          overflow-hidden

          rounded-3xl

          border
          border-white/70

          bg-white/70

          backdrop-blur-3xl

          shadow-[0_18px_45px_rgba(14,165,233,.18)]

          transition-all
          duration-500

          ${CARD_CLASSES[card.size]}
        `}
      >

        {/* Background */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br

            from-sky-100/40
            via-white/30
            to-cyan-100/40
          "
        />

        {/* Shine */}

        <motion.div

          animate={{
            x: [-150, 180],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            delay: card.delay,
            ease: "linear",
          }}

          className="
            absolute
            top-0
            h-full
            w-10

            -rotate-12

            bg-white/50

            blur-xl
          "
        />

        {/* Hover Glow */}

        <div
          className="
            absolute
            inset-0

            rounded-3xl

            bg-sky-300/20

            opacity-0

            group-hover:opacity-100

            transition
            duration-500
          "
        />

        {/* Floating Icon */}

        <motion.div

          animate={{
            y: [-2, 2, -2],
          }}

          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}

          className="
            relative

            mt-3
            sm:mt-4
            lg:mt-5

            flex
            justify-center

            text-2xl
            sm:text-3xl
            lg:text-4xl
          "
        >
          {card.icon}
        </motion.div>

        {/* Title */}

        <p
          className="
            relative

            mt-2

            px-1

            text-center

            font-bold

            text-slate-700

            text-[9px]

            sm:text-[10px]

            md:text-xs
          "
        >
          {card.title}
        </p>

        {/* Status Dot */}

        <motion.div

          animate={{
            scale: [1, 2, 1],
            opacity: [.6, 0, .6],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
            delay: card.delay,
          }}

          className="
            absolute

            right-2
            top-2

            h-2
            w-2

            rounded-full

            bg-sky-400
          "
        />

      </div>

    </motion.div>

  );

})}

{/* =====================================================
    FLOATING ORBIT PARTICLES
    (Part 7 Starts Here)
===================================================== */}

{/* ==========================================================
    FLOATING LIGHT PARTICLES
========================================================== */}

{Array.from({ length: 24 }).map((_, i) => (
  <motion.div
    key={i}
    className="absolute rounded-full bg-white"

    style={{
      width: 3 + Math.random() * 5,
      height: 3 + Math.random() * 5,

      left: `${8 + Math.random() * 84}%`,
      top: `${8 + Math.random() * 84}%`,

      boxShadow: "0 0 18px rgba(56,189,248,.8)",
    }}

    animate={{
      y: [0, -25, 0],
      x: [0, Math.random() * 12 - 6, 0],
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.8, 1],
    }}

    transition={{
      duration: 2.5 + Math.random() * 3,
      repeat: Infinity,
      delay: Math.random() * 3,
      ease: "easeInOut",
    }}
  />
))}

{/* ==========================================================
    CENTER ENERGY RING
========================================================== */}

<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 16,
    repeat: Infinity,
    ease: "linear",
  }}

  className="
    absolute
    z-0

    rounded-full

    h-[170px]
    w-[170px]

    sm:h-[240px]
    sm:w-[240px]

    md:h-[300px]
    md:w-[300px]

    lg:h-[360px]
    lg:w-[360px]
  "
>

  <div
    className="
      absolute

      left-1/2
      top-0

      h-3
      w-3

      sm:h-4
      sm:w-4

      md:h-5
      md:w-5

      -translate-x-1/2

      rounded-full

      bg-sky-400

      shadow-[0_0_30px_#38bdf8]
    "
  />

</motion.div>

{/* ==========================================================
    BACKGROUND GRID
========================================================== */}

<div
  className="
    absolute
    inset-0
    -z-10
    opacity-25
  "

  style={{
    backgroundImage: `
      linear-gradient(rgba(56,189,248,.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56,189,248,.08) 1px, transparent 1px)
    `,

    backgroundSize: "40px 40px",

    maskImage:
      "radial-gradient(circle,white 32%,transparent 88%)",
  }}
/>

{/* ==========================================================
    AMBIENT GLOW
========================================================== */}

<motion.div
  className="
    absolute
    inset-0
    -z-20
  "

  animate={{
    opacity: [0.18, 0.35, 0.18],
  }}

  transition={{
    duration: 7,
    repeat: Infinity,
  }}

  style={{
    background:
      "radial-gradient(circle at center, rgba(56,189,248,.12), transparent 72%)",
  }}
/>

{/* ==========================================================
    CORNER PARTICLES
========================================================== */}

<Particle
  top="8%"
  left="18%"
  size={5}
  delay={0}
/>

<Particle
  top="18%"
  left="82%"
  size={6}
  delay={1}
/>

<Particle
  top="82%"
  left="18%"
  size={5}
  delay={2}
/>

<Particle
  top="80%"
  left="82%"
  size={6}
  delay={1.5}
/>

<Particle
  top="50%"
  left="4%"
  size={5}
  delay={0.8}
/>

<Particle
  top="50%"
  left="96%"
  size={5}
  delay={2.2}
/>

<Particle
  top="4%"
  left="50%"
  size={4}
  delay={0.6}
/>

<Particle
  top="96%"
  left="50%"
  size={5}
  delay={1.8}
/>

{/* ==========================================================
    PART 8 STARTS HERE
========================================================== */}

{/* ==========================================================
    RESPONSIVE SAFETY OVERLAY
========================================================== */}

<div
  className="
    pointer-events-none
    absolute
    inset-0
    rounded-full
    border
    border-white/5
  "
/>

{/* ==========================================================
    RESPONSIVE EDGE FADE
========================================================== */}

<div
  className="
    pointer-events-none
    absolute
    inset-0
    rounded-full
  "
  style={{
    background:
      "radial-gradient(circle, transparent 58%, rgba(2,6,23,.08) 100%)",
  }}
/>

{/* ==========================================================
    MOBILE SAFE SPACING
========================================================== */}

<div
  className="
    absolute
    inset-0
    rounded-full
    sm:hidden
  "
  style={{
    transform: "scale(.92)",
  }}
/>

      </div>
    </motion.section>
  );
}