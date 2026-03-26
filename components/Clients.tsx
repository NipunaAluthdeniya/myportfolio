"use client";

import { FaLocationArrow, FaGithub, FaCode, FaServer } from "react-icons/fa6";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-48 md:gap-10 lg:gap-12 p-6 mt-40 max-w-6xl mx-auto">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-full"
            key={item.id}
          >
            <div className="relative flex flex-col items-center justify-center w-full rounded-2xl border border-white/[0.1] bg-opacity-10 bg-black p-6">
              <div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex flex-col items-center gap-4 w-full mt-16 mb-6">
                <div className="flex items-center justify-center gap-3">
                  {item.frontendLink && (
                    <a
                      href={item.frontendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs lg:text-sm text-purple hover:text-purple/80 transition-colors px-3 py-1.5 rounded border border-purple/30 hover:border-purple/60"
                    >
                      <FaCode size={14} />
                      Frontend
                    </a>
                  )}
                  {item.backendLink && (
                    <a
                      href={item.backendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs lg:text-sm text-purple hover:text-purple/80 transition-colors px-3 py-1.5 rounded border border-purple/30 hover:border-purple/60"
                    >
                      <FaServer size={14} />
                      Backend
                    </a>
                  )}
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-4">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:text-purple/80 transition-colors"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;