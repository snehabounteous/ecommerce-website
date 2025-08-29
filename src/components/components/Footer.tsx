import Link from 'next/link';
import Image from 'next/image';
import logo from "../../assets/shopping-cart.png";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto px-4 w-[80%]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-x-3 w-full sm:w-auto mb-4 sm:mb-0 justify-center sm:justify-start">
          <Link href="/" className="flex items-center gap-x-3">
            <Image src={logo} alt="logo" height={40} width={40} />
            <p className="text-2xl sm:text-3xl font-bold">
              Prime<span className="text-primary">Basket</span>
            </p>
          </Link>
        </div>

          <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            <a href="/" className="text-gray-400 hover:text-[#6abf48] transition-colors duration-200">Home</a>
            <a href="/about" className="text-gray-400 hover:text-[#6abf48] transition-colors duration-200">About</a>
            <a href="/contact" className="text-gray-400 hover:text-[#6abf48] transition-colors duration-200">Contact</a>
            <a href="/privacy-policy" className="text-gray-400 hover:text-[#6abf48] transition-colors duration-200">Privacy Policy</a>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6abf48] transition-colors duration-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6abf48] transition-colors duration-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6abf48] transition-colors duration-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-6">
          <p>&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
