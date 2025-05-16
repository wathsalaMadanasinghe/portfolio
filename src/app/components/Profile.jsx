"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { socialLinks } from "../constant";

export default function Profile() {
  const [mouseY, setMouseY] = useState(0);
  const containerRef = useRef(null);
  const [containerCenter, setContainerCenter] = useState({ y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile initially
    setIsMobile(window.innerWidth < 768);

    // Calculate the center point of the container
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerCenter({ y: rect.top + rect.height / 2 });
    }

    const handleResize = () => {
      // Update mobile state on resize
      setIsMobile(window.innerWidth < 768);

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerCenter({ y: rect.top + rect.height / 2 });
      }
    };

    // Handle initial setup and resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Recalculate container center when component mounts properly
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerCenter({ y: rect.top + rect.height / 2 });
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      setMouseY(e.clientY);
    }
  };

  const calculatePosition = (index, totalItems) => {
    // If mobile, just return a centered position without effects
    if (isMobile) {
      return {
        x: 0,
        y: 0,
        zIndex: 10,
        opacity: 1,
        scale: 1,
      };
    }

    // Circle parameters
    const radius = 120; // Radius of the circular path
    const totalAngle = 120; // Total angle of the arc in degrees

    // Calculate mouse influence with increased sensitivity
    const mouseInfluence = mouseY ? (mouseY - containerCenter.y) / 100 : 0;

    // Base angle for each item (evenly distributed along the arc)
    const itemAngleStep = totalAngle / (totalItems - 1);
    const baseAngleRad =
      (index * itemAngleStep - totalAngle / 2) * (Math.PI / 180);

    // Add mouse influence to rotate the whole arc
    const mouseRotationInfluence = mouseInfluence * 60 * (Math.PI / 180);
    const angleRad = baseAngleRad + mouseRotationInfluence;

    // Calculate position on the circle
    const x = 0; // Center x position
    const y = -radius * Math.sin(angleRad); // Negative sine for correct direction

    // Calculate z-index and opacity based on y position
    const zIndex = 10 - Math.floor(Math.abs(y) / 20);
    const opacity = 1 - Math.abs(y) / (radius * 1.5);
    const scale = 1 - Math.abs(y) / (radius * 3);

    return { x, y, zIndex, opacity, scale };
  };

  return (
    <section id="profile" className="py-5 w-full">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mx-10 items-center">
        <div className="flex justify-center">
          <Avatar className="lg:h-[450px] lg:w-[450px] md:h-[300px] md:w-[300px] border-none items-center h-[200px] w-[200px]">
            <AvatarImage
              src="./assets/profile-pic.png"
              alt="Wathsala Madanasinghe"
            />
            <AvatarFallback>WM</AvatarFallback>
          </Avatar>
        </div>

        <div className="md:w-2/3 space-y-6">
          <div>
            <h1 className="text-center text-2xl md:text-2xl lg:text-[45px] font-bold mb-2 md:text-left">
              I'm Wathsala Madanasinghe
            </h1>
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl text-shadow-black mb-6 md:text-left">
              Full-stack developer | UI Designer
            </h2>

            <p className="text-slate-950 text-xs md:text-sm lg:text-xl text-center md:text-left">
              I'm a BSc. Physical Science undergraduate at the University of Sri
              Jayewardenepura, studying Computer Science, Mathematics, and
              Physics. I'm passionate about full-stack web development and enjoy
              creating user-friendly, responsive applications using modern
              technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button asChild>
              <Link
                href="https://www.linkedin.com/in/wathsala-madanasinghe-916072312"
                className="flex items-center gap-2"
              >
                Connect LinkedIn
              </Link>
            </Button>
            <Button className="bg-[#9B9898]" asChild>
              <Link
                href="https://github.com/wathsalaMadanasinghe"
                download
                className="flex items-center gap-2"
              >
                Download Resume
              </Link>
            </Button>
          </div>
        </div>

        {/* Social Links - Different layout for mobile vs desktop */}
        {isMobile ? (
          // Mobile Layout - Horizontal row of icons
          <div className="w-full flex justify-center mt-4">
            <div className="flex flex-row gap-6 items-center">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="group"
                >
                  <div className="w-8 h-8 relative">
                    <Image
                      src={link.iconPath}
                      alt={`${link.label}-logo`}
                      fill
                      className="group-hover:filter group-hover:brightness-75 transition-all duration-300"
                      style={{ filter: "invert(0)" }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          // Desktop/Tablet Layout - Circular motion effect
          <div
            className="relative h-80 w-16 flex-none hidden md:flex flex-col items-center justify-center"
            onMouseMove={handleMouseMove}
          >
            <div
              ref={containerRef}
              className="relative h-full w-full flex flex-col items-center justify-center"
            >
              {/* Top gradient overlay */}
              <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

              {/* Social links container */}
              <div className="relative w-full h-full">
                {socialLinks.map((link, index) => {
                  const pos = calculatePosition(index, socialLinks.length);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out group"
                      style={{
                        transform: `translateX(-50%) translateY(${pos.y}px) scale(${pos.scale})`,
                        opacity: pos.opacity,
                        zIndex: pos.zIndex,
                      }}
                    >
                      <div className="w-8 h-8 relative">
                        <Image
                          src={link.iconPath}
                          alt={`${link.label}-logo`}
                          fill
                          className={`group-hover:filter group-hover:brightness-75 transition-all duration-300 ${
                            Math.abs(pos.y) > 90 ? "blur-sm" : ""
                          }`}
                          style={{ filter: "invert(0)" }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
