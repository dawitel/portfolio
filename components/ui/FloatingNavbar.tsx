"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MagicButton from "../MagicButton";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Button } from "./button";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
  dropdowns?: Array<{
    name: string;
    link: string;
    icon?: JSX.Element;
    subDropdowns?: Array<{
      name: string;
      link: string;
      icon?: JSX.Element;
    }>;
  }>;
};

type FloatingNavProps = {
  navItems: NavItem[];
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
  const [hoveredSubDropdown, setHoveredSubDropdown] = useState<string | null>(
    null,
  );

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex items-center fixed z-[5000] top-10 inset-x-0 mx-28 px-7 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0 mr-8">
          <Link href="/">
            <p className="h-8 text-white text-2xl font-bold">
              Trivium Studios Ltd.{" "}
            </p>
          </Link>
        </div>

        {/* Navigation Items Section */}
        <div className="flex-1 flex justify-center space-x-8">
          {navItems.map((navItem, idx) => {
            if (navItem.dropdowns?.length) {
              return (
                <div
                  key={`dropdown-${idx}`}
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown(idx)}
                  onMouseLeave={() => {
                    setHoveredDropdown(null);
                    setHoveredSubDropdown(null);
                  }}
                >
                  <div
                    className={cn(
                      "relative dark:text-white items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer",
                    )}
                  >
                    <span className="block sm:hidden">{navItem.icon}</span>
                    <span className="text-sm">{navItem.name}</span>
                    <span className="text-xs ml-1 transition-transform duration-200">
                      {navItem.dropdowns ? " ▼" : ""}
                    </span>
                  </div>
                  <AnimatePresence>
                    {hoveredDropdown === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 min-w-[200px] rounded-lg shadow-lg"
                        style={{
                          backdropFilter: "blur(16px) saturate(180%)",
                          backgroundColor: "rgba(17, 25, 40, 0.95)",
                          border: "1px solid rgba(255, 255, 255, 0.125)",
                        }}
                      >
                        <div className="p-2 space-y-2">
                          {navItem.dropdowns.map((dropdownItem, dIdx) => (
                            <div
                              key={`dropdown-item-${dIdx}`}
                              className="relative"
                              onMouseEnter={() =>
                                setHoveredSubDropdown(`${idx}-${dIdx}`)
                              }
                              onMouseLeave={() => setHoveredSubDropdown(null)}
                            >
                              <Link
                                href={dropdownItem.link}
                                className="flex items-center justify-between space-x-2 text-white hover:bg-white/10 rounded-md p-2 transition-colors"
                              >
                                <div className="flex items-center space-x-2">
                                  {dropdownItem.icon && (
                                    <span>{dropdownItem.icon}</span>
                                  )}
                                  <span className="text-sm">
                                    {dropdownItem.name}
                                  </span>
                                </div>
                                {dropdownItem.subDropdowns && (
                                  <span className="text-xs">▶</span>
                                )}
                              </Link>
                              {dropdownItem.subDropdowns && (
                                <AnimatePresence>
                                  {hoveredSubDropdown === `${idx}-${dIdx}` && (
                                    <motion.div
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -10 }}
                                      className="absolute left-full top-0 ml-1 min-w-[200px] rounded-lg shadow-lg"
                                      style={{
                                        backdropFilter:
                                          "blur(16px) saturate(180%)",
                                        backgroundColor:
                                          "rgba(17, 25, 40, 0.95)",
                                        border:
                                          "1px solid rgba(255, 255, 255, 0.125)",
                                      }}
                                    >
                                      <div className="p-2 space-y-2">
                                        {dropdownItem.subDropdowns.map(
                                          (subItem, sIdx) => (
                                            <Link
                                              key={`sub-dropdown-item-${sIdx}`}
                                              href={subItem.link}
                                              className="flex items-center space-x-2 text-white hover:bg-white/10 rounded-md p-2 transition-colors"
                                            >
                                              {subItem.icon && (
                                                <span>{subItem.icon}</span>
                                              )}
                                              <span className="text-sm">
                                                {subItem.name}
                                              </span>
                                            </Link>
                                          ),
                                        )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-white items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500",
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Book a Call Button Section */}
        <button className="relative inline-flex h-12.5 w-65 overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-blue-900 hover:bg-blue-800 transition-colors text-white font-semibold py-3 px-10 backdrop-blur-3xl">
            Book A Free Call
          </span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
