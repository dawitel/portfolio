"use client";
import { FaLocationArrow, FaRocket } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/Pin";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function RecentProjectsPage() {
  // Split projects into chunks of 3
  const projectRows = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectRows.push(projects.slice(i, i + 3));
  }

  return (
    <div className="h-full bg-black-100 text-white relative pt-28">
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
            Our Work
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4">
            Explore Our Recent Projects
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Discover how we’ve empowered clients with cutting-edge AI and Web3
            solutions. From innovative automation to decentralized platforms,
            our projects showcase our commitment to transforming industries.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg italic text-gray-300">
              &quot;Innovation is at the heart of everything we do.&quot;
            </p>
            <p className="text-sm text-gray-400 mt-2">- Trivium Studios Team</p>
          </div>

          {/* Project Rows with Text and CTAs */}
          {projectRows.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-16">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {row.map((item) => (
                  <div
                    key={item.id}
                    className="flex-1 min-w-[300px] max-w-[400px] h-[35rem] flex items-center justify-center"
                  >
                    <PinContainer
                      title="github.com/dawitel"
                      href="https://twitter.com/@DawitEliasge"
                    >
                      <div className="relative flex items-center justify-center w-full h-[20vh] overflow-hidden mb-6">
                        <div
                          className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                          style={{ backgroundColor: "#13162D" }}
                        >
                          <Image
                            src="/bg.png"
                            height={50}
                            width={50}
                            alt="bgimg"
                          />
                        </div>
                        <Image
                          src={item.img.src}
                          alt="cover"
                          height={item.img.height}
                          width={item.img.width}
                          className="z-10 absolute bottom-0"
                        />
                      </div>

                      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                        {item.title}
                      </h1>

                      <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                        style={{ color: "#BEC1DD", margin: "1vh 0" }}
                      >
                        {item.des}
                      </p>

                      <div className="flex items-center justify-between mt-4 mb-4">
                        <div className="flex items-center">
                          {item.iconLists.map((icon, index) => (
                            <div
                              key={index}
                              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                              style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                              }}
                            >
                              <Image
                                src={icon}
                                width={45}
                                height={45}
                                alt={`icon-${index}`}
                                className="p-2"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center items-center">
                          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                            <a href={item.link}>
                              {item.isRepoBased
                                ? "On GitHub"
                                : "Check Live Site"}
                            </a>
                          </p>
                          <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </div>
                      </div>

                      {/* Description at the Bottom */}
                      <p className="text-sm text-gray-400 mt-2">
                        {item.des ||
                          "A showcase of our expertise in delivering innovative solutions tailored to client needs."}
                      </p>
                    </PinContainer>
                  </div>
                ))}
              </div>

              {/* Additional Text and CTA Between Rows */}
              {rowIndex < projectRows.length - 1 && (
                <div className="text-center mt-12 space-y-6">
                  <h3 className="text-2xl font-semibold text-white">
                    More Cutting-Edge Solutions Await
                  </h3>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Each project reflects our dedication to pushing boundaries
                    and delivering value. Want to see how we can transform your
                    ideas into reality?
                  </p>
                  <Button
                    asChild
                    className="bg-blue-500 hover:bg-blue-600 transition-colors px-8 py-5 text-lg font-semibold"
                  >
                    <a href="/contact">
                      Schedule a Consultation <FaRocket className="ml-2" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-300">
            Ready to collaborate on your next big project? Let’s make it happen.
          </p>
          <Button
            asChild
            className="mt-6 bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 text-lg font-semibold"
          >
            <a href="/contact">
              Get in Touch <FaRocket className="ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
