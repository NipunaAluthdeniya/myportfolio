import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">experience</span>
      </h1>

      <div className="flex flex-col items-center justify-center gap-8 mt-10 max-w-5xl mx-auto px-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="w-full text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-transparent flex items-center justify-center p-4">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-white leading-tight">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#BEC1DD] text-justify" style={{ textAlignLast: "left" }}>
                  {card.desc}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                  {card.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 text-sm font-medium rounded-full bg-[#10132E] border border-[#1a1f3c] text-[#7793f0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
