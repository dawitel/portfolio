"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaRocket } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  // Create motion values for smooth animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 500], [5, -5]);
  const rotateY = useTransform(x, [0, 500], [-5, 5]);

  return (
    <div className="pb-20 pt-44 relative">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}
          <div className="md:w-2/3 space-y-6">
            <h1 className="uppercase tracking-widest text-xs text-blue-500 font-semibold">
              Next-gen decentralized solutions
            </h1>

            <TextGenerateEffect
              words="Build Your Future With AI-Powered & Web3-Ready Software Solutions"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-left"
            />

            <p className="text-lg md:text-xl text-gray-400 dark:text-gray-300">
              We specialize in crafting cutting-edge AI and Web3 solutions that
              redefine industries. From intelligent automation to decentralized
              applications, We empower businesses to innovate, scale, and thrive
              in the digital age.
            </p>

            <div className="flex sm:flex-row gap-6 mt-8">
              <MagicButton
                title="Schedule A Free Consultation"
                icon={<FaRocket />}
                position="right"
                otherClasses="pt-3 pb-3 bg-blue-500 text-lg font-semibold"
              />
              <MagicButton
                title="Explore Our Solutions"
                icon={<IoShieldCheckmarkSharp />}
                position="right"
                otherClasses="pt-3 pb-3 text-lg font-semibold"
              />
            </div>
          </div>

          {/* Parallax Image Section */}
          <div
            className="md:w-1/2 relative"
            onMouseMove={handleMouseMove}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{
                x: useTransform(
                  x,
                  [0, 500],
                  [mousePosition.x * -0.01, mousePosition.x * 0.01],
                ),
                y: useTransform(
                  y,
                  [0, 500],
                  [mousePosition.y * -0.01, mousePosition.y * 0.01],
                ),
                rotateX,
                rotateY,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 20 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="relative h-96 w-full rounded-2xl overflow-hidden border-2 border-purple-500/30"
              >
                <Image
                  src="/herorr.jpg"
                  alt="Web3 & AI Solutions"
                  className="object-cover  w-full h-full transform hover:scale-105 transition-transform duration-300"
                  height={100}
                  width={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 text-center"
        >
          <div
            className="p-6 rounded-lg backdrop-blur-sm border border-white/10"
            style={{
              backdropFilter: "blur(12px) saturate(160%)",
              backgroundColor: "rgba(17, 25, 40, 0.65)",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="text-4xl font-bold text-blue-400">50+</div>
            <div className="text-[20px] font-medium mt-2 text-gray-200">
              AI and Web3 Projects Deployed
            </div>
          </div>

          <div
            className="p-6 rounded-lg backdrop-blur-sm border border-white/10"
            style={{
              backdropFilter: "blur(12px) saturate(160%)",
              backgroundColor: "rgba(17, 25, 40, 0.65)",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="text-4xl font-bold text-blue-400">5</div>
            <div className="text-[20px] font-medium mt-2 text-gray-200">
              AI Experts
            </div>
          </div>

          <div
            className="p-6 rounded-lg backdrop-blur-sm border border-white/10"
            style={{
              backdropFilter: "blur(12px) saturate(160%)",
              backgroundColor: "rgba(17, 25, 40, 0.65)",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="text-4xl font-bold text-blue-400">20+</div>
            <div className="text-[20px] font-medium mt-2 text-gray-200">
              Satisfied Clients Globally
            </div>
          </div>

          <div
            className="p-6 rounded-lg backdrop-blur-sm border border-white/10"
            style={{
              backdropFilter: "blur(12px) saturate(160%)",
              backgroundColor: "rgba(17, 25, 40, 0.65)",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="text-4xl font-bold text-blue-400">4</div>
            <div className="text-[20px] font-medium mt-2 text-gray-200">
              Blockchain Experts
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
