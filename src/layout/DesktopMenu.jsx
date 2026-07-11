import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import { navLinks } from "./navData";
import ServicesDropdown from "./ServicesDropdown";

export default function DesktopMenu() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <ul className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10">
      {navLinks.map((item) => {
        if (!item.dropdown) {
          return (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[15px] xl:text-base font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-sky-600"
                      : "text-slate-700 hover:text-sky-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-sky-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          );
        }

        return (
          <li
            key={item.name}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1">
              {/* Services Link */}
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[15px] xl:text-base font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-sky-600"
                      : "text-slate-700 hover:text-sky-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-sky-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>

              {/* Dropdown Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setServicesOpen((prev) => !prev);
                }}
                className="rounded-full p-1 hover:bg-slate-100 transition"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {servicesOpen && <ServicesDropdown />}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}