"use client";

import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { categories } from "../constant";
import Image from "next/image";

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const [skillCategories] = useState(categories);

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
                  <div className="p-1">
                    <Image
                      src={category.iconPath}
                      alt={category.title}
                      width={40}
                      height={40}
                    />
                  </div>
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
                      <Image
                        src={skill.iconPath}
                        alt={skill.title}
                        width={30}
                        height={30}
                      />
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
                        <Image
                          src={skill.iconPath}
                          alt={skill.title}
                          width={30}
                          height={30}
                        />
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
                  <div className="p-1">
                    <Image
                      src={category.iconPath}
                      alt={category.title}
                      width={40}
                      height={40}
                    />
                  </div>
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
                      <Image
                        src={skill.iconPath}
                        alt={skill.title}
                        width={30}
                        height={30}
                      />
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
                        <Image
                          src={skill.iconPath}
                          alt={skill.title}
                          width={30}
                          height={30}
                        />
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
