import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mt-15 md:py-10 md:my-10 container mx-auto px-5"
    >
      <div className="flex flex-col gap-4 justify-center">
        <div>
          <h4 className="text-left md:text-center text-sm px-10 md:px-15 lg:px-20">
            About
          </h4>
        </div>

        <div>
          <h2 className="text-3xl text-left md:text-center font-bold px-10 md:px-15 lg:px-20">
            <span>Pixel, </span>
            <span className="text-[#9B9898]">Code</span>
            <span> & Passion</span>
          </h2>
        </div>

        <p className="text-black text-left md:text-center text-xs md:text-sm lg:text-xl px-10 md:px-15 lg:px-20">
          I blend front-end elegance with back-end logic. With a foundation in
          physical sciences and a love for UI/UX, I design interfaces that
          breathe and systems that scale. Whether it's a dynamic web app or a
          polished visual, I love turning complex ideas into seamless digital
          products.
        </p>
      </div>
    </section>
  );
};

export default About;
