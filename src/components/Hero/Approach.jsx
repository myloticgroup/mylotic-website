import { motion } from "framer-motion";
import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "We understand your business goals, audience, and project requirements to create a clear roadmap.",
    color: "from-sky-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Design",
    icon: PencilRuler,
    description:
      "Our designers create beautiful user experiences and intuitive interfaces focused on your customers.",
    color: "from-indigo-500 to-sky-500",
  },
  {
    number: "03",
    title: "Develop",
    icon: Code2,
    description:
      "Using modern technologies, we build secure, scalable, and high-performance applications.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "04",
    title: "Deployment",
    icon: Rocket,
    description:
      "After rigorous testing, we deploy your solution and provide continuous support and optimization.",
    color: "from-sky-500 to-indigo-500",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-24 lg:py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-[140px]" />

        <div className="absolute right-[-120px] bottom-10 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2 text-sm font-semibold text-sky-700 shadow-sm">

            <Sparkles size={16} />

            Our Process

          </span>

          <h2 className="mt-6 text-4xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">

            Our Approach

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            From strategy to deployment, we follow a structured workflow that
            ensures every project is delivered with quality, performance,
            and long-term scalability.

          </p>

        </motion.div>

        {/* Main Layout */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-[1fr_1.1fr]">

          {/* LEFT SIDE */}

          <motion.div

            initial={{ opacity: 0, x: -60 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ duration: .8 }}

            className="relative flex justify-center"

          ></motion.div>

                      {/* Main Illustration Card */}

            <div className="relative flex items-center justify-center">

              {/* Outer Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-[120px]"
              />

              {/* Floating Image */}
         

              {/* Floating Search */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute left-4 top-12"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-200 bg-white shadow-xl">
                  <Search className="text-sky-600" size={30} />
                </div>
              </motion.div>

              {/* Floating Design */}
              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-24"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-200 bg-white shadow-xl">
                  <PencilRuler className="text-indigo-600" size={30} />
                </div>
              </motion.div>

              {/* Floating Code */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="absolute bottom-20 left-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-200 bg-white shadow-xl">
                  <Code2 className="text-cyan-600" size={30} />
                </div>
              </motion.div>

              {/* Floating Rocket */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-12 right-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-200 bg-white shadow-xl">
                  <Rocket className="text-sky-600" size={30} />
                </div>
              </motion.div>

              {/* Decorative Circles */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[500px] w-[500px] rounded-full border border-dashed border-sky-200"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[400px] w-[400px] rounded-full border border-dashed border-cyan-200"
              />
            </div>
            </div>
               

</div>
          
          
          
         

          {/* RIGHT SIDE */}

          <div className="relative">{/* Connection Line */}
<div className="absolute left-8 top-0 hidden h-full w-[2px] bg-gradient-to-b from-sky-200 via-sky-400 to-cyan-300 lg:block" />

<div className="space-y-8">
  {steps.map((step, index) => {
    const Icon = step.icon;

    return (
      <motion.div
        key={step.title}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
        }}
        whileHover={{
          y: -6,
        }}
        className="group relative"
      >
        {/* Timeline Dot */}
        <div className="absolute left-[19px] top-12 hidden lg:block">
          <div className="h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-lg" />
        </div>

        {/* Card */}
        <div
          className="
            ml-0
            rounded-3xl
            border
            border-slate-300
            bg-white/80
            backdrop-blur-xl
            p-8
            shadow-lg
            transition-all
            duration-300
            hover:border-sky-500
            hover:shadow-[0_20px_60px_rgba(59,130,246,0.20)]
            lg:ml-16
          "
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            {/* Icon */}
            <div
              className={`
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                ${step.color}
                text-white
                shadow-lg
                transition-transform
                duration-300
                group-hover:rotate-6
                group-hover:scale-110
              `}
            >
              <Icon size={30} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold tracking-widest text-sky-600">
                  STEP {step.number}
                </span>

                <ArrowRight
                  size={16}
                  className="hidden text-slate-400 sm:block"
                />
              </div>

              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>

</div>

</section>
);
}
          