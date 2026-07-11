import { motion } from "framer-motion";

export default function FormTextarea({
  label,
  placeholder,
}) {
  return (
    <motion.div
      whileFocus={{ scale: 1.01 }}
      className="group relative"
    >
      <label className="mb-3 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <textarea
        rows={6}
        placeholder={placeholder}
        className="
          w-full
          resize-none
          rounded-2xl
          border
          border-sky-100
          bg-white/80
          px-5
          py-4
          text-slate-700
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300

          placeholder:text-slate-400

          focus:border-sky-400
          focus:bg-white
          focus:shadow-[0_0_0_4px_rgba(56,189,248,.12)]
        "
      />

      <span
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-sky-500
          to-cyan-400
          transition-all
          duration-300

          group-focus-within:w-full
        "
      />
    </motion.div>
  );
}