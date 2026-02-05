"use client";

import { publications } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20" id="publications">
      <h1 className="heading">
        My{" "}
        <span className="text-purple">Publications</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-8 mt-10 max-w-4xl mx-auto px-4">
        {publications.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            className="w-full group cursor-pointer block"
            style={{ position: "relative", zIndex: 10 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-[#0c1225] hover:bg-[#131a36] transition-all duration-300 border border-white/[0.1] hover:border-purple/50 pointer-events-none">
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={item.thumbnail}
                  alt={item.source}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-white group-hover:text-purple transition-colors duration-300 leading-tight">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#8a8fa3]">
                  {item.source}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
