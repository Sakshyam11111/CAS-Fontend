import { useEffect, useState } from 'react';
import { MdOutlineHome } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleSearch = () => {
    setIsSearchVisible(prevState => !prevState);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-50 shadow-md" data-aos="fade-down">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Cas Bank</h1>

        <div className="flex items-center md:space-x-6 space-x-4">
          <div className="hidden md:flex space-x-6">
            <a href="/" className="flex items-center text-black hover:text-green-600">
              <MdOutlineHome className="mr-1" />
              Home
            </a>
            <a href="#" className="text-black hover:text-green-600">Accounts</a>
            <a href="#" className="text-black hover:text-green-600">Loans</a>
            <a href="#" className="text-black hover:text-green-600">Investors</a>
            <a href="#" className="text-black hover:text-green-600">Deposits</a>
            <a href="#" className="text-black hover:text-green-600">Payments</a>
            <a href="#" className="text-black hover:text-green-600">Cards</a>
          </div>

          {/* Search Functionality */}
          <div className="relative flex items-center">
            <button onClick={toggleSearch} aria-expanded={isSearchVisible} className="text-gray-600 hover:text-green-600">
              <FaSearch />
            </button>
            {isSearchVisible && (
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-full py-1 px-4 ml-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                onBlur={() => setIsSearchVisible(false)}
              />
            )}
          </div>

          {/* Open Account Button */}
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
            OPEN AN ACCOUNT
          </button>

          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} aria-expanded={isMenuOpen} className="md:hidden text-gray-600 hover:text-green-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-300" data-aos="fade-up">
          <div className="flex flex-col items-center space-y-2 py-3">
            <a href="/" className="text-black hover:text-green-600" onClick={closeMenu}>Home</a>
            <a href="#" className="text-black hover:text-green-600" onClick={closeMenu}>Accounts</a>
            <a href="#" className="text-black hover:text-green-600" onClick={closeMenu}>Loans</a>
            <a href="#" className="text-black hover:text-green-600" onClick={closeMenu}>Investors</a>
            <a href="#" className="text-black hover:text-green-600" onClick={closeMenu}>Deposits</a>
            <a href="#" className="text-black hover:text-green-600" onClick={closeMenu}>Payments</a>
            <a href="#" className="text-black hover:text-green-600" onClick={closeMenu}>Cards</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;