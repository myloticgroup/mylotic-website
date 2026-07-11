import { useState } from "react";
import { motion } from "framer-motion";

import SubmitButton from "./SubmitButton";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

const INITIAL_FORM = {
  name: "",
  company: "",
  designation: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  requirement: "",
  source: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSubmitted(false);
  setError(false);

  try {
    const form = new FormData();

    // New Google Form Entry IDs
    form.append("entry.746990858", formData.name);
    form.append("entry.713584272", formData.company);
    form.append("entry.871802775", formData.designation);
    form.append("entry.1830440167", formData.email);
    form.append("entry.1635834765", formData.phone);
    form.append("entry.2140875064", formData.country);
    form.append("entry.776284872", formData.service);
    form.append("entry.2025073757", formData.requirement);
    form.append("entry.2138878448", formData.source);

    for (const [key, value] of form.entries()) {
  console.log(key, value);
}


    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSd4d-Zi-2uQUN-BDgvJeDPeiPZd4UXbY64RFAFMUQ3d6EXwkQ/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: form,
      }
    );

    setFormData(INITIAL_FORM);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

  } catch (err) {
    console.error(err);
    setError(true);
  } finally {
    setLoading(false);
  }
};

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/70
        bg-white/70
        p-8
        md:p-10
        backdrop-blur-2xl
        shadow-[0_25px_70px_rgba(14,165,233,.12)]
      "
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-20
          -top-20
          h-60
          w-60
          rounded-full
          bg-sky-300/20
          blur-[100px]
        "
      />

      <form onSubmit={handleSubmit} className="relative z-10">

        <div className="grid gap-6 md:grid-cols-2">

          <FormInput
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />

          <FormInput
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="ABC Pvt Ltd"
            required
          />

          <FormInput
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Manager"
            required
          />

          <FormInput
            label="Business Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />

          <FormInput
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            required
          />

          <FormInput
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="India"
            required
          />

        </div>

        {/* Service */}

        <div className="mt-6">
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Which Service are you interested in?
          </label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-2xl
              border
              border-sky-100
              bg-white/80
              px-5
              py-4
              text-slate-700
              outline-none
              transition-all
              duration-300
              focus:border-sky-400
              focus:shadow-[0_0_0_4px_rgba(56,189,248,.12)]
            "
          >
            <option value="">Select a Service</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Recruitment & Staffing">
              Recruitment & Staffing
            </option>
            <option value="GCC Setup">GCC Setup</option>
            <option value="Web & App Development">
              Web & App Development
            </option>
            <option value="Corporate Training">
              Corporate Training
            </option>
            <option value="Digital Transformation">
              Digital Transformation
            </option>
          </select>
        </div>

        {/* Requirement */}

        <div className="mt-6">
       <FormTextarea
  key={submitted ? "reset" : "normal"}
  label="Tell us about your Requirement"
  name="requirement"
  value={formData.requirement}
  onChange={handleChange}
  placeholder="Describe your project or business requirement..."
/>
        </div>

        {/* Source */}

        <div className="mt-6">
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            How did you hear about us?
          </label>

          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-2xl
              border
              border-sky-100
              bg-white/80
              px-5
              py-4
              text-slate-700
              outline-none
              transition-all
              duration-300
              focus:border-sky-400
              focus:shadow-[0_0_0_4px_rgba(56,189,248,.12)]
            "
          >
            <option value="">Select One</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Google Search">Google Search</option>
            <option value="Referral">Referral</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mt-8">
          <SubmitButton loading={loading} />
        </div>

        {submitted && (
          <div className="mt-6 rounded-xl bg-green-100 p-4 text-center text-green-700">
            ✅ Thank you! We'll connect with you shortly.
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-xl bg-red-100 p-4 text-center text-red-700">
            ❌ Something went wrong. Please try again.
          </div>
        )}

      </form>
    </motion.div>
  );
}