import React from "react";

const Advantage = () => {
  const features = [
    {
      icon: "https://via.placeholder.com/64", // Replace with your icon/image URL
      title: "Feature One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at neque sed velit euismod vestibulum.",
    },
    {
      icon: "https://via.placeholder.com/64", // Replace with your icon/image URL
      title: "Feature Two",
      description:
        "Curabitur suscipit nisi at felis tristique, at consectetur risus dignissim. Sed in ante ligula.",
    },
    {
      icon: "https://via.placeholder.com/64", // Replace with your icon/image URL
      title: "Feature Three",
      description:
        "Vestibulum vehicula purus non justo venenatis, ut pharetra velit vehicula. Donec accumsan lorem non magna.",
    },
    {
      icon: "https://via.placeholder.com/64", // Replace with your icon/image URL
      title: "Feature Four",
      description:
        "Aenean euismod erat quis lorem tincidunt, at tincidunt ex convallis. Proin sit amet accumsan risus.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="px-4 w-full py-8 flex mid:page mid:px-8 mid:py-16 lg:page"
    >
      <div className="max-w-7xl m-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow mid:p-6 text-gray-600"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
