const Header = () => {
  return (
    <nav className="w-full h-[60px] p-4 bg-[#2C5364] flex items-center justify-between text-white relative">
      {/* Logo */}
      <h1 className="text-xl font-bold">Our Company</h1>
      <input
        type="checkbox"
        id="menu-toggle"
        className="peer hidden"
      />

      {/* The button with the SVG paths */}
      <label
        htmlFor="menu-toggle"
        className="cursor-pointer w-8 h-8 block items-center justify-center md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {/* Hamburger Icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
            className="peer-checked:hidden"
          />
          {/* Cross Icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
            className="hidden peer-checked:block"
          />
        </svg>
      </label>

      {/* Navigation Links */}
      <div
        className="hidden peer-checked:flex flex-col md:flex-row md:flex gap-4 absolute md:static top-[60px] left-0 w-full md:w-auto bg-[#2C5364] md:bg-transparent z-10 p-4 md:p-0"
      >
        <a href="#about" className="block py-2 md:py-0 hover:text-gray-300">
          About
        </a>
        <a href="#products" className="block py-2 md:py-0 hover:text-gray-300">
          Our Product
        </a>
      </div>
    </nav>
  )
}

export default Header;