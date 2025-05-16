import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "../constant";

export default function Footer() {
  return (
    <footer className="bg-black py-8 w-full">
      <div className="w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg text-center md:text-left font-bold text-white mb-2">
              Wathsala Madanasinghe
            </h3>
            <p className="text-sm text-center md:text-left  text-[#9B9898] mb-2">
              wathsalamadanasinghe@gmail.com
            </p>
            <p className="text-sm text-center md:text-left  text-[#9B9898] mb-2">
              +74 720 865 659
            </p>
          </div>

          <div className="flex gap-6 items-center justify-center">
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
                    className="text-white group-hover:filter group-hover:brightness-75 transition-all duration-300"
                    style={{ filter: "invert(1)" }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-[#9B9898]">
          <p>©2025 Wathsala Madanasinghe. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
