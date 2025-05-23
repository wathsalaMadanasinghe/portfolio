"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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

          <div className="ml-auto hidden md:flex ">
            <Button
              onClick={handleView}
              className="px-6 py-3 text-white rounded-lg hover:bg-[#9B9898] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              RESUME
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
          <SheetContent
            side="right"
            className="!top-20 !h-auto !max-h-[300px] !w-[250px] rounded-xl shadow-xl transition-all duration-300 "
          >
            <nav className="flex flex-col items-center gap-6 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text-[#9B9898] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  RESUME
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
        {/* <div className="fixed lg:hidden top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow z-50">
          <Sheet open={isOpen && hasScrolled} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isOpen ? (
                  <X className="w-4 h-6" />
                ) : (
                  <Menu className="w-4 h-6" />
                )}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="!top-20 !h-auto !max-h-[300px] !w-[250px] rounded-xl shadow-xl transition-all duration-300"
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </header>
  );
}
