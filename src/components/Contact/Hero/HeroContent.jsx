import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function HeroContent() {
  // WhatsApp
const handleSend = () => {
  const message = encodeURIComponent(
    "Hi Mylotic! I'm interested in your services and would like to know more."
  );

  window.open(
    `https://wa.me/919896484992?text=${message}`,
    "_blank"
  );

  setTimeout(() => {
    window.open(
      `https://wa.me/919876543210?text=${message}`,
      "_blank"
    );
  }, 500);
};

  // Google Calendar Meeting
  const handleMeeting = () => {
    const title = encodeURIComponent("Meeting with Mylotic");

    const details = encodeURIComponent(
      "I'd like to schedule a meeting to discuss your services."
    );

    window.open(
      `https://calendar.app.google/whZFqyYqHuWXmovWA`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
    >
            {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-5 py-2 shadow-lg backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-sky-500" />

        <span className="font-semibold text-sky-600">
          Get In Touch With Mylotic
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl xl:text-7xl">
        Let's Create

        <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
          Something Amazing
        </span>

        Together
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Whether you're interested in industry-ready training,
        software development, AI solutions, or business
        collaboration, our team is ready to help you.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-5">
        <button
          onClick={handleMeeting}
          className="group flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600"
        >
          Schedule a Meeting

          <ArrowRight className="transition duration-300 group-hover:translate-x-1" />
        </button>
<button
  onClick={() => handleSend("919717101758")}
  className="flex items-center gap-2 rounded-full border border-sky-300 bg-white/70 px-8 py-4 font-semibold text-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:text-sky-600"
>
  <MessageCircle className="h-5 w-5" />
  Chat with Sales
</button>

<button
  onClick={() => handleSend("919876543210")}
  className="flex items-center gap-2 rounded-full border border-sky-300 bg-white/70 px-8 py-4 font-semibold text-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:text-sky-600"
>
  <MessageCircle className="h-5 w-5" />
  Chat with Support
</button>
      </div>

      {/* Stats */}

      <div className="mt-12 flex flex-wrap gap-10">
        <div>
          <h3 className="text-3xl font-black text-sky-600">
            24×7
          </h3>

          <p className="text-slate-600">
            Customer Support
          </p>
        </div>
      </div>
    </motion.div>
  );
}
