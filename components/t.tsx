"use client";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const EnterpriseHero = () => {
  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "12+", label: "AI & Blockchain Experts" },
    { number: "50", label: "Projects Completed" },
    { number: "20+", label: "Employees" },
  ];

  return (
    <div className="pb-20 pt-28 relative">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      <div className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section: Description and Call-to-Action Button */}
          <div className="md:w-2/3 space-y-6">
            <TextGenerateEffect
              words="Empower Your Enterprise with Next-Gen AI and Blockchain Development Solutions!"
              className="text-[50px] font-bold leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400"
            >
              Trivium Studios Ltd. is a pioneer in delivering advanced Web 3.0
              solutions across industries. With expertise in custom blockchain
              development, we help businesses optimize through NFTs, crypto
              exchanges, DeFi solutions, and cryptocurrency wallets,
              streamlining processes and reducing costs. Our experience spans
              ICO, STO, and IEO token creation and includes tailored dApp
              solutions on mainstream blockchains, complemented by expert
              consultation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400"
            >
              Beyond blockchain, we provide enterprise AI solutions powered by
              strong AI and GenAI foundations. Our structured approach, covering
              domain analysis, feasibility, implementation, and model
              optimization, ensures impact at any stage of the AI journey. Our
              professionals continuously refine our skills to keep pace with
              blockchain and AI advancements, offering clients an immersive
              exploration of these transformative technologies around the globe.
              consultation.
            </motion.p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex gap-5">
                <MagicButton
                  title="Talk To Our Experts"
                  icon={<FaPerson />}
                  position="right"
                  otherClasses="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg"
                />
                <MagicButton
                  title="Schedule A Free Consultation"
                  icon={<FaCalendarAlt />}
                  position="right"
                  otherClasses="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 text-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Section: Stacked Stats */}
          <div className="md:w-1/3 flex flex-col gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-b from-purple-900/20 to-transparent"
              >
                <div className="text-5xl font-bold text-center text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-center font-medium text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseHero;
