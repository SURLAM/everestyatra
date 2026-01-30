

"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ChevronDown, Mail, Phone, Globe } from "lucide-react";
import dynamic from "next/dynamic";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

const Select = dynamic(() => import("react-select"), { ssr: false });





export default function ContactPage() {
  const router = useRouter();

  const countries = useMemo(
    () =>
      countryList().getData().map((c) => ({
        value: c.value,
        label: c.label,
        flag: c.value,
      })),
    []
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    pax: 1,
    startDate: null,
    endDate: null,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setToast(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        country: "",
        pax: 1,
        startDate: null,
        endDate: null,
        message: "",
      });

      setTimeout(() => {
        setToast(false);
        router.push("/");
      }, 1800);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#061421] text-white lg:min-h-screen lg:grid lg:grid-cols-2">
      {/* LEFT */}
      <div className="relative flex items-center justify-center py-20 lg:py-0">
        <div className="relative w-full h-[35vh] lg:h-105 lg:w-[70%] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://ik.imagekit.io/2x1rpp2vh/EverestHimalayas.webp"
            alt="Himalayas"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className=" hidden lg:flex flex-col items-center gap-4 absolute bottom-12 lg:pb-36">
          <span className="flex items-center gap-4 text-sm text-gray-300">
            <Mail size={16} /> info@everestyatra.com <br /> nepalcamping@gmail.com
          </span>
         
          <Link
            href="https://everestyatra.com/"
            className="flex items-center gap-4 text-md text-yellow-500 font-light"
          >
            <Globe size={20} /> www.everestyatra.com
          </Link>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center px-4 lg:px-8 lg:my-20">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl border border-white/10 rounded-md p-8 lg:p-10 space-y-4 mt-20 lg:mt-0 bg-[#061421]"
        >
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-medium">
              Contact Our Travel Expert
            </h1>
            <p className="text-sm text-yellow-400 border-b border-white/10 pb-6">
              Personalized response within 24 hours
            </p>
          </div>

          <div className="space-y-6 pt-6">
            <Field label="Full Name">
              <input
                className="lux-input"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </Field>

            <Field label="Email Address">
              <input
                type="email"
                className="lux-input"
                placeholder="email@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </Field>

            <Field label="Phone / WhatsApp (Optional)">
              <input
                className="lux-input"
                placeholder="+1 234 567 890"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </Field>

            <Field label="Country">
              <Select
                options={countries}
                placeholder="Select country"
                onChange={(c) => setForm({ ...form, country: c.label })}
                formatOptionLabel={({ label, flag }) => (
                  <div className="flex items-center gap-2">
                    <ReactCountryFlag svg countryCode={flag} />
                    <span>{label}</span>
                  </div>
                )}
                styles={selectStyle}
              />
            </Field>

            <Field label="Trip Start Date">
              <DatePicker
                selected={form.startDate}
                onChange={(date) => setForm({ ...form, startDate: date })}
                dateFormat="dd MMM yyyy"
                placeholderText="Select start date"
                className="lux-input"
                minDate={new Date()}
              />
            </Field>

            <Field label="Trip End Date">
              <DatePicker
                selected={form.endDate}
                onChange={(date) => setForm({ ...form, endDate: date })}
                dateFormat="dd MMM yyyy"
                placeholderText="Select end date"
                className="lux-input"
                minDate={form.startDate || new Date()}
              />
            </Field>

            <Field label="Number of Travelers">
              <div className="relative">
                <select
                  className="lux-input appearance-none pr-10"
                  value={form.pax}
                  onChange={(e) =>
                    setForm({ ...form, pax: Number(e.target.value) })
                  }
                >
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} Person{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
              </div>
            </Field>

            <Field label="Message">
              <textarea
                rows={4}
                className="lux-input"
                placeholder="Tell us about your trip plan..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-medium flex items-center justify-center gap-2 transition
              ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-400"
              }`}
          >
            {loading ? "Sending..." : "Send Inquiry"} <Send size={16} />
          </button>
        </motion.form>
      </div>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl text-sm z-50"
        >
          ✅ Inquiry sent successfully
        </motion.div>
      )}

      <style jsx global>{`
        .lux-input {
          width: 100%;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: white;
          font-size: 0.85rem;
          outline: none;
        }

        .lux-input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .lux-input:focus {
          border-color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-3">
      <label className="text-xs tracking-wide text-white/70">
        {label}
      </label>
      {children}
    </div>
  );
}

const selectStyle = {
  control: (base) => ({
    ...base,
    background: "rgba(255,255,255,0.06)",
    borderColor: "rgba(255,255,255,0.15)",
    minHeight: 44,
    boxShadow: "none",
  }),
  singleValue: (b) => ({ ...b, color: "gray" }),
  placeholder: (b) => ({ ...b, color: "rgba(255,255,255,0.6)" }),
  menu: (b) => ({ ...b, backgroundColor: "#061421" }),
};
