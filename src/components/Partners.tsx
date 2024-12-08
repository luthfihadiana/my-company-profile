import React from "react";

const Partners = () => {
  const partners = [
    "https://via.placeholder.com/150x50?text=Partner+1",
    "https://via.placeholder.com/150x50?text=Partner+2",
    "https://via.placeholder.com/150x50?text=Partner+3",
    "https://via.placeholder.com/150x50?text=Partner+4",
    "https://via.placeholder.com/150x50?text=Partner+5",
    "https://via.placeholder.com/150x50?text=Partner+6",
  ];

  return (
    <section id="partners" className="page px-4 py-8 w-full mid:py-16 mid:px-8 flex">
      <div className="max-w-7xl m-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <p className="text-lg text-white mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our trusted partners:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
