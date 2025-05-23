"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { socialLinks } from "../constant";

export default function Profile() {
  // Move PDF-related state to main component
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  // PDF config
  const config = {
    filename: "Wathsala_Madanasinghe_Resume.pdf",
    path: "/resume.pdf", // Direct path from public folder
    title: "Resume - Wathsala Madanasinghe",
  };

  // Move PDF handlers to main component
  const handleDownload = async () => {
    setIsDownloading(true);
    setError(null);

    try {
      // Simple direct download approach
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Change this to your actual filename
      link.download = "Wathsala_Madanasinghe_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleView = () => {
    setError(null);
    try {
      // This forces the browser to treat it as a PDF
      const link = document.createElement("a");
      link.href = "/resume.pdf#view=FitH";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError(err instanceof Error ? err.message : "View failed");
    }
  };

  // Your existing state

  const [isMobile, setIsMobile] = useState(false);

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

            {/* PDF Buttons Section */}
            <div className="flex flex-col items-center gap-4">
              {/* Error Message */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="px-4 bg-[#9B9898] text-white rounded-lg hover:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDownloading ? (
                    <>
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                      Downloading...
                    </>
                  ) : (
                    <>Download Resume</>
                  )}
                </Button>
              </div>
            </div>
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
          // Desktop Layout - Vertical column of icons
          <div className="w-16 flex-none hidden md:flex flex-col items-center justify-center">
            <div className=" flex flex-row items-center">
              <div className="relative w-full h-full ">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="group "
                  >
                    <div className="w-8 h-8 relative py-10 ">
                      <Image
                        src={link.iconPath}
                        alt={`${link.label}-logo`}
                        fill
                        className="hover:fill-slate-500"
                        style={{ filter: "invert(0)" }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
