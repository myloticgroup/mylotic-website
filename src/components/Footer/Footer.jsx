import { motion } from "framer-motion";
import {


  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  "Home",
  "About Us",
  "Services",
  "Portfolio",
  "Industries",
  "Contact Us",
];

const services = [
"AI Solution & Automation",
"Staff Augmentation",
"Web & App Development",
"GCC Global Capability Centers",
"Digital Transformation",
 "EdTech / E-Learning",
 "Managed Services",

];

const industries = [
  "AI Solutions & Emerging Technologies ",
  "GCC(Global Capability Center)",
  "Information Technology(IT)",
  "Research and Development",
  "Non-IT",
  "BFSI?Fintech",
  "Edtech & E-learning",
  "Heathcare",
  "Media & Digitalmarketing",
  "OTT & Entertainment",
  "E-commerce",
  "Design",
  "Telecom",
  "HR & Recruitment",
  "Manufacturing"

];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070B17] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -right-40 -top-32 h-[450px] w-[450px] rounded-full bg-sky-600/20 blur-[170px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-700/10 blur-[150px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-2xl font-bold shadow-lg">

                < img src={"/logo.png"} alt="Logo"/>

              </div>

              <div>

                <h2 className="text-2xl font-bold tracking-wide">

                  Mylotic

                </h2>

                <p className="text-sm text-slate-400">

                  Group

                </p>

              </div>

            </div>

            <p className="mt-8 max-w-sm leading-8 text-slate-400">

              Empowering businesses with innovative technology,
              AI solutions, cloud services, and world-class digital
              transformation.

            </p>

            {/* Social Icons */}

            <div className="mt-8 flex gap-4">

              {[
               
              ].map((Icon, index) => (

                <motion.a
                  key={index}
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                  }}
                  href="#"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-700
                    bg-white/5
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-sky-500
                    hover:bg-sky-500
                    hover:text-white
                  "
                >

                  <Icon size={20} />

                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link}>

                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-sky-400"
                  >

                    {link}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold">

              Services

            </h3>

            <ul className="space-y-4">

              {services.map((service) => (

                <li key={service}>

                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-sky-400"
                  >

                    {service}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Industries */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >

            <h3 className="mb-6 text-xl font-semibold">

              Industries

            </h3>

            <ul className="space-y-4">

              {industries.map((industry) => (

                <li key={industry}>

                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-sky-400"
                  >

                    {industry}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Contact Starts Here */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold">
  Contact
</h3>

<ul className="space-y-6">

  <li className="flex items-start gap-4">

    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
      <Mail size={18} />
    </div>

    <div>
      <p className="text-sm text-slate-500">Email</p>
      <a
        href="mailto:info@manyaglobalsolutions.com"
        className="text-slate-300 transition hover:text-sky-400"
      >
        info.myloticgroup@gmail.com
      </a>
    </div>

  </li>

  <li className="flex items-start gap-4">

    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
      <Phone size={18} />
    </div>

    <div>
      <p className="text-sm text-slate-500">Phone</p>
      <a
        href="tel:+919876543210"
        className="text-slate-300 transition hover:text-sky-400"
      >
        +91 9896484992 , 9717101758
      </a>
    </div>

  </li>

  <li className="flex items-start gap-4">

    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
      <MapPin size={18} />
    </div>

    <div>
      <p className="text-sm text-slate-500">Location</p>
      <p className="text-slate-300">
        India
      </p>
    </div>

  </li>

</ul>

</motion.div>

</div>

{/* Bottom Divider */}

<div className="mt-20 border-t border-slate-800 pt-8">

  <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">

    <p className="text-sm text-slate-500">
      © {new Date().getFullYear()}{" "}
      <span className="font-medium text-slate-300">
       Mylotic Group
      </span>
      . All Rights Reserved.
    </p>

    <div className="flex flex-wrap items-center justify-center gap-6">

      <a
        href="#"
        className="text-sm text-slate-500 transition hover:text-sky-400"
      >
        Privacy Policy
      </a>

      <span className="hidden text-slate-700 md:block">
        •
      </span>

      <a
        href="#"
        className="text-sm text-slate-500 transition hover:text-sky-400"
      >
        Terms & Conditions
      </a>

      <span className="hidden text-slate-700 md:block">
        •
      </span>

      <a
        href="#"
        className="text-sm text-slate-500 transition hover:text-sky-400"
      >
        Cookie Policy
      </a>

    </div>

  </div>

</div>

</div>

</footer>
);
}
