import React from "react";

const About = () => {
  return (
    <section
      className="page relative flex justify-center items-center py-12 px-4 md:px-8 lg:px-16"
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] justify-self-center lg:justify-self-end">
          <img
            src="https://via.placeholder.com/350x350"
            alt="About Us"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Column: Text */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-sm md:text-lg lg:text-xl mb-6 leading-relaxed">
            Our company is committed to delivering innovative solutions that
            empower businesses worldwide. With a team of passionate
            professionals, we specialize in providing exceptional products and
            services that meet the highest standards of quality and reliability.
          </p>
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed">
            From ideation to implementation, we take pride in creating value
            for our clients. Join us on our mission to make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
