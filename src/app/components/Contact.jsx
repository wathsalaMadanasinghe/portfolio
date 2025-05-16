import React from "react";
import { socialLinks } from "../constant";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 px-10 md:px-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 flex justify-center">
            <Avatar className="h-48 w-48 rounded-md">
              <AvatarImage
                src="/assets/wathsala.jpg"
                alt="Wathsala Madanasinghe"
                className="object-cover"
              />
              <AvatarFallback>WM</AvatarFallback>
            </Avatar>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-3xl font-bold mb-8">
              Let's <span className="text-[#9B9898]">Build</span> Something
              Beautiful!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <Card key={link.label} className="border-none py-1">
                  <CardContent className="p-1">
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 hover:text-[#9B9898]"
                    >
                      <div className="bg-white p-1 rounded-full">
                        <Image
                          src={link.iconPath}
                          alt={`${link.label}-logo`}
                          width={24}
                          height={24}
                          className="text-[#9B9898]"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{link.label}</div>
                        <div className="text-sm text-[#9B9898]">
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
