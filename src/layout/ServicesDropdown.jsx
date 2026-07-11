import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "./navData";

export default function ServicesDropdown() {
  const services =
    navLinks.find((item) => item.name === "Services")?.dropdown || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="
        absolute
        left-0
        top-12
        w-80
        overflow-hidden
        rounded-2xl
        border
        border-white/20
        bg-white/90
        shadow-2xl
        backdrop-blur-2xl
      "
    >
      <div className="p-2">
        {services.map((service) => (
       <button
  key={service.name}
  type="button"
  className="
    group
    flex
    w-full
    items-center
    justify-between

    rounded-xl
    bg-white

    px-5
    py-4

    text-left
    text-black

    transition-all
    duration-300

    hover:bg-sky-50
    hover:text-sky-600
  "
>
  <span className="font-medium">
    {service.name}
  </span>

  <span
    className="
      translate-x-2
      opacity-0
      text-sky-600
      transition-all
      duration-300
      group-hover:translate-x-0
      group-hover:opacity-100
    "
  >
    →
  </span>
</button>
        ))}
      </div>
    </motion.div>
  );
}