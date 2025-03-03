import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { IoCloudDownloadSharp } from "react-icons/io5";

const Hero = () => {
  const handleDownloadClick = () => {
    // This function will be triggered when the button is clicked
    const resumeUrl = "/dawit-elias-updated-resume.pdf"; // Path to your resume file
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "dawit-elias-updated-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="pb-20 pt-32">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-[10px] text-center text-blue-100 max-w-80">
            Dynamic Web Magic with genuine taste
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-xs md:text-lg lg:text-2xl">
            Hi! I&apos;m Dawit, a Software Engineer based in{" "}
            <span className="text-green-700 font-extrabold">Eth</span>
            <span className="text-yellow-400 font-extrabold">io</span>
            <span className="text-red-700 font-extrabold">pia</span>.
          </p>
          <div className="flex gap-4">
            <a href="#about">
              <MagicButton
                title="See the magic"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="">
              <MagicButton
                title="Download my resume"
                icon={<IoCloudDownloadSharp />}
                position="right"
                handleClick={handleDownloadClick}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
