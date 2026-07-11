import { motion } from "framer-motion";
import { stats } from "./HeroData";

export default function HeroStats() {
  return (
    <div
      className="
        mt-10
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {stats.map((item, index) => {
        const match = item.number.match(/^(\d+)(.*)$/);
        const value = match ? match[1] : item.number;
        const suffix = match ? match[2] : "";

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              flex
              flex-col
              items-center
              justify-center

              min-h-[170px]
              sm:min-h-[180px]
              lg:min-h-[220px]

              rounded-[28px]
              border
              border-sky-300/20
              bg-slate-900/10
              backdrop-blur-xl
              shadow-lg

              p-5
              sm:p-6

              text-center

              transition-all
              duration-300
              hover:bg-slate-900/15
            "
          >
            {/* Number */}

            <div className="flex items-start justify-center whitespace-nowrap">
              <span className="text-5xl font-black leading-none text-sky-600 sm:text-6xl lg:text-[64px]">
                {value}
              </span>

              {suffix && (
                <span className="ml-1 text-3xl font-black leading-none text-sky-600 sm:text-4xl lg:text-[42px]">
                  {suffix}
                </span>
              )}
            </div>

            {/* Title */}

            <p
              className="
                mt-5
                max-w-full
                px-2

                text-center
                text-base
                font-medium
                leading-7
                text-slate-700

                lg:text-lg
              "
            >
              {item.title}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}