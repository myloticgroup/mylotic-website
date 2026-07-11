import { motion } from "framer-motion";
import {
  ArrowRight,
  Loader2,
  Send,
} from "lucide-react";

export default function SubmitButton({ loading = false }) {
  return (
    <motion.button
      type="submit"
      disabled={loading}
      whileHover={!loading ? { y: -4, scale: 1.02 } : {}}
      whileTap={!loading ? { scale: 0.98 } : {}}
      className={`
        group
        relative
        mt-6
        sm:mt-8

        flex
        w-full
        items-center
        justify-center
        gap-2
        sm:gap-3

        overflow-hidden
        rounded-2xl

        bg-gradient-to-r
        from-sky-500
        to-cyan-500

        px-5
        py-3.5

        sm:px-6
        sm:py-4

        md:px-8
        md:py-5

        text-sm
        sm:text-base
        lg:text-lg

        font-semibold
        text-white

        shadow-[0_20px_40px_rgba(14,165,233,.25)]
        transition-all
        duration-300

        hover:shadow-[0_25px_60px_rgba(14,165,233,.35)]

        disabled:cursor-not-allowed
        disabled:opacity-80
      `}
    >
      {/* Moving Shine */}
      <motion.div
        animate={{
          x: [-250, 450],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-0
          top-0
          h-full
          w-16
          -skew-x-12
          bg-white/25
          blur-md
        "
      />

      {loading ? (
        <>
          <Loader2
            size={20}
            className="relative animate-spin"
          />

          <span className="relative">
            Sending...
          </span>
        </>
      ) : (
        <>
          <Send
            className="
              relative
              h-4
              w-4

              sm:h-5
              sm:w-5

              transition-transform
              duration-300
              group-hover:-translate-y-1
            "
          />

          <span className="relative whitespace-nowrap">
            Send Message
          </span>

          <ArrowRight
            className="
              relative
              h-4
              w-4

              sm:h-5
              sm:w-5

              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </>
      )}
    </motion.button>
  );
}