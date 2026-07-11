import { motion } from "framer-motion";
import { cards } from "./HeroData";
import HeroStats from "./HeroStats";

export default function HeroCards() {
  return (
    <div className="flex w-full justify-center lg:justify-end">
      <div
        className="
          w-full
          max-w-full
          sm:max-w-[560px]
          md:max-w-[650px]
          lg:max-w-[720px]
          xl:max-w-[800px]
          2xl:max-w-[850px]
          space-y-6
          lg:space-y-8
        "
      >
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              animate={{
                y: [0, -12, 0, 12, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  w-full
                  rounded-[32px]
                  border
                  border-white/30
                  bg-white/20
                  backdrop-blur-3xl
                  shadow-2xl
                  transition-all
                  duration-500

                  px-5 py-6
                  sm:px-7 sm:py-7
                  md:px-8 md:py-8
                  lg:px-10 lg:py-9
                "
              >
                <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-center
                      rounded-3xl
                      bg-sky-100
                      text-sky-600

                      h-16 w-16
                      sm:h-18 sm:w-18
                      lg:h-20 lg:w-20
                    "
                  >
                    <Icon size={34} />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Font unchanged */}
                    <h3 className="text-2xl font-bold text-slate-800">
                      {card.title}
                    </h3>

                    {/* Font unchanged */}
                    <p className="mt-3 text-lg leading-8 text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        <HeroStats />
      </div>
    </div>
  );
}