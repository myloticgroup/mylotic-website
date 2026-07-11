import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

import { navLinks } from "./navData";

export default function MobileMenu({ open, setOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              right-0
              top-0
              z-50
              h-screen
              w-[88%]
              max-w-sm
              bg-white
              shadow-2xl
              p-6
              overflow-y-auto
              lg:hidden
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between">

              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-12 w-12 object-contain"
                />

                <div>
                  <h2 className="font-bold text-slate-800">
                    Mylotic
                  </h2>

                  <p className="text-sm text-slate-600">
                    Group
                  </p>
                </div>
              </NavLink>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-slate-100"
              >
                <X size={26} />
              </button>

            </div>

            {/* Menu */}

            <div className="mt-10 space-y-2">

              {navLinks.map((item) => {

                if (!item.dropdown) {
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-lg font-medium transition ${
                          isActive
                            ? "bg-sky-50 text-sky-600"
                            : "text-slate-700 hover:bg-slate-100"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  );
                }

                return (
                  <div key={item.name}>

                    {/* Services */}

                    <div className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-100">

                      <NavLink
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "font-semibold text-sky-600"
                            : "font-semibold text-slate-700"
                        }
                      >
                        {item.name}
                      </NavLink>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setServicesOpen((prev) => !prev);
                        }}
                        className="rounded-full p-2 hover:bg-slate-200"
                      >
                        <ChevronDown
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                    </div>

                    <AnimatePresence>

                      {servicesOpen && (

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >

                          <div className="ml-5 mt-2 border-l-2 border-sky-500 pl-4">

                            {item.dropdown.map((service) => (

                              <NavLink
                                key={service.name}
                                to={service.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                  `block py-3 transition ${
                                    isActive
                                      ? "text-sky-600"
                                      : "text-slate-600 hover:text-sky-600"
                                  }`
                                }
                              >
                                {service.name}
                              </NavLink>

                            ))}

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </div>
                );

              })}

            </div>

            {/* CTA */}

            <button
              className="
                mt-10
                w-full
                rounded-full
                bg-sky-500
                py-3
                font-semibold
                text-white
                transition
                hover:bg-sky-600
              "
            >
              Get Quote
            </button>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}