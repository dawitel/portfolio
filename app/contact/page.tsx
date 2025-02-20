"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "@/components/ui/calendar";

export default function ContactPage() {
  const [step, setStep] = useState(1); // Step 1: Selection, Step 2: Form
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [clientType, setClientType] = useState<"individual" | "company" | null>(
    null,
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: null as Date | null,
    message: "",
  });

  // Handle client type selection
  const handleClientTypeSelect = (type: "individual" | "company") => {
    setClientType(type);
    setStep(2); // Move to form step
  };

  // Handle going back to Step 1
  const handleBack = () => {
    setStep(1); // Return to selection step
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle date and time change
  const handleDateTimeChange = (dateTime: Date | null) => {
    setFormData((prev) => ({ ...prev, dateTime }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ clientType, ...formData }); // Replace with your API call
  };

  return (
    <div className="h-full bg-black-100 text-white pt-28">
      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero-like Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="uppercase tracking-widest text-xs text-blue-500 font-semibold">
            Schedule a Call
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4">
            Let’s Build Your Future Together
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Discuss how our AI and Web3 solutions can transform your business.
          </p>
        </div>
      </section>

      {/* Two-Step Form Section */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg italic text-gray-300">
              &quot;We’re here to help you navigate the future of
              technology.&quot;
            </p>
            <p className="text-sm text-gray-400 mt-2">- Trivium Studios Team</p>
          </div>
          <div className="max-w-4xl mx-auto bg-black-100 p-8 rounded-lg shadow-lg border border-white/10 overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                  {/* Individual Client Option */}
                  <div
                    className="flex-1 bg-gray-800 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors cursor-pointer"
                    onClick={() => handleClientTypeSelect("individual")}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      Individual Client
                    </h3>
                    <p className="mt-2 text-gray-300">
                      For personal projects or individual needs.
                    </p>
                    <FaArrowRight className="mt-4 text-blue-500 mx-auto" />
                  </div>
                  {/* Company Option */}
                  <div
                    className="flex-1 bg-gray-800 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors cursor-pointer"
                    onClick={() => handleClientTypeSelect("company")}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      Company
                    </h3>
                    <p className="mt-2 text-gray-300">
                      For business solutions and enterprise needs.
                    </p>
                    <FaArrowRight className="mt-4 text-blue-500 mx-auto" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    {/* Left Section: Form Fields */}
                    <div className="md:w-1/2 space-y-6">
                      <div>
                        <label className="flex items-center text-gray-200 mb-2">
                          <FaUser className="mr-2" /> Full Name
                        </label>
                        <Input
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-black-100 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="flex items-center text-gray-200 mb-2">
                          <FaEnvelope className="mr-2" /> Email Address
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-black-100 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="flex items-center text-gray-200 mb-2">
                          <FaPhone className="mr-2" /> Phone Number (optional)
                        </label>
                        <Input
                          name="phone"
                          placeholder="+1 234 567 8900"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-black-100 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="flex items-center text-gray-200 mb-2">
                          <FaComment className="mr-2" /> Message (optional)
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Tell us more about your needs"
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-black-100 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Right Section: Calendar, Back Button, and Submit Button */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                      <div>
                        <label className="flex items-center text-gray-200 mb-2">
                          <svg
                            className="mr-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          Preferred Date and Time
                        </label>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-lg border-2 border-gray-600 shadow"
                        />
                      </div>
                      <div className="flex gap-4">
                        <Button
                          type="button"
                          onClick={handleBack}
                          className="w-full bg-gray-600 hover:bg-gray-700 transition-colors flex items-center justify-center"
                        >
                          <FaArrowLeft className="mr-2" /> Back
                        </Button>
                        <Button
                          type="submit"
                          className="w-full bg-blue-500 hover:bg-blue-600 transition-colors"
                        >
                          Schedule Call
                        </Button>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-12 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300">
            Prefer to email? Send us a message at{" "}
            <a
              href="mailto:contact@example.com"
              className="text-blue-400 hover:underline"
            >
              contact@example.com
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            Or call us at{" "}
            <a
              href="tel:+12345678900"
              className="text-blue-400 hover:underline"
            >
              +1 234 567 8900
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© 2023 Trivium Studios Ltd. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:underline text-blue-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:underline text-blue-400">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
