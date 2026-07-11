import { motion } from "framer-motion";
import {
  Briefcase,
  Layers3,
  Lightbulb,
  Globe2,
  Rocket,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "Strategic Business Partner",
    description:
      "We work closely with clients to understand their business goals, challenges, and vision, delivering tailored solutions that create measurable impact and long-term value.",
  },
  {
    icon: Layers3,
    title: "Talent & Technology Ecosystem",
    description:
      "From Recruitment & Staffing to AI, Software Development, GCC, Managed Services and Digital Transformation—we provide everything under one roof.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description:
      "We leverage modern technologies, AI, automation, and industry best practices to accelerate business growth and digital transformation.",
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    description:
      "Flexible engagement models with access to global talent and technology expertise for seamless project delivery worldwide.",
  },
  {
    icon: Rocket,
    title: "Speed & Scalability",
    description:
      "Our agile delivery approach enables faster turnaround, rapid deployment, and scalable solutions as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Transparency",
    description:
      "Every engagement is built on trust, accountability, professionalism, and consistent delivery with complete transparency.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Success",
    description:
      "Your success is our priority. We build lasting partnerships focused on achieving measurable business outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready Growth",
    description:
      "Whether you're a startup or an enterprise, we empower your business with the right people, technology, and expertise.",
  },
];

const trustPoints = [
  "Trusted Partner for Talent, Technology & Digital Transformation",
  "End-to-End Business & IT Solutions",
  "Agile, Scalable & Cost-Effective Engagement Models",
  "Access to Global Talent & Advanced Technologies",
  "Commitment to Quality, Innovation & Excellence",
  "Customer-Centric Approach with Long-Term Vision",
  "Faster Delivery & Business Agility",
  "Dedicated to Driving Growth & Creating Lasting Impact",
];

export default function WhyUs() {
  return (
    <section className="py-28 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-sky-300/30 bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-sky-700 backdrop-blur-xl">
            Why Choose Mylotic Group
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-800 md:text-6xl">
            Empowering Businesses with Talent,
            <br />
            Technology & Global Capabilities
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-900">
            At <strong>Mylotic Group</strong>, we go beyond delivering
            services we build long-term partnerships that empower businesses
            to scale, innovate, and stay ahead in an ever-evolving digital
            landscape. Our commitment to excellence, agility, and customer
            success makes us a trusted technology and business partner.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-white/30 bg-white/20 p-8 backdrop-blur-2xl shadow-lg transition-all"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Section */}

        <div className="mt-28 grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-slate-800">
              Why Businesses Trust Mylotic Group
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We combine deep industry expertise with innovative technologies
              to deliver scalable, reliable, and future-ready business
              solutions.
            </p>

            <div className="mt-10 space-y-5">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 text-sky-600" size={22} />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/30 bg-white/20 p-10 backdrop-blur-3xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-slate-800">
              Your Future-Ready Growth Partner
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Whether you're a startup looking to scale, an enterprise driving
              digital transformation, or an organization seeking world-class
              talent, Mylotic Group delivers the people, technology, and
              expertise needed to achieve sustainable growth and lasting
              success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}