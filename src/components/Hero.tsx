const Hero = () => (
  <section className="page relative">
    {/* Content */}
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Empowering Innovation
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Transforming ideas into reality with cutting-edge solutions and
        unparalleled expertise.
      </p>
      <div className="flex gap-4 flex-col md:flex-row">
        <a
          href="#about"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg rounded-md"
        >
          Learn More
        </a>
        <a
          href="#products"
          className="bg-transparent border-2 border-white px-6 py-3 text-lg rounded-md hover:bg-white hover:text-gray-900"
        >
          Explore Products
        </a>
      </div>
    </div>
  </section>
);

export default Hero;