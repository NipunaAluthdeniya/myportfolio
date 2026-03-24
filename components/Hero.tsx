import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web App Powered by Next.js
          </p>

          <div className="mt-8 mb-8">
            <img
              src="/PortfolioImage.jpg"
              alt="Portfolio"
              className="w-80 h-80 rounded-full border-2 border-purple/50 shadow-lg"
            />
          </div>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless, User-Centric Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="text-justify md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl max-w-4xl">
            <p>
              Hello, I&apos;m <span className="text-purple font-semibold">Nipuna Aluthdeniya</span>, a Software Engineer with
              experience in building and maintaining software solutions.
            </p>
            <p className="mt-4">
              Throughout my journey as a developer, I have worked across multiple frontend frameworks including <span className="text-purple">React.js</span>, <span className="text-purple">React TypeScript</span>, <span className="text-purple">Next.js</span>, and <span className="text-purple">Angular</span>, consistently delivering high-quality solutions that meet client expectations. I also bring hands-on experience with backend technologies such as <span className="text-purple">Node.js</span>, <span className="text-purple">.NET</span>, and <span className="text-purple">Spring Boot</span>, enabling me to contribute effectively across the full stack. My experience spans both independent work and collaborative team environments, highlighting my adaptability and strong communication skills.
            </p>
            <p className="mt-4">
              Currently, I am a Software Engineer with over <span className="text-purple">2 years of professional experience</span>, and I am open to opportunities that challenge me, expand my skill set, and allow me to maximize my potential.
            </p>
            <p className="mt-4">
              Outside of work, I enjoy traveling with friends and staying active at the gym, which helps me maintain balance and motivation.
            </p>
          </div>

          {/* <a href="#about">
            <MagicButton
              title="Show my skills"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
