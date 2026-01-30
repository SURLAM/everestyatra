

"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Send, ChevronUp, ChevronDown } from "lucide-react";


const Select = dynamic(() => import("react-select"), { ssr: false });

export default function ReserveClient({ slug }) {
  const router = useRouter();

  const countries = useMemo(
    () =>
      countryList()
        .getData()
        .map((c) => ({ value: c.value, label: c.label, flag: c.value })),
    []
  );

  const formatOptionLabel = ({ label, flag }) => (
    <div className="flex items-center gap-2">
      <ReactCountryFlag
        svg
        countryCode={flag}
        style={{ width: 20, height: 20 }}
      />
      <span>{label}</span>
    </div>
  );

  const [form, setForm] = useState({
    package: slug.replace(/-/g, " "),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    startDate: null,
    endDate: null,
    pax: 1,
    message: "",
    terms: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleCountryChange = (c) => setForm({ ...form, country: c.label });

  const incrementPax = () => setForm({ ...form, pax: form.pax + 1 });
  const decrementPax = () =>
    setForm({ ...form, pax: form.pax > 1 ? form.pax - 1 : 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.terms) return alert("Please accept terms and conditions.");

    setLoading(true);

    const res = await fetch("/api/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setTimeout(() => router.push("/"), 3000);
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl lg:text-4xl font-serif text-center text-gray-100 mb-10 mt-20">
        Booking For : {form.package}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/20 backdrop-blur-md border border-white/10 shadow-xl rounded-sm p-8 lg:p-14 space-y-6 transition-all duration-500"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            required
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="border px-4 py-3 rounded-sm w-full bg-gray-900/50 text-white focus:ring-1 focus:ring-green-400 transition"
          />
          <input
            required
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border px-4 py-3 rounded-sm w-full bg-gray-900/50 text-white focus:ring-1 focus:ring-green-400 transition"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            required
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border px-4 py-3 rounded-sm w-full bg-gray-900/50 text-white focus:ring-1 focus:ring-green-400 transition"
          />
          <input
            name="phone"
            placeholder="Phone / WhatsApp (Optional)"
            value={form.phone}
            onChange={handleChange}
            className="border px-4 py-3 rounded-sm w-full bg-gray-900/50 text-white focus:ring-1 focus:ring-green-400 transition"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Select
            options={countries}
            placeholder="Select Country"
            value={countries.find((c) => c.label === form.country)}
            onChange={handleCountryChange}
            formatOptionLabel={formatOptionLabel}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: 5,
                borderColor: "white/10",
                backgroundColor: "gray-900/50",
                minHeight: 56,
              }),
              singleValue: (b) => ({ ...b, color: "white" }),
              menu: (b) => ({
                ...b,
                backgroundColor: "#061421",
                color: "gray",
              }),
            }}
          />

          <div className="flex items-center border rounded-sm overflow-hidden bg-gray-900/50">
            <button
              type="button"
              onClick={decrementPax}
              className="px-3 py-2 text-white hover:bg-green-600 transition"
            >
              <ChevronDown size={16} />
            </button>
            <input
              type="text"
              name="pax"
              readOnly
              value={form.pax}
              className="w-full text-center bg-gray-900/50 text-white focus:outline-none"
            />
            <button
              type="button"
              onClick={incrementPax}
              className="px-3 py-2 text-white hover:bg-green-600 transition"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <DatePicker
            selected={form.startDate}
            onChange={(date) => setForm({ ...form, startDate: date })}
            placeholderText="Trip Start Date"
            className="border px-4 py-3 rounded-sm w-full bg-gray-900/50 text-white focus:ring-1 focus:ring-green-400 transition"
          />
          <DatePicker
            selected={form.endDate}
            onChange={(date) => setForm({ ...form, endDate: date })}
            placeholderText="Trip End Date"
            className="border px-4 py-3 rounded-sm w-full bg-gray-900/50 text-white focus:ring-1 focus:ring-green-400 transition"
          />
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Extra Inquiries"
          rows={4}
          className="border px-4 py-3 rounded-sm w-full bg-gray-900/50 text-white focus:ring-1 focus:ring-green-400 transition"
        />

        <label className="flex items-center gap-3 text-white">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="w-4 h-4 accent-green-500"
          />
          I accept{" "}
          <a href="/faq/terms" className="text-green-400 underline">
            Terms & Conditions
          </a>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-400 text-white py-3 rounded-sm font-bold text-lg flex justify-center items-center gap-2 transition"
        >
          {loading ? (
            <span className="animate-pulse">Submitting...</span>
          ) : (
            <>
              Confirm Booking <Send size={18} />
            </>
          )}
        </button>

        {success && (
          <p className="text-green-500 text-center mt-4 font-semibold transition">
            Thank you for choosing us! We will contact you shortly.
          </p>
        )}
      </form>
    </main>
  );
}
