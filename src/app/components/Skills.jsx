"use client";

import Image from "next/image";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const [skillCategories] = useState([
    {
      id: "languages",
      title: "Languages",
      icon: (
        <Image
          src="./assets/languages-logo.svg"
          alt="languages"
          width={40}
          height={40}
        />
      ),
      skills: [
        {
          id: "javascript",
          title: "JavaScript",
          icon: (
            <Image
              src="./assets/js-logo.svg"
              alt="javascript"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "html",
          title: "HTML",
          icon: (
            <Image
              src="./assets/html-logo.svg"
              alt="html"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "css",
          title: "CSS",
          icon: (
            <Image
              src="./assets/css-logo.svg"
              alt="css"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "mysql",
          title: "MySQL",
          icon: (
            <Image
              src="./assets/mysql-logo.svg"
              alt="mysql"
              width={30}
              height={30}
            />
          ),
        },
      ],
    },
    {
      id: "frontend",
      title: "Front-End",
      icon: (
        <Image
          src="/assets/front-end-logo.jpg"
          alt="front-end"
          width={40}
          height={40}
        />
      ),

      skills: [
        {
          id: "react",
          title: "React",
          icon: (
            <Image
              src="./assets/react-logo.svg"
              alt="react"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "next",
          title: "Next.js",
          icon: (
            <Image
              src="./assets/next-logo.svg"
              alt="next"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "tailwindcss",
          title: "TailwindCSS",
          icon: (
            <Image
              src="./assets/ts-logo.svg"
              alt="tailwind"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "shacdn",
          title: "Shadcn-ui",
          icon: (
            <Image
              src="./assets/shadcn-logo.svg"
              alt="shadcn"
              width={30}
              height={30}
            />
          ),
        },
      ],
    },
    {
      id: "backend",
      title: "Back-end",
      icon: (
        <Image
          src="./assets/back-end-logo.svg"
          alt="back-end"
          width={40}
          height={40}
        />
      ),

      skills: [
        {
          id: "node",
          title: "Node.js",
          icon: (
            <Image
              src="./assets/node-logo.svg"
              alt="node"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "express",
          title: "Epress.js",
          icon: (
            <Image
              src="./assets/express-logo.svg"
              alt="express"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "firebase",
          title: "Firebase",
          icon: (
            <Image
              src="./assets/firebase-logo.svg"
              alt="firebase"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "mysql",
          title: "MySQL",
          icon: (
            <Image
              src="./assets/mysql-logo.svg"
              alt="mysql"
              width={30}
              height={30}
            />
          ),
        },
      ],
    },
    {
      id: "designtools",
      title: "Designing Tools",
      icon: (
        <Image
          src="./assets/designing-logo.svg"
          alt="designing"
          width={40}
          height={40}
        />
      ),

      skills: [
        {
          id: "figma",
          title: "Figma",
          icon: (
            <Image
              src="./assets/figma-logo.svg"
              alt="figma"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "ai",
          title: "Adobe Illustrator",
          icon: (
            <Image
              src="./assets/AI-logo.svg"
              alt="illustrator"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "blender",
          title: "Blender",
          icon: (
            <Image
              src="./assets/blender-logo.svg"
              alt="blender"
              width={30}
              height={30}
            />
          ),
        },
      ],
    },

    {
      id: "devtools",
      title: "Developing Tools",
      icon: (
        <Image
          src="./assets/developing-logo.svg"
          alt="developing"
          width={40}
          height={40}
        />
      ),

      skills: [
        {
          id: "vscode",
          title: "Visual Studio Code",
          icon: (
            <Image
              src="./assets/vscode-logo.svg"
              alt="vscode"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "git",
          title: "Git and Github",
          icon: (
            <Image
              src="./assets/git-logo.svg"
              alt="git"
              width={30}
              height={30}
            />
          ),
        },
        {
          id: "vercel",
          title: "Vercel (deployment)",
          icon: (
            <Image
              src="./assets/vercel-logo.svg"
              alt="vercel"
              width={30}
              height={30}
            />
          ),
        },
      ],
    },
  ]);

  const firstRow = skillCategories.slice(0, 3);
  const secondRow = skillCategories.slice(3);
  return (
    <div className="container py-6 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex mx-4 flex-col md:flex-row md:mb-4">
          {firstRow.map((category, idx) => (
            <div
              key={category.id}
              className="flex-none md:flex-1 mt-2 p-4 relative px-10 md:px-none lg:px-none"
            >
              {/* vertical line between columns */}
              {idx < firstRow.length - 1 && (
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-600"></div>
              )}
              {/* horizontal line between rows */}
              {idx < firstRow.length - 1 && (
                <div className="md:hidden h-px w-full bg-gray-600 absolute bottom-0 left-0 right-0"></div>
              )}

              <div className="flex items-center justify-between">
                <div className=" flex items-center justify-start md:justify-center gap-2 pb-2">
                  <div className="p-1">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <button
                  className="md:hidden"
                  onClick={() => toggleCategory(category.id)}
                  aria-label={
                    expandedCategories[category.id]
                      ? "Collapse skills"
                      : "Expand skills"
                  }
                >
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>

              <ul className="space-y-2 mt-2">
                {/* desktop view */}
                {category.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="hidden md:flex items-center gap-2 ml-20"
                  >
                    <div className="h-4 w-4 text-slate-700 mr-2 mt-1 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span>{skill.title}</span>
                  </li>
                ))}

                {/* mobile view */}
                {expandedCategories[category.id] &&
                  category.skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="md:hidden flex items-center gap-2 ml-8"
                    >
                      <div className="h-4 w-4 text-black mr-2 mt-1 flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span>{skill.title}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* horizontal line between rows */}
        <div className="h-px bg-gray-600 mx-4"></div>

        <div className="flex mx-4 flex-col md:flex-row justify-center mt-4">
          {secondRow.map((category, idx) => (
            <div
              key={category.id}
              className="md:w-fit mt-2 p-4 relative px-10 md:px-none lg:px-none"
            >
              {/* vertical line between columns */}
              {idx < secondRow.length - 1 && (
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-600"></div>
              )}
              {/* horizontal line between rows */}
              {idx < secondRow.length - 1 && (
                <div className="md:hidden h-px w-full bg-gray-600 absolute bottom-0 left-0 right-0"></div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start md:justify-center gap-2 pb-2">
                  <div className="p-1">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <button
                  className="md:hidden"
                  onClick={() => toggleCategory(category.id)}
                  aria-label={
                    expandedCategories[category.id]
                      ? "Collapse skills"
                      : "Expand skills"
                  }
                >
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>

              <ul className="space-y-2 mt-2">
                {/* desktop view */}
                {category.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className=" hidden md:flex items-center gap-2 ml-20"
                  >
                    <div className="h-4 w-4 text-slate-700 mr-2 mt-1 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span>{skill.title}</span>
                  </li>
                ))}
                {/* mobile view */}
                {expandedCategories[category.id] &&
                  category.skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="md:hidden flex items-center gap-2 ml-8"
                    >
                      <div className="h-4 w-4 text-black mr-2 mt-1 flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span>{skill.title}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
