"use client";

import { useState } from "react";
import { projects } from "../constant";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <section
      id="projects"
      className="py-10 my-20 container mx-auto px-10 md:px-32"
    >
      <div>
        <h4 className="text-center text-sm px-10 md:px-15 lg:px-20">
          Projects
        </h4>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          <span className="text-black">Where</span>
          <span className="text-[#9B9898]"> Ideas</span>
          <span className="text-black"> Became Interfaces</span>
        </h2>
      </div>

      <div className=" md:space-y-6 px-5 md:px-10 ">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-slate-200 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
              <div
                className={`${project.id === "brainwave" ? "md:order-2" : ""} ${
                  project.id === "pydata" ? "md:order-2" : ""
                }`}
              >
                <div className="relative md:h-full w-full">
                  <Image
                    src={project.images}
                    alt={project.title}
                    width={680}
                    height={450}
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col">
                <CardTitle className="text-large md:text-2xl mb-2">
                  {project.title}
                </CardTitle>

                <div className="block px-5 md:hidden mb-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(project.id)}
                    className="text-slate-700 hover:bg-transparent hover:text-black p-0"
                  >
                    {expanded[project.id] ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                <div
                  className={`${
                    expanded[project.id] ? "block" : "hidden"
                  } md:block`}
                >
                  <CardDescription className="text-black mb-4">
                    {project.description}
                  </CardDescription>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-none border border-[#9B9898] text-[#9B9898] hover:text-slate-500 hover:border-slate-500"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {project.buttons && project.buttons.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-3">
                      {project.buttons?.map((btn, index) => {
                        const buttonVariant =
                          index === 1 ? "outline" : "default";
                        if (btn.type === "link") {
                          return (
                            <Button asChild variant={buttonVariant} key={index}>
                              <Link
                                href={btn.url}
                                target="_blank"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                {btn.label}
                              </Link>
                            </Button>
                          );
                        } else if (btn.type === "video") {
                          return (
                            <Button
                              variant={buttonVariant}
                              key={index}
                              onClick={() => window.open(btn.url, "_blank")}
                            >
                              {btn.label}
                            </Button>
                          );
                        } else if (btn.type === "image") {
                          return (
                            <Button
                              variant={buttonVariant}
                              key={index}
                              onClick={() => window.open(btn.url, "_blank")}
                            >
                              {btn.label}
                            </Button>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
