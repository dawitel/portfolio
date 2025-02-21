"use client";
import { FaRocket } from "react-icons/fa6";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="h-ful bg-black-100 text-white pt-28 relative">
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
            Who We Are
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4">
            About Trivium Studios
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            We’re a team of innovators passionate about harnessing AI and Web3
            technologies to shape the future. Learn more about our mission,
            values, and journey.
          </p>
        </div>
      </section>

      {/* About Sections with Alternating Pattern */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section 1: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-300">
                At Trivium Studios, our mission is to empower businesses and
                individuals with transformative AI and Web3 solutions. We strive
                to bridge the gap between cutting-edge technology and real-world
                applications.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/herorr.jpg" // Replace with your image
                alt="Our Mission"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-300">
                We envision a world where decentralized systems and intelligent
                automation drive progress. Our goal is to lead the charge in
                creating scalable, innovative solutions for the digital age.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/herorr.jpg" // Replace with your image
                alt="Our Vision"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* CTA Between Sections */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Ready to Join Our Journey?
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Whether you’re a client or a collaborator, we’d love to hear from
              you. Let’s explore how we can work together to shape the future.
            </p>
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 text-lg font-semibold"
            >
              <a href="/contact">
                Get in Touch <FaRocket className="ml-2" />
              </a>
            </Button>
          </div>

          {/* Section 3: Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Team
              </h3>
              <p className="text-lg text-gray-300">
                Our diverse team of experts brings together skills in AI,
                blockchain, and software development. We’re united by a passion
                for innovation and excellence.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/herorr.jpg" // Replace with your image
                alt="Our Team"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 4: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Values
              </h3>
              <p className="text-lg text-gray-300">
                Integrity, creativity, and collaboration define us. We believe
                in building trust with our clients and delivering solutions that
                make a lasting impact.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/herorr.jpg" // Replace with your image
                alt="Our Values"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-300">
            Want to learn more about how we can help you? Let’s connect today.
          </p>
          <Button
            asChild
            className="mt-6 bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 text-lg font-semibold"
          >
            <a href="/contact">
              Contact Us <FaRocket className="ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
