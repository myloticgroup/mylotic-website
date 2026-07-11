import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroContent() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="
        relative
        z-10
        flex
        h-full
        flex-col
        justify-center
        w-full
        max-w-3xl
        mx-auto
        lg:mx-0
      "
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}

      <div
        className="
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-sky-300/30
          bg-white/20
          backdrop-blur-xl

          px-4 py-2
          sm:px-5
        "
      >
        <Sparkles
          size={18}
          className="text-sky-600"
        />

        <span className="text-sm font-medium text-slate-700">
          Empowering Businesses Worldwide
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl">
        Empowering Businesses

        <span className="block text-sky-600">
          With Talent
        </span>

        <span className="block text-sky-600">
          Technology &
        </span>

        Global Capabilities
      </h1>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-slate-1000
        "
      >
        Mylotic Group delivers end-to-end innovative enterprise business
        solutions, including Recruitment & Staffing, AI Solutions, GCC
        Enablement, Digital Transformation, Web & App Development, EdTech
        Training Programs, and Smart AI Solutions. We help businesses scale
        faster, smarter, and more strategically by combining technology,
        talent, and innovation to drive sustainable growth.
      </p>

      {/* Buttons */}

      <div
        className="
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-4
          sm:gap-5
          w-full
          sm:w-auto
        "
      >
        <button
          className="
            rounded-full
            bg-sky-500
            px-9
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-sky-600
          "
        >
          Company Deck
        </button>

        <button
          type="button"
          onClick={() => navigate("/services")}
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-white/30
            bg-white/20
            px-8
            py-4
            font-semibold
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white/30
            hover:scale-105
          "
        >
          <Play size={18} />

          Explore Services

          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}