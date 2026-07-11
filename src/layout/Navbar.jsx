import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-7xl"
      >
     <nav
  className={`
    relative
    overflow-visible
    flex
    items-center
    justify-between
    px-6
    transition-all
    duration-500
    ${
      scrolled
        ? "h-16 rounded-2xl border border-slate-200 bg-white shadow-2xl"
        : "h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl"
    }
  `}
>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                transition
                hover:bg-white/20
                lg:hidden
              "
            >
              <Menu className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}