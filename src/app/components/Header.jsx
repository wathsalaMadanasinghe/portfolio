"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/#about" },
    { name: "PROJECTS", href: "/#projects" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="container flex w-full items-center space-between h-16 mx-auto px-4">
        {/* Desktop navigation */}
        <nav className="flex flex-wrap items-center justify-between py-4 w-full">
          <div className="absolute flex-1 justify-center lg:w-auto left-1/2 transform -translate-x-1/2 flex gap-15 lg:gap-x-20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hidden md:flex font-medium hover:text-[#9B9898] transition-colors space-x-8"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="  ml-auto hidden md:flex ">
            <Button asChild className="hover:bg-[#9B9898]">
              <Link href="/#contact">RESUME</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text=slate-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  CONTACT
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
