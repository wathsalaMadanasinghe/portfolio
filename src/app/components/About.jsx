import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/wathsalaMadanasinghe",
    label: "Github",
    iconPath: "/assets/github-logo.svg",
  },
  {
    href: "https://www.linkedin.com/in/wathsala-madanasinghe-916072312",
    label: "Linkedin",
    iconPath: "/assets/linkedin-logo.svg",
  },
  {
    href: "mailto:wathsalamadanasinghe@gmail.com",
    label: "Email",
    iconPath: "/assets/email-logo.svg",
  },
  {
    href: "https://www.behance.net/chirantwathsal",
    label: "Behance",
    iconPath: "/assets/behance-logo.svg",
  },
];

const About = () => {
  return (
    <section id="about" className="py-5 container mx-auto px-5">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <div className="md:w-1/3 flex justify-center">
          <Avatar className="lg:h-[450px] lg:w-[450px] md:h-[300px] md:w-[300px] border-none  items-center h-[200px] w-[200px]">
            <AvatarImage
              src="./assets/profile-pic.png"
              alt="Wathsala Madanasinghe"
            />
            <AvatarFallback>WM</AvatarFallback>
          </Avatar>
        </div>

        <div className="md:w-2/3 space-y-6">
          <div>
            <h1 className="text-center text-3xl  font-bold mb-2 md:text-left">
              I'm Wathsala Madanasinghe
            </h1>
            <h2 className="text-center text-xl text-shadow-black mb-6 md:text-left">
              Full-stack developer | UI Designer
            </h2>

            <p className="text-slate-950 text-center md:text-left">
              I'm a BSc. Physical Science undergraduate at the University of Sri
              Jayewardenepura, studying Computer Science, Mathematics, and
              Physics. I’m passionate about full-stack web development and enjoy
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

        <div className="flex flex-row md:flex-col gap-6 items-center justify-center">
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
                  className=" group-hover:filter group-hover:brightness-75 transition-all duration-300"
                  style={{ filter: "invert(0)" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
